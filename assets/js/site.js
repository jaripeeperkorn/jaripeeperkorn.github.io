/* Keep the profile compact on small screens; all links also work without JS. */
(function () {
  'use strict';
  var details = document.querySelector('.profile-links');
  if (!details || !window.matchMedia) return;
  var mobile = window.matchMedia('(max-width: 859px)');
  function updateProfile() { details.open = !mobile.matches; }
  updateProfile();
  if (mobile.addEventListener) mobile.addEventListener('change', updateProfile);
})();
