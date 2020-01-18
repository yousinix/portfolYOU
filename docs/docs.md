---
layout: page
title: Docs
permalink: /docs/
weight: 5
---

# About portfolYOU <small class="text-muted">{{ site.github.latest_release.tag_name }}</small>
{:.no_toc}

{%- assign partials = site.static_files | where_exp:"file", "file.path contains 'docs/partials/'" -%}

{% for partial in partials %}
{% include_relative {{ partial.path | remove: '/docs/' }} %}
{% endfor %}

{% include elements/github-edit-footer.html %}
