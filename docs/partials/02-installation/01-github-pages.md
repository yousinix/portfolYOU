#### As a GitHub Pages remote theme

1. [Download][download] portfolYOU as .zip from official [repo][repo] then extract the files.
1. Delete unnecessary files and folders: `README.md`, `CONTRIBUTING.md`, `LICENSE`, `docs/`
1. Delete theme directories, _as they will be included remotely_ : `_includes/`, `_layouts/`, `_sass/`, `assets/`
1. Delete `Gemfile` and `.gitignore` if you aren't going to set up the theme [locally].
1. Your directory structure should be looking something like this:

   ```tree
   your_site_name/
   ├── _data/
   │   ├── other-skills.yml
   │   ├── programming-skills.yml
   │   ├── social-media.yml
   │   └── timeline.yml
   ├── _posts/
   │   ├── YYYY-MM-DD-post-1.md
   │   ├── ....
   │   └── YYYY-MM-DD-post-n.md
   ├── _projects/
   │   ├── project-1.md
   │   ├── ....
   │   └── project-n.md
   ├── blog/
   │   ├── index.html
   │   └── tags.html
   ├── pages/
   │   ├── about.md
   │   └── projects.html
   ├── _config.yml
   ├── 404.html
   ├── index.html
   └── search.json
   ```

1. Uncomment the following line in `_config.yml`:

    ```yaml
    remote_theme: YoussefRaafatNasry/portfolYOU
    ```

    to use a specific [version][versions] of portfolYOU:

    ```yaml
    remote_theme: YoussefRaafatNasry/portfolYOU@v1.0.0
    ```

1. Replace `baseurl: "/portfolYOU"` with `baseurl: ""` if your are hosting the site at `username.github.io` directly.
1. Change other configuration options in `_config.yml` depending on your needs.
1. Set up portfolYOU [locally] or publish it to [GitHub Pages][gh-pages].
