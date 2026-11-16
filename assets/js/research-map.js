(function () {
  'use strict';

  var map = document.querySelector('[data-research-map]');
  if (!map) return;

  var canvas = map.querySelector('[data-map-canvas]');
  var svg = map.querySelector('[data-map-edges]');
  var toggle = map.querySelector('[data-motion-toggle]');
  var detailTitle = map.querySelector('[data-detail-title]');
  var detailDescription = map.querySelector('[data-detail-description]');
  var defaultTitle = detailTitle.textContent;
  var defaultDescription = detailDescription.textContent;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var userPaused = false;
  var visible = true;
  var frame = null;
  var elapsed = 0;
  var previousTime = null;
  var width = 0;
  var height = 0;
  var hovered = null;
  var focused = null;
  var selected = null;
  var active = null;
  var nodes = Array.prototype.map.call(map.querySelectorAll('[data-node]'), function (element, index) {
    return {
      element: element,
      id: element.dataset.node,
      hub: element.dataset.kind === 'hub',
      groups: element.dataset.groups.split(','),
      x: parseFloat(element.style.getPropertyValue('--x')) / 100,
      y: parseFloat(element.style.getPropertyValue('--y')) / 100,
      phase: index * 1.9,
      radius: 0,
      px: 0,
      py: 0
    };
  });
  var hubs = {};
  nodes.forEach(function (node) { if (node.hub) hubs[node.id] = node; });
  var edges = [];

  nodes.forEach(function (node) {
    if (node.hub) return;
    node.groups.forEach(function (group) {
      var hub = hubs[group];
      if (!hub) return;
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'research-map__edge');
      line.setAttribute('data-color', hub.element.dataset.color);
      svg.appendChild(line);
      edges.push({ element: line, hub: hub, topic: node });
    });
  });

  function updateHighlight() {
    active = hovered || focused || selected;
    nodes.forEach(function (node) {
      var related = !active || node === active || (active.hub ? node.groups.indexOf(active.id) !== -1 : node.hub && active.groups.indexOf(node.id) !== -1);
      node.element.classList.toggle('is-dimmed', !related);
      node.element.classList.toggle('is-related', Boolean(active && related));
      node.element.classList.toggle('is-active', node === active);
      if (node.hub) node.element.setAttribute('aria-pressed', String(selected === node));
    });
    edges.forEach(function (edge) {
      var related = active && (active.hub ? edge.hub === active : edge.topic === active);
      edge.element.classList.toggle('is-active', Boolean(related));
      edge.element.classList.toggle('is-dimmed', Boolean(active && !related));
    });
    detailTitle.textContent = active ? active.element.dataset.title : defaultTitle;
    detailDescription.textContent = active ? active.element.dataset.description : defaultDescription;
  }

  function draw() {
    nodes.forEach(function (node) {
      // Deterministic, small movements keep every label readable and links easy to hit.
      var amplitude = reduceMotion.matches ? 0 : node.hub ? 3 : 5;
      node.px = width * node.x + Math.sin(elapsed * .00034 + node.phase) * amplitude;
      node.py = height * node.y + Math.cos(elapsed * .00028 + node.phase) * amplitude;
      node.element.style.left = node.px + 'px';
      node.element.style.top = node.py + 'px';
    });
    edges.forEach(function (edge) {
      var dx = edge.topic.px - edge.hub.px;
      var dy = edge.topic.py - edge.hub.py;
      var length = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / length;
      var uy = dy / length;
      edge.element.setAttribute('x1', edge.hub.px + ux * edge.hub.radius);
      edge.element.setAttribute('y1', edge.hub.py + uy * edge.hub.radius);
      edge.element.setAttribute('x2', edge.topic.px - ux * edge.topic.radius);
      edge.element.setAttribute('y2', edge.topic.py - uy * edge.topic.radius);
    });
  }

  function measure() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    nodes.forEach(function (node) { node.radius = node.element.offsetWidth / 2; });
    draw();
  }

  function shouldAnimate() {
    return !userPaused && !reduceMotion.matches && visible && !document.hidden && !hovered && !focused;
  }

  function animate(time) {
    if (previousTime !== null) elapsed += Math.min(time - previousTime, 64);
    previousTime = time;
    draw();
    frame = window.requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    previousTime = null;
    var paused = userPaused || reduceMotion.matches;
    toggle.textContent = reduceMotion.matches ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.disabled = reduceMotion.matches;
    if (shouldAnimate()) frame = window.requestAnimationFrame(animate);
  }

  nodes.forEach(function (node) {
    node.element.addEventListener('pointerenter', function (event) {
      if (event.pointerType === 'touch') return;
      hovered = node;
      updateHighlight();
      syncAnimation();
    });
    node.element.addEventListener('pointerleave', function () {
      hovered = null;
      updateHighlight();
      syncAnimation();
    });
    node.element.addEventListener('focus', function () {
      // A stationary pointer must not override a new keyboard focus target.
      hovered = null;
      focused = node;
      updateHighlight();
      syncAnimation();
    });
    node.element.addEventListener('blur', function () {
      focused = null;
      updateHighlight();
      syncAnimation();
    });
    if (node.hub) {
      node.element.addEventListener('click', function () {
        selected = selected === node ? null : node;
        updateHighlight();
      });
    }
  });

  map.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      selected = null;
      hovered = null;
      if (focused) focused.element.blur();
      focused = null;
      updateHighlight();
      syncAnimation();
    }
  });
  canvas.addEventListener('click', function (event) {
    if (event.target === canvas || event.target === svg) {
      selected = null;
      updateHighlight();
    }
  });
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    userPaused = !userPaused;
    syncAnimation();
  });
  reduceMotion.addEventListener('change', function () { draw(); syncAnimation(); });
  document.addEventListener('visibilitychange', syncAnimation);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      syncAnimation();
    }).observe(map);
  }
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(canvas);
  else window.addEventListener('resize', measure);
  measure();
  updateHighlight();
  syncAnimation();
}());
