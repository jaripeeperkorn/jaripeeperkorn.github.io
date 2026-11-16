---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
description: "Find research topics, publications, teaching, talks, and Jari Peeperkorn's CV."
---

## Main pages

* [Home]({{ '/' | relative_url }})
* [Research]({{ '/research/' | relative_url }})
* [Publications]({{ '/publications/' | relative_url }})
* [Teaching]({{ '/teaching/' | relative_url }})
* [Talks and presentations]({{ '/talks/' | relative_url }})
* [Talk map]({{ '/talkmap.html' | relative_url }})
* [CV]({{ '/cv/' | relative_url }}) &middot; [Full CV (PDF)]({{ '/files/CV.pdf' | relative_url }})

## Research topics

* [ML-driven Conformance Checking]({{ '/conformance/' | relative_url }})
* [Neurosymbolic]({{ '/neurosymbolic/' | relative_url }})
* [Trace Clustering]({{ '/clustering/' | relative_url }})
* [Process Model Forecasting]({{ '/process-model-forecasting/' | relative_url }})
* [Object-centric data preparation]({{ '/stackt/' | relative_url }})
* [Data Quality]({{ '/data-quality/' | relative_url }})
* [Generalization and Process Understanding]({{ '/generalization/' | relative_url }})
* [LLM adaptation in PPM]({{ '/llm-ppm/' | relative_url }})
* [XAI & Robustness in PPM]({{ '/xai-robustness/' | relative_url }})
* [Fairness in PPM]({{ '/fairness/' | relative_url }})
* [Learning from incomplete labels in PPM]({{ '/PU/' | relative_url }})
* [Remaining time with stochastic models]({{ '/remaining-time/' | relative_url }})
* [Space-Weather Forecasting]({{ '/space-weather/' | relative_url }})

## Teaching

{% for course in site.teaching %}
* [{{ course.title }}]({{ course.url | relative_url }})
{% endfor %}

## Talks and presentations

{% assign ordered_talks = site.talks | sort: 'date' | reverse %}
{% for talk in ordered_talks %}
* [{{ talk.title }}]({{ talk.url | relative_url }}) &middot; {{ talk.date | date: "%Y" }}
{% endfor %}
