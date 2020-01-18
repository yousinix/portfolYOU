#### Skills Categories

1. Add `category_name-skills.yml` to `_data/`.
1. Add skills to the file using the previously mentioned method.
1. Open `pages/about.md`.
1. Add the following lines to the skills section between `<div class="row">` and `</div>`:

```liquid
{% raw %}{% include about/skills.html title="Category_Name Skills" source=site.data.category_name-skills %}{% endraw %}
```
