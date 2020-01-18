## Sections

portfolYOU's sections are **independent**, you can remove any section upon your needs. Here's a list of the files and folders needed by each section:

| Projects                      | Blog                    | About                   |
| :---------                    | :---------              | :---------              |
| pages/projects.html           | blog/                   | pages/about.md          |
| _includes/projects/           | _includes/blog/         | _includes/about/        |
| _sass/projects.scss ¹         | _sass/_blog.scss ¹      | _sass/_skills.scss ¹    |
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
