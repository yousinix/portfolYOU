#### Pages

1. Add `page-name.html` or `page-name.md` to `pages/`, `new subfolder` or to `root directory` of your project.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new page.

    ```yaml
    ---
    layout: default
    title: Page Name
    permalink: /page_permalink/ (the output path for the page)
    weight: 2 (the order of the page in the navigation bar)
    open_new_tab: true (link will open in new tab instead of replacing the current tab)
    ---
    ```

1. The new page will be added to the navigation bar automatically.
1. Check more pages templates from [here]({{ site.github.repository_url }}/tree/master/docs/pages).
