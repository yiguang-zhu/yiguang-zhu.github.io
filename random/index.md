---
layout: default
nav: random
title: Random
permalink: /random/
description: 朱益广的随笔：好奇心、训诂、调酒，以及研究之外有意思的事。
---
<div class="zc-page-heading">
  <p class="zc-eyebrow" lang="zh-CN">好奇心 · 训诂 · 调酒</p>
  <h1>Random</h1>
  <p lang="zh-CN">研究之外，随手记下一些有意思的事。</p>
</div>
<div class="zc-random-list">
  {% assign entries = site.random | sort: 'date' | reverse %}
  {% for entry in entries %}
  <a class="zc-random-item" href="{{ entry.url | relative_url }}">
    <time class="zc-year" datetime="{{ entry.date | date: '%Y-%m-%d' }}">{{ entry.date | date: '%Y.%m.%d' }}</time>
    <span><span class="zc-note-title" lang="zh-CN">{{ entry.title | escape }}</span><span class="zc-meta"><span lang="zh-CN">{{ entry.category }}</span>{% if entry.subtitle %} · {{ entry.subtitle }}{% endif %}</span></span>
    <span class="zc-row-arrow" aria-hidden="true">→</span>
  </a>
  {% endfor %}
</div>
