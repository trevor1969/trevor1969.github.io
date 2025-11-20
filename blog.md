---
layout: page
title: Blog-Übersicht
permalink: /blog/  # Wichtig: Legt die URL fest
---
# Blog-Übersicht

Hier sind alle meine Blogbeiträge:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%d.%m.%Y" }}</span>
    </li>
  {% endfor %}
</ul>

