---
layout: page
title: Docs
permalink: /docs/
weight: 4
---

# **About portfolYOU**

portfolYOU is a free modern open-source Jekyll portfolio and blogging theme that works with GitHub Pages. Created by [@YoussefRaafatNasry](https://github.com/YoussefRaafatNasry)

<div class="list-group">
  <a href="#installation" class="list-group-item list-group-item-action">Installation</a>
  <a href="#sections" class="list-group-item list-group-item-action">Sections</a>
  <a href="#customization" class="list-group-item list-group-item-action">Customization</a>
  <a href="#adding-content" class="list-group-item list-group-item-action">Adding Content</a>
  <a href="#dependencies" class="list-group-item list-group-item-action">Dependencies</a>
  <a href="#credits" class="list-group-item list-group-item-action">Credits</a>
</div>

## Installation

#### As a GitHub Pages remote theme

1. [Download][download] portfolYOU as .zip from official [repo][repo] then extract the files.
1. Add the following line to the **build settings** section of `_config.yml`:

   ```yaml
   remote_theme: YoussefRaafatNasry/portfolYOU
   ```

   or to use a specific [version][versions]:

   ```yaml
   remote_theme: YoussefRaafatNasry/portfolYOU@v1.0.0
   ```

1. Delete unnecessary files and folders: `README.md`, `LICENSE`, `docs/`
1. Delete theme directories, _as they will be included remotely_ : `_includes/`, `_layouts/`, `_sass/`, `assets/`
1. Delete `Gemfile` and `.gitignore` if you aren't going to set up the theme [locally].
1. Change the configuration options in `_config.yml` depending on your needs.
1. Set up portfolYOU [locally] or publish it to [GitHub Pages][gh-pages].

#### Using as Fork

1. [Fork][fork] the [repo][repo]
1. Clone or [Download][download] your fork.
1. Delete unwanted **sections**.
1. Modify and edit file contents upon your needs.
1. Set up portfolYOU [locally] or publish it to [GitHub Pages][gh-pages].

[repo]: {{ site.repo }}
[fork]: {{ site.repo }}/fork
[download]: {{ site.repo }}/archive/master.zip
[versions]: {{ site.repo }}/releases
[locally]: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
[gh-pages]: https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/

## Sections

portfolYOU's sections are **independent**, you can remove any section upon your needs. Here's a list of the files and folders needed by each section:

| Projects                      | Articles                | About                   |
| :---------                    | :---------              | :---------              |
| pages/projects.html           | pages/articles.html     | pages/about.md          |
| _includes/projects.html       | _includes/articles.html | _includes/skills.html   |
| _sass/projects.scss ¹         | _sass/_articles.scss ¹  | _includes/timeline.html |
| assets/js/card-animation.js ² | _layouts/post.html      | _sass/_skills.scss ¹    |
| _projects/ ³                  | _posts/ ⁴               | _sass/_timeline.scss ¹  |
|                               |                         | _data/                  |

<small class="text-muted">
  <b>If you are deleting any section, please consider the following:</b><br>
  ¹ remove reference from <code> _sass/portfolYOU.scss  </code><br>
  ² remove reference from <code> _includes/scripts.html </code><br>
  ³ remove collections and defaults from <code> _config.yml </code><br>
  ⁴ remove posts default permalink from  <code> _config.yml </code>
</small>

## Customization

When using portfolYOU as a theme means you can take advantage of the file overriding method. This allows you to overwrite any file in this theme with your own custom file, simply by matching the file name and path. The most common example of this would be if you want to add your own styles or change the favicon.  
To change the favicon for example just generate your own using [favicon](https://favicon.io/) or any other tool. Copy your new `favicon.ico` file into your own project with the same file path `assets/favicon.ico`.

## Adding Content

#### Adding new Projects

1. Add `project-name.md` or `project-name.html` to `_projects/`.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new project file.

   ```yaml
   ---
   name: Awesome Project
   tools: [Tool1, Tool2]
   direct_link: project url or leave empty to create individual page for the project when clicked.
   image: image url or path here.
   description: Write project description here.
   ---
   ```

1. If you left `direct_link` empty, then add project body in markdown or html. Check available [elements]({{ '/articles/elements' | relative_url }}) to enjoy extra customization.
1. Check more projects templates from [here]({{ site.repo }}/tree/master/_projects).

#### Adding new Article

1. Add `YYYY-MM-DD-article-name.md` to `_posts/`.
1. Add [front matter](https://jekyllrb.com/docs/front-matter/) to the top of your new article file.

   ```yaml
   ---
   title: Awesome Title
   tags: [TAG 1, TAG 2]
   style: fill / border (choose one only)
   color: primary / secondary / success / danger / warning / info / light / dark (choose one only)
   description: Write article description here, if you left this empty the article description will be the first 25 words of the article body.
   ---
   ```

1. If you left both the style and color empty, the article's style is set to default style.
1. Add article body in markdown or html. Check available [elements]({{ '/articles/elements' | relative_url }}) to enjoy extra customization.
1. Check more articles templates from [here]({{ site.repo }}/tree/master/_posts).

#### Adding new Page

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

1. The new page will be added to the navigation bar of your project.
1. Check more pages templates from [here]({{ site.repo }}/tree/master/pages).

#### Adding new Skill

- Add the following lines to `_data/programming-skills.yml` or `_data/other-skills.yml`.

  ```yaml
  - name: Awesome Skill
    percentage: 95
    color: secondary / success / danger / warning / info / light / dark (choose one only, primary is default color)
  ```

- To add a new Skills Category:
  1. Add `category_name-skills.yml` to `_data/`.
  1. Add skills to the file using the previously mentioned method.
  1. Open `pages/about.md`.
  1. Add the following lines to the skills section between `<div class="row">` and `</div>`:
  
     ```yaml
     {% raw %}{% include skills.html title="Category_Name Skills" source=site.data.category_name-skills %}{% endraw %}
     ```

#### Adding new Timeline Item

Add the following lines to `_data/timeline.yml`.

```yaml
- title: Awesome Item
  from: 2016
  to: 2018
  description: Write item description here.
```

## Dependencies

| Dependency                  | Version |
| :-------------------------- |:-------:|
| [Animate.css][animate]      | v3.7.0  |
| [Bootstrap][bootstrap]      | v4.3.1  |
| [FontAwesome][font-awesome] | v5.6.3  |
| [jQuery][jquery]            | v3.3.1  |
| [Popper.js][popper]         | v1.14.6 |
| [wow.js][wow]               | v1.1.2  |

[animate]: https://daneden.github.io/animate.css/
[bootstrap]: https://getbootstrap.com/
[font-awesome]: https://fontawesome.com/
[jquery]: https://jquery.com/
[popper]: https://popper.js.org/
[wow]: https://wowjs.uk/

## Credits

1. [CSS3 Animated Skill Progress bar][skills-progress-bar] _A pen by Shah Zobayer Ahmed._
1. [How to Create Bootstrap Card Hover Effect (jQuery)][cards-hover] _A video by Daily Tuition._
1. [Vertical Timeline (HTML-SCSS-CSS)][vertical-timeline] _A video by DevPen._

[skills-progress-bar]: https://codepen.io/speeedsam/pen/VeOGEq
[cards-hover]: https://www.youtube.com/watch?v=2qQxwT-Qm5E
[vertical-timeline]: https://www.youtube.com/watch?v=TP4THzsAa3M&t=2s

<footer>
  This documentation is <b>open source</b>. Noticed a typo? <br>
  Or something unclear? Improve it on 
  <a href="{{ site.repo }}/edit/master/{{ page.path }}">GitHub</a>.
</footer>