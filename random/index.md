---
layout: default
title: Random
permalink: /random/
avatar: /assets/img/avatar_random.jpg
---

{% assign items = site.random | sort: "date" | reverse %}
{% assign categories = items | map: "category" | uniq | sort %}

{% for cat in categories %}
## {{ cat }}

<ul>
  {% for item in items %}
    {% if item.category == cat %}
      <li>
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a><br>
        <small>{{ item.author | default: "Yiguang Zhu" }} · {{ item.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}
