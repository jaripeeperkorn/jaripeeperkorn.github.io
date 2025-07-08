---
layout: archive
permalink: /fairness/
title: "Fairness in Predictive Process Monitoring"
author_profile: true
---

Achieving Group Fairness through Independence in Predictive Process Monitoring
=======

Predictive process monitoring focuses on forecasting future states of ongoing process executions, such as predicting the outcome of a particular case. In recent years, the application of machine learning models in this domain has garnered significant scientific attention. When using historical execution data, which may contain biases or exhibit unfair behavior, these biases may be encoded into the trained models. Consequently, when such models are deployed to make decisions or guide interventions for new cases, they risk perpetuating this unwanted behavior. This work addresses group fairness in predictive process monitoring by investigating independence, i.e. ensuring predictions are unaffected by sensitive group membership. We explore independence through metrics for demographic parity such as Delta DP, as well as recently introduced, threshold-independent distribution-based alternatives. Additionally, we propose a composite loss function existing of binary cross-entropy and a distribution-based loss (Wasserstein) to train models that balance predictive performance and fairness, and allow for customizable trade-offs. The effectiveness of both the fairness metrics and the composite loss functions is validated through a controlled experimental setup.


[Repository](https://github.com/jaripeeperkorn/Group-Fairness-in-Predictive-Process-Monitoring){: .btn}

![](/images/distrfairness.png)

![](/images/tradeofffairness.png)

Publication
=======
* Jari Peeperkorn, Simon De Vos, Achieving Group Fairness through Independence in Predictive Process Monitoring, Advanced Information Systems Engineering, Lecture Notes in Computer Science, vol 15701, CAiSE 2025