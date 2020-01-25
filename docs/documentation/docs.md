---
layout: page
title: Docs
permalink: /docs/
weight: 5
---

# About portfolYOU <small class="text-muted">{{ site.github.latest_release.tag_name }}</small>
{:.no_toc}

{%- assign partials_dir = "partials" -%}
{%- assign docs = site.static_files | where_exp: "file", "file.path contains partials_dir" -%}

{% for doc in docs %}
{% assign parent_dir = doc.path | split: partials_dir | first %}
{% assign relative_path = doc.path | remove: parent_dir %}
{% include_relative {{ relative_path }} %}
{% endfor %}

{% include elements/github-edit-footer.html %}
