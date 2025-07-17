---
layout: archive
permalink: /stackt/
title: "Dynamic and Scalable Data Preparation for Object-Centric Process Mining"
author_profile: true
---

Object-centric process mining is emerging as a promising paradigm across diverse industries, drawing substantial academic attention. To support its data requirements, existing object-centric data formats primarily facilitate the exchange of static event logs between data owners, researchers, and analysts, rather than serving as a robust foundational data model for continuous data ingestion and transformation pipelines for subsequent storage and analysis. This focus results into suboptimal design choices in terms of flexibility, scalability, and maintainability. For example, it is difficult for current object-centric event log formats to deal with novel object types or new attributes in case of streaming data. This paper proposes a database format designed for an intermediate data storage hub, which segregates process mining applications from their data sources using a hub-and-spoke architecture. It delineates essential requirements for robust object-centric event log storage from a data engineering perspective and introduces a novel relational schema tailored to these requirements. To validate the efficacy of the proposed database format, an end-to-end solution called Stack't, is implemented using a lightweight, open-source data stack. Our implementation includes data extractors for various object-centric event log formats, automated data quality assessments, and intuitive process data visualization capabilities.

[Repository](https://github.com/LienBosmans/stack-t){: .btn}

Changes to the OCEL 2.0 metamodel:
![](/images/metamodel_highlight_changes.png)
Our proposed relational schema:
![](/images/relational_schema_for_paper.png)

## Preprint

* Lien Bosmans, Jari Peeperkorn, Alexandre Goossens, Giovanni Lugaresi, Johannes De Smedt, Jochen De Weerdt, Dynamic and Scalable Data Preparation for Object-Centric Process Mining, [https://arxiv.org/abs/2410.00596](https://arxiv.org/abs/2410.00596)

## Also included in:

* Dirk Fahland, Marco Montali, Julian Lebherz, Wil M.P. van der Aalst, Maarten van Asseldonk, Peter Blank, Lien Bosmans, Marcus Brenscheidt, Claudio di Ciccio, Andrea Delgado, Daniel Calegari, Jari Peeperkorn, Eric Verbeek, Lotte Vugs, Moe Thandar Wynn, Towards a Simple and Extensible Standard for Object-Centric Event Data (OCED) -- Core Model, Design Space, and Lessons Learned, [https://arxiv.org/abs/2410.14495](https://arxiv.org/abs/2410.14495)