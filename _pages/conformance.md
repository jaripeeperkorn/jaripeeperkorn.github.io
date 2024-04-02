---
layout: archive
permalink: /conformance/
title: "ML-driven conformance checking"
author_profile: true
---

Conformance checking refers to techniques that can compare normative process behavior, typically captured by process models, and observed process behavior, usually captured in an event log. Recently, machine and deep learning methods have been proposed to tackle multiple problems in process mining, mostly for predictive process monitoring purposes. In this work, we propose two different neural network-based conformance checking techniques, allowing for a fully data-driven approach. Concretely, two approaches for measuring fitness and precision are introduced, using techniques from representation learning and deep learning respectively. The first approach relies on computing the distances between process traces coming from both an event log and a process model by means of vector representations extracted from a shallow neural network trained in a self-supervised setting. The second approach uses a recurrent neural network trained on an event log and a log containing artificially created counterfactuals. The first setup of these methods is tested on a proof-of-concept artificial event log, a plethora of artificially generated process models, and 4 real-life data sets. Our approaches exhibit generally promising and interesting results and in this way provide fully data-driven alternatives to other conformance checking techniques, which are usually model-driven. Moreover, they allow for a possible combination of different purposes, when already using neural networks for process discovery or predictive process monitoring.

[Repository](https://github.com/jaripeeperkorn/ML_Conformance)

![](/images/emb_conf.PNG)
![](/images/RNN_conf.PNG)

Publications
=======
* Jari Peeperkorn, Seppe vanden Broucke, Jochen De Weerdt, Global conformance checking measures using shallow representation and deep learning, Engineering Applications of Artificial Intelligence (2023), https://doi.org/10.1016/j.engappai.2023.106393
* Jari Peeperkorn, Seppe vanden Broucke, Jochen De Weerdt, "Supervised Conformance Checking Using Recurrent Neural Network Classifiers", Process Mining Workshops (ML4PM), ICPM 2020, https://doi.org/10.1007/978-3-030-72693-5_14
* Jari Peeperkorn, Seppe vanden Broucke, Jochen De Weerdt, "Conformance Checking Using Activity and Trace Embeddings", Business Process Management Forum, BPM 2020, https://doi.org/10.1007/978-3-030-58638-6_7
