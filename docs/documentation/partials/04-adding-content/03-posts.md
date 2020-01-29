#### Posts

1. Add `YYYY-MM-DD-post-name.md` to `_posts/`.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new post file.

    ```yaml
    ---
    title: Awesome Title
    tags: [TAG 1, TAG 2]
    style: fill / border (choose one only)
    color: primary / secondary / success / danger / warning / info / light / dark (choose one only)
    description: Write post description here, or it will be the first 25 words of the post's body.
    ---
    ```

1. If you left both the style and color empty, the post's style is set to default style.
1. Add post body in markdown or html. Check available [elements]({{ '/elements' | relative_url }}) to enjoy extra customization.
1. Check more posts templates from [here]({{ site.github.repository_url }}/tree/master/docs/_posts).
