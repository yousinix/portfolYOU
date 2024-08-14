## Installation

The following steps demonstrate how to use portfolYOU as **GitHub Pages remote theme**.

1. [Download][download] portfolYOU as .zip from official [repo][repo] then extract it.
1. Rename **`portfolYOU-master/`** to **`<your-username>.github.io/`**
1. Remove everything **except** the **`docs/`** directory.
1. Lift up the **`docs/`** directory's content to the root directory _(i.e move them to **`<your-username>.github.io/`**)_.
1. Remove **documentation** stuff:
    - **`_elements/`**
    - **`documentation/`**
    - **`_config.yml`** : any line commented as `# For Documentation Only`

1. Your directory structure should be:

    ```tree
    <your-username>.github.io/
    ├── _data/
    ├── _posts/
    ├── _projects/
    ├── pages/
    ├── _config.yml
    ├── .gitignore
    └── Gemfile
    ```

1. Update **`_config.yml`** with your data _(follow the comments for more help)_.
1. Update your site content (posts, projects and about page).
1. Finally, test portfolYOU [locally][locally] then [publish][publish] it to [GitHub Pages][gh-pages].
1. _[Optional]_ To use a specific [version][versions] of portfolYOU _(defaults to latest version)_:

    ```yml
    remote_theme: yousinix/portfolYOU@v1.0.0
    ```

[repo]: {{ site.github.repository_url }}
[download]: {{ site.github.zip_url }}
[versions]: {{ site.github.releases_url }}
[locally]: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
[publish]: https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/
[gh-pages]: https://pages.github.com/
