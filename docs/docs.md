---
layout: page
title: Docs
permalink: /docs/
weight: 5
---

# About portfolYOU <small class="text-muted">{{ site.github.latest_release.tag_name }}</small>
{:.no_toc}

<p>
  <a class="github-button" href="{{ site.github.repository_url }}" data-icon="octicon-star" data-show-count="true" aria-label="Star YoussefRaafatNasry/portfolYOU on GitHub">Star</a>
  <a class="github-button" href="{{ site.github.repository_url }}/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork YoussefRaafatNasry/portfolYOU on GitHub">Fork</a>
  <a class="github-button" href="{{ site.github.zip_url }}" data-icon="octicon-cloud-download" aria-label="Download YoussefRaafatNasry/portfolYOU on GitHub">Download</a><br>
</p>

portfolYOU is a free modern open-source Jekyll portfolio and blogging theme that works with GitHub Pages. 

- Automated Table of Contents
{:toc}

## Features

- Works 100% with **GitHub Pages** as a remote theme.
- Minimal design and animations.
- **Responsive** design using [Bootstrap][bootstrap].
- Support [Repository metadata][repo-meta], [FontAwesome][font-awesome], [GitHub Buttons][gh-btns] and many [more](#dependencies).
- Support **all image orientations** _(landscape, portrait or square)_ as a landing image.
- **Automatic** importing for **GitHub Repositories** as Projects.
- **Search** articles by title, tags or descriptions.
- **Tags archive** for articles.
- Skills progress bars and education/experience timeline.
- Support large number of **social networks**.
- Quick including for various [elements][elements] as videos, lists, figures, buttons and many more.
- Attractive [404 page](../404.html).
- Well Documented.

[repo-meta]: https://help.github.com/en/articles/repository-metadata-on-github-pages
[elements]: {{ site.github.repository_url }}/tree/master/_includes/elements

## Installation

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
   │   ├── YYYY-MM-DD-article-1.md
   │   ├── ....
   │   └── YYYY-MM-DD-article-n.md
   ├── _projects/
   │   ├── project-1.md
   │   ├── ....
   │   └── project-n.md
   ├── articles/
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

#### As a Fork

1. [Fork][fork] the [repo][repo].
1. Clone your fork.
1. Delete unwanted **sections**.
1. Modify and edit files' contents upon your needs.
1. Change configuration options in `_config.yml` depending on your needs.
1. Commit and push changes to your fork.
1. Set up portfolYOU [locally] or publish it to [GitHub Pages][gh-pages].

[repo]: {{ site.github.repository_url }}
[fork]: {{ site.github.repository_url }}/fork
[download]: {{ site.github.zip_url }}
[versions]: {{ site.github.releases_url }}
[locally]: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
[gh-pages]: https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/

## Sections

portfolYOU's sections are **independent**, you can remove any section upon your needs. Here's a list of the files and folders needed by each section:

| Projects                      | Articles                | About                   |
| :---------                    | :---------              | :---------              |
| pages/projects.html           | articles/               | pages/about.md          |
| _includes/projects/           | _includes/articles/     | _includes/about/        |
| _sass/projects.scss ¹         | _sass/_articles.scss ¹  | _sass/_skills.scss ¹    |
| assets/js/card-animation.js ² | _layouts/post.html      | _sass/_timeline.scss ¹  |
| _projects/ ³                  | _posts/ ⁴               | _data/ ⁵                |

<small class="text-muted">
  <b>If you are deleting any section, please consider the following:</b><br>
  ¹ remove reference from <code> _sass/portfolYOU.scss  </code><br>
  ² remove reference from <code> _includes/scripts.html </code><br>
  ³ remove collections and defaults from <code> _config.yml </code><br>
  ⁴ remove permalink and pagination from  <code> _config.yml </code><br>
  ⁵ except <code> _data/social-media.yml </code>
</small>

## Customization

When using portfolYOU as a theme means you can take advantage of the file overriding method. This allows you to overwrite any file in this theme with your own custom file, simply by matching the file name and path. The most common example of this would be if you want to add your own styles or change the favicon.  
To change the favicon for example just generate your own using [favicon](https://favicon.io/) or any other tool. Copy your new `favicon.ico` file into your own project with the same file path `assets/favicon.ico`.

## Adding Content

#### Local Projects

1. Add `project-name.md` or `project-name.html` to `_projects/`.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new project file.

    ```yaml
    ---
    name: Awesome Project
    tools: [Tool1, Tool2]
    image: image url or path here.
    description: Write project description here.
    ---
    ```

1. Add project body in markdown or html. Check available [elements]({{ '/elements' | relative_url }}) to enjoy extra customization.
1. Check more projects templates from [here]({{ site.github.repository_url }}/tree/master/_projects).

#### Remote Projects

Remote Projects are imported automatically from GitHub. The name, description and topics are fetched from the given repository name. Note that the repository must be public and on your own account. To add a Remote Project, add the following lines to your existing front matter in `pages/projects.html`:

```yaml
---
remote_projects:
  - repo-name-1
  - repo-name-2
---
```

#### Articles

1. Add `YYYY-MM-DD-article-name.md` to `_posts/`.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new article file.

    ```yaml
    ---
    title: Awesome Title
    tags: [TAG 1, TAG 2]
    style: fill / border (choose one only)
    color: primary / secondary / success / danger / warning / info / light / dark (choose one only)
    description: Write article description here, or it will be the first 25 words of the article's body.
    ---
    ```

1. If you left both the style and color empty, the article's style is set to default style.
1. Add article body in markdown or html. Check available [elements]({{ '/elements' | relative_url }}) to enjoy extra customization.
1. Check more articles templates from [here]({{ site.github.repository_url }}/tree/master/_posts).

#### Pages

1. Add `page-name.html` or `page-name.md` to `pages/`, `new subfolder` or to `root directory` of your project.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new page.

    ```yaml
    ---
    layout: default
    title: Page Name
    permalink: /page_permalink/ (the output path for the page)
    weight: 2 (the order of the page in the navigation bar)
    ---
    ```

1. The new page will be added to the navigation bar automatically.
1. Check more pages templates from [here]({{ site.github.repository_url }}/tree/master/pages).

#### External Content

If you want your project, article or even the page to refer to an external resource, _**google.com** for example_, just add the following attribute to your front matter:

```yaml
---
external_url: https://google.com/
---
```

#### Skill

Add the following lines to `_data/programming-skills.yml` or `_data/other-skills.yml`.

```yaml
- name: Awesome Skill
  percentage: 95
  color: secondary / success / danger / warning / info / light / dark (choose one only, default is primary)
```

#### Skills Category

1. Add `category_name-skills.yml` to `_data/`.
1. Add skills to the file using the previously mentioned method.
1. Open `pages/about.md`.
1. Add the following lines to the skills section between `<div class="row">` and `</div>`:

    ```liquid
    {% raw %}{% include about/skills.html title="Category_Name Skills" source=site.data.category_name-skills %}{% endraw %}
    ```

#### Timeline Item

Add the following lines to `_data/timeline.yml`:

```yaml
- title: Awesome Item
  from: 2016
  to: 2018
  description: Write item description here.
```

#### Social Network

portfolYOU provides a good number of social networks, but if you want to add your own, go on.

1. Add the following lines to `_data/social-media.yml`:

    ```yaml
    network_name:
      url   : https://www.network_name.com/
      icon  : fab fa-icon      # From FontAwesome (https://fontawesome.com/icons)
      color : 1da1f2           # Hex color code for hover
    ```

1. Then add the following to `_config` under the `author` key:

    ```yaml
    author:
      network_name : your_username_here
    ```

1. The new network will be added to your footer automatically.

## Dependencies

| Dependency                                           | Version |
| :--------------------------------------------------- | :-----: |
| [Animate.css][animate]                               | v3.7.0  |
| [Bootstrap][bootstrap]                               | v4.3.1  |
| [FontAwesome][font-awesome]                          | v5.6.3  |
| [GitHub Buttons][gh-btns]                            | v2.2.9  |
| [jQuery][jquery]                                     | v3.3.1  |
| [Popper.js][popper]                                  | v1.14.6 |
| [pygments-css][pygments-css]                         | autumn  |
| [Simple Jekyll Search][simple-search]                | v1.7.2  |
| [wow.js][wow]                                        | v1.1.2  |

[animate]: https://daneden.github.io/animate.css/
[bootstrap]: https://getbootstrap.com/
[font-awesome]: https://fontawesome.com/
[gh-btns]: https://buttons.github.io
[jquery]: https://jquery.com/
[popper]: https://popper.js.org/
[pygments-css]: https://github.com/richleland/pygments-css
[simple-search]: https://github.com/christian-fei/Simple-Jekyll-Search
[wow]: https://wowjs.uk/

## Credits

1. [404 svg animated page][404-page] _A pen by Vladimir Gashenko._
1. [CSS3 Animated Skill Progress bar][skills-progress-bar] _A pen by Shah Zobayer Ahmed._
1. [How to Create Bootstrap Card Hover Effect (jQuery)][cards-hover] _A video by Daily Tuition._
1. [Vertical Timeline (HTML-SCSS-CSS)][vertical-timeline] _A video by DevPen._

[404-page]: https://codepen.io/gxash/pen/rrJYwm
[skills-progress-bar]: https://codepen.io/speeedsam/pen/VeOGEq
[cards-hover]: https://www.youtube.com/watch?v=2qQxwT-Qm5E
[vertical-timeline]: https://www.youtube.com/watch?v=TP4THzsAa3M&t=2s

<footer>
  This documentation is <b>open source</b>. Noticed a typo? <br>
  Or something unclear? Improve it on {% github_edit_link "GitHub" %}.
</footer>