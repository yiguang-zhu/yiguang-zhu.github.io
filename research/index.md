---
layout: default
nav: research
title: Research
permalink: /research/
description: Publications and perspectives by Yiguang Zhu on new approach methodologies, radon, environmental health, and science policy.
filters: true
hidden_topics: [Environmental science]
---
<div class="zc-page-heading">
  <h1>{% include translate.html key='Research' %}</h1>
</div>
<div data-filter-list="research">
<div class="zc-filter-bar" role="group" aria-label="Research type" data-filter-controls hidden>
  <button type="button" data-filter-key="type" data-filter-value="all" aria-pressed="true">{% include translate.html key='All' %}</button>
  <button type="button" data-filter-key="type" data-filter-value="Publications" aria-pressed="false">{% include translate.html key='Publications' %}</button>
  <button type="button" data-filter-key="type" data-filter-value="Perspectives" aria-pressed="false">{% include translate.html key='Perspectives' %}</button>
</div>
<div class="zc-topic-bar" role="group" aria-label="Research topic" data-filter-controls hidden>
  <button type="button" data-filter-key="topic" data-filter-value="all" aria-pressed="true">{% include translate.html key='All topics' %}</button>
  {% assign topics = site.data.research | map: 'topic' | uniq %}
  {% for topic in topics %}{% unless page.hidden_topics contains topic %}{% assign topic_label = topic | replace: 'New approach methodologies', 'NAMs' %}<button type="button" data-filter-key="topic" data-filter-value="{{ topic | escape }}" aria-pressed="false">{% include translate.html key=topic_label %}</button>{% endunless %}{% endfor %}
</div>
<span class="zc-sr-only" role="status" data-filter-status></span>
<p class="zc-filter-empty" data-filter-empty hidden>{% include translate.html key='No entries' %}</p>
{% assign groups = 'Publications,Perspectives' | split: ',' %}
{% assign ids = 'publications,perspectives' | split: ',' %}
{% for group in groups %}
<section class="zc-section" data-filter-section aria-labelledby="{{ ids[forloop.index0] }}">
  <div class="zc-section-heading"><h2 id="{{ ids[forloop.index0] }}">{% include translate.html key=group %}</h2></div>
  {% assign works = site.data.research | where: 'type', group | sort: 'year' | reverse %}
  {% for work in works %}
  <article class="zc-publication" data-filter-item data-type="{{ work.type }}" data-topic="{{ work.topic | escape }}">
    <span class="zc-year">{{ work.year }} · {% include translate.html key=work.topic %}</span>
    <h3 lang="en">{% if work.url %}<a href="{{ work.url }}" target="_blank" rel="noopener noreferrer">{{ work.title | escape }}</a>{% else %}{{ work.title | escape }}{% endif %}</h3>
    <p lang="en">{{ work.authors | escape }}</p>
    <p class="zc-meta" lang="en">{{ work.venue | escape }}</p>
    {% if work.pdf %}<p class="zc-publication-links"><a href="{{ work.pdf | relative_url }}" target="_blank" rel="noopener noreferrer" type="application/pdf">{% include translate.html key='Full text PDF' %}<span class="zc-sr-only" lang="en">: {{ work.title | escape }}</span></a></p>{% endif %}
  </article>
  {% endfor %}
</section>
{% endfor %}
</div>
