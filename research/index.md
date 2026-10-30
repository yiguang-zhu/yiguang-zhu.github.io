---
layout: default
nav: research
title: Research
permalink: /research/
description: Publications and perspectives by Yiguang Zhu on new approach methodologies, radon, environmental health, and science policy.
filters: true
---
<div class="zc-page-heading">
  <h1>Research</h1>
</div>
<div data-filter-list="research">
<div class="zc-filter-bar" role="group" aria-label="Research type" data-filter-controls hidden>
  <button type="button" data-filter-key="type" data-filter-value="all" aria-pressed="true">All</button>
  <button type="button" data-filter-key="type" data-filter-value="Publications" aria-pressed="false">Publications</button>
  <button type="button" data-filter-key="type" data-filter-value="Perspectives" aria-pressed="false">Perspectives</button>
</div>
<div class="zc-topic-bar" role="group" aria-label="Research topic" data-filter-controls hidden>
  <button type="button" data-filter-key="topic" data-filter-value="all" aria-pressed="true">All topics</button>
  {% assign topics = site.data.research | map: 'topic' | uniq %}
  {% for topic in topics %}<button type="button" data-filter-key="topic" data-filter-value="{{ topic | escape }}" aria-pressed="false">{{ topic | replace: 'New approach methodologies', 'NAMs' }}</button>{% endfor %}
</div>
<span class="zc-sr-only" role="status" data-filter-status></span>
<p class="zc-filter-empty" data-filter-empty hidden>No entries in this group.</p>
{% assign groups = 'Publications,Perspectives' | split: ',' %}
{% assign ids = 'publications,perspectives' | split: ',' %}
{% for group in groups %}
<section class="zc-section" data-filter-section aria-labelledby="{{ ids[forloop.index0] }}">
  <div class="zc-section-heading"><h2 id="{{ ids[forloop.index0] }}">{{ group }}</h2></div>
  {% assign works = site.data.research | where: 'type', group | sort: 'year' | reverse %}
  {% for work in works %}
  <article class="zc-publication" data-filter-item data-type="{{ work.type }}" data-topic="{{ work.topic | escape }}">
    <span class="zc-year">{{ work.year }} · {{ work.topic }}</span>
    <h3>{% if work.url %}<a href="{{ work.url }}" target="_blank" rel="noopener noreferrer">{{ work.title | escape }}</a>{% else %}{{ work.title | escape }}{% endif %}</h3>
    <p>{{ work.authors | escape }}</p>
    <p class="zc-meta">{{ work.venue | escape }}</p>
  </article>
  {% endfor %}
</section>
{% endfor %}
</div>
