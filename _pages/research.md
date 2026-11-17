---
layout: archive
permalink: /research/
title: "Research"
author_profile: true
research_map: true
---

My research brings together process mining and machine learning to understand how processes work and make their predictions more reliable.

## The bigger picture

**Process mining** uses digital records of activities, called event logs, to understand how work happens. It can reveal the steps in a process, identify bottlenecks, and check whether practice matches the intended way of working.

**Machine learning** learns patterns from examples to make predictions about new data. In my research, those examples are often past process executions, such as completed orders or applications.

**Predictive process monitoring (PPM)** uses what has happened in an ongoing case to predict what comes next: its next activity, remaining duration, or eventual outcome. These predictions can help people decide when and how to intervene.

{% include research-map.html %}

<details class="research-topic-list">
<summary>Browse all research topics as a list</summary>
{% for category in site.data.research_map.categories %}
<h3>{{ category.title | escape }}</h3>
<ul>
{% for topic_id in category.topics %}
{% assign topic = site.data.research_map.topics | where: "id", topic_id | first %}
<li><strong><a href="{{ topic.url | relative_url }}">{{ topic.title | escape }}</a></strong> &mdash; {{ topic.description | escape }}</li>
{% endfor %}
</ul>
{% endfor %}
</details>

Full citations and publication statuses are available on the [publications page](/publications/).
