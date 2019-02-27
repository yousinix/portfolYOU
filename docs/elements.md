---
layout: page
title: Elements
permalink: /elements/
weight: 4
---

# **Elements**

A demo of Markdown and HTML includes.

{%- capture list_items -%}
Headers
Emphasis
Highlight
Lists
List Group
Links
Images
Figures
Carousel
Videos
Buttons
Gists
Code
Syntax Highlighting
Tables
Blockquotes
Inline HTML
Horizontal Rule
Line Breaks
{%- endcapture -%}
{% include list.html title="Table of Contents" type="toc" %}

## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1
## H2
### H3
#### H4
##### H5
###### H6


## Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


## Highlight

```
{% raw %}{% include highlight.html text="I am highlighted text." %}{% endraw %}
```
{% include highlight.html text="I am highlighted text." %}


## Lists

```
1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## List Group

```
{% raw %}- Basic List Group:

{%- capture list_items -%}
Google,https://www.google.com
GitHub,https://www.google.com
{%- endcapture -%}

{% include list.html %}


- List Group with a Title:

{%- capture list_items -%}
Google,https://www.google.com
GitHub,https://www.google.com
{%- endcapture -%}

{% include list.html title="Websites" %}


- List Group as Table of Contents (automatic linking to page headers):

{%- capture list_items -%}
Headers
Emphasis
List
{%- endcapture -%}

{% include list.html title="Table of Contents" type="toc" %}{% endraw %}
```

- Basic List Group:
{%- capture list_items -%}
Google,https://www.google.com
GitHub,https://www.google.com
{%- endcapture -%}

{% include list.html %}

- List Group with a Title:
{%- capture list_items -%}
Google,https://www.google.com
GitHub,https://www.google.com
{%- endcapture -%}

{% include list.html title="Websites" %}

- List Group as Table of Contents (automatic linking to page headers):
{%- capture list_items -%}
Headers
Emphasis
Lists
{%- endcapture -%}

{% include list.html title="Table of Contents" type="toc" %}


## Links

There are two ways to create links.

```
[I'm an inline-style link](https://www.google.com)
```

[I'm an inline-style link](https://www.google.com)


## Images

```
Here's our Image (hover to see the title text):

![alt text](https://bit.ly/2TOsM7B "Building Image")
```

Here's our Image (hover to see the title text):

![alt text](https://bit.ly/2TOsM7B "Building Image")


## Figures

```
{% raw %}{% include figure.html image="https://bit.ly/2N69TKO" caption="The sea complains upon a thousand shores." %}{% endraw %}
```

{% include figure.html image="https://bit.ly/2N69TKO" caption="The sea complains upon a thousand shores." %}


## Carousel

```
{% raw %}{%- capture carousel_images -%}
https://bit.ly/2BBbVhc
https://bit.ly/2DOtxXB
{%- endcapture -%}

{% include carousel.html %}{% endraw %}
```

{%- capture carousel_images -%}
https://bit.ly/2BBbVhc
https://bit.ly/2DOtxXB
{%- endcapture -%}

{% include carousel.html %}


## Videos

```
{% raw %}{% include video.html id="aZNbUITN-mA" %}{% endraw %}
```

{% include video.html id="aZNbUITN-mA" %}

##### How to get a YouTube video ID from a youtube.com page URL?

You may be watching the video or just happened to visit a link to a video. The video ID will be located in the URL of the video page, right after the `v=` URL parameter. <br>
In this case, the URL of the video is: `https://www.youtube.com/watch?v=aZNbUITN-mA`.<br>
Therefore, **the ID of the video is** `aZNbUITN-mA`.


## Buttons

```
{% raw %}Styles:
{% include button.html link="https://github.com/" text="GitHub" %}
{% include button.html link="https://github.com/" text="GitHub" style="primary" %}
{% include button.html link="https://github.com/" text="GitHub" style="outline-dark" %}

Sizes:
{% include button.html link="https://github.com/" text="GitHub" size="sm" %}
{% include button.html link="https://github.com/" text="GitHub" %}
{% include button.html link="https://github.com/" text="GitHub" size="lg" %}

Block:
{% include button.html link="https://github.com/" text="GitHub" block="true" %}{% endraw %}
```

##### Styles:
{% include button.html link="https://github.com/" text="GitHub" %}
{% include button.html link="https://github.com/" text="GitHub" style="primary" %}
{% include button.html link="https://github.com/" text="GitHub" style="outline-dark" %}

##### Sizes:
{% include button.html link="https://github.com/" text="GitHub" size="sm" %}
{% include button.html link="https://github.com/" text="GitHub" %}
{% include button.html link="https://github.com/" text="GitHub" size="lg" %}

##### Block:
{% include button.html link="https://github.com/" text="GitHub" block="true" %}

##### How to center buttons?
Just surrond your buttons with `<p class="text-center">` and `</p>`.

<p class="text-center">
  {% include button.html link="https://github.com/" text="GitHub" %}
  {% include button.html link="https://google.com/" text="Google" %}
  {% include button.html link="https://microsoft.com/" text="Microsoft" %}
</p>

##### Know more about buttons
portfolYOU uses [Bootstrap Buttons](https://getbootstrap.com/docs/4.1/components/buttons/).


## Gists

All you need to do is copy and paste the Gist's ID from the URL, and the filename if you need to include just a single file.

```
- Include all gist files:
{% raw %}{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 %}{% endraw %}

- Include a single gist file:
{% raw %}{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 hello.py %}{% endraw %}

- Include a single gist file with spaces in the filename:
  Just replace the space in the filename with %20
{% raw %}{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 Hello%20World.java %}{% endraw %}
```

- Include all gist files:

{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 %}

- Include a single gist file:

{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 hello.py %}

- Include a single gist file with spaces in the filename:
  Just replace the space in the filename with `%20`

{% gist 3c466bc3c32c4ae5c9b36d1266b913d8 Hello%20World.java %}


## Code

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are fenced by lines with three back-ticks <code class="highlighter-rouge">```</code>.

```
s = "Code Block Test";
print s;
```


## Syntax Highlighting

<pre>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting.
```
</pre>

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. 
```


## Tables

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


## Blockquotes

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 


## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. 

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores


## Line Breaks

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<footer>
  This page is <b>open source</b>. Noticed a typo? <br>
  Or something unclear? Improve it on {% github_edit_link "GitHub" %}.
</footer>