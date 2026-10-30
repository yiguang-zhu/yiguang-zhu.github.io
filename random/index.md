---
layout: default
nav: random
title: Random
permalink: /random/
description: 朱益广的随笔：好奇心、训诂、调酒，以及研究之外有意思的事。
filters: true
---
<div class="zc-page-heading">
  <h1>Random</h1>
</div>
<div data-filter-list="random">
<div class="zc-filter-bar" role="group" aria-label="Random 分类" data-filter-controls hidden>
  <button type="button" data-filter-key="category" data-filter-value="all" aria-pressed="true">{% include translate.html key='All' %}</button>
  {% assign categories = site.random | map: 'category' | uniq | sort %}
  {% for category in categories %}<button type="button" data-filter-key="category" data-filter-value="{{ category | escape }}" aria-pressed="false">{% include translate.html key=category %}</button>{% endfor %}
</div>
<span class="zc-sr-only" role="status" data-filter-status></span>
<div class="zc-random-list">
  {% assign entries = site.random | sort: 'date' | reverse %}
  {% for entry in entries %}
  <a class="zc-random-item" href="{{ entry.url | relative_url }}" data-filter-item data-category="{{ entry.category | escape }}">
    <time class="zc-year" datetime="{{ entry.date | date: '%Y-%m-%d' }}">{{ entry.date | date: '%Y.%m.%d' }}</time>
    <span><span class="zc-note-title"><span lang="zh-CN">{{ entry.title | escape }}</span>{% if entry.subtitle %}<span class="zc-name-divider" aria-hidden="true"> | </span><span lang="en">{{ entry.subtitle | escape }}</span>{% endif %}</span><span class="zc-meta">{% include translate.html key=entry.category %}</span></span>
    <span class="zc-row-arrow" aria-hidden="true">→</span>
  </a>
  {% endfor %}
</div>
</div>
