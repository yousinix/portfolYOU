---
layout: about
title: "About Me"
permalink: /about/

# visit https://getbootstrap.com/docs/4.1/utilities/colors/#background-color
# to know available colors (white and transparent aren't included)
# default color is blue (primary)

programming-skills:

    - name: HTML5
      percentage: 90
      color: danger

    - name: CSS3
      percentage: 80
      color:

    - name: Sass
      percentage: 70
      color: dark


other-skills:

    - name: Adobe Photoshop
      percentage: 95
      color: info
  
    - name: Adobe Illustrator
      percentage: 90
      color: success


timeline:

    - title: Title for section 1
      from: 2016
      to: 2018
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    - title: Title for section 2
      from: 2018
      to: present
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
---

Hi I am **{{ site.author.name }}**,<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


<div class="row">
{% include skills-programming.html %}
{% include skills-others.html %}
</div>

<div class="row">
{% include timeline.html %}
</div>