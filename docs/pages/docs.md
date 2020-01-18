---
layout: page
title: Docs
permalink: /docs/
weight: 5
---

# About portfolYOU <small class="text-muted">{{ site.github.latest_release.tag_name }}</small>
{:.no_toc}

{%- assign docs = site.static_files | where_exp:"file", "file.path contains '/documentation/'" -%}
{% for doc in docs %}
{% include_relative {{ doc.path | remove: '/pages/' }} %}
{% endfor %}

{% include elements/github-edit-footer.html %}
