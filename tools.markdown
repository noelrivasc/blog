---
layout: page
title: Tools
permalink: /tools/
---

<p>Interventions I've found to improve the enjoymet and output of my work.</p>

<ul>
  {% for post in site.categories.tools %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
