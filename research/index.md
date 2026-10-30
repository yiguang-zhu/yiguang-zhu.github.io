---
layout: default
nav: research
title: Research
permalink: /research/
description: Publications, perspectives, and presentations by Yiguang Zhu on new approach methodologies, radon, environmental health, and science policy.
---
<div class="zc-page-heading">
  <p class="zc-eyebrow">ENVIRONMENTAL HEALTH &amp; SCIENCE POLICY</p>
  <h1>Research</h1>
  <p>New approach methodologies, radon, and the policies that connect scientific evidence with public health.</p>
</div>
<nav class="zc-jump-links" aria-label="Research sections"><a href="#publications">Publications</a><a href="#perspectives">Perspectives</a><a href="#talks">Talks &amp; posters</a></nav>
{% assign groups = 'Publications,Perspectives,Talks & posters' | split: ',' %}
{% assign ids = 'publications,perspectives,talks' | split: ',' %}
{% for group in groups %}
<section class="zc-section" aria-labelledby="{{ ids[forloop.index0] }}">
  <div class="zc-section-heading"><h2 id="{{ ids[forloop.index0] }}">{{ group }}</h2></div>
  {% assign works = site.data.research | where: 'type', group | sort: 'year' | reverse %}
  {% for work in works %}
  <article class="zc-publication">
    <span class="zc-year">{{ work.year }} · {{ work.topic }}</span>
    <h3>{% if work.url %}<a href="{{ work.url }}" target="_blank" rel="noopener noreferrer">{{ work.title | escape }}</a>{% else %}{{ work.title | escape }}{% endif %}</h3>
    <p>{{ work.authors | escape }}</p>
    <p class="zc-meta">{{ work.venue | escape }}</p>
  </article>
  {% endfor %}
</section>
{% endfor %}
