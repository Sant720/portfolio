---
layout: default
title: Experience
permalink: /experience/
---

# Experience

{% if site.experience and site.experience.size > 0 %}
<ul class="card-list">
  {% assign items = site.experience | sort: 'date' | reverse %}
  {% for item in items %}
    <li class="card">
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      {% if item.role or item.company %}
        <p class="dim">
          {% if item.role %}{{ item.role }}{% endif %}
          {% if item.role and item.company %} · {% endif %}
          {% if item.company %}{{ item.company }}{% endif %}
        </p>
      {% endif %}
      {% if item.start or item.end %}
        <p class="dim">
          {% if item.start %}{{ item.start }}{% endif %}
          {% if item.end %} – {{ item.end }}{% endif %}
        </p>
      {% endif %}
      {% if item.excerpt %}<p>{{ item.excerpt }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
{% else %}
<p>Placeholder content. Add items to <code>_experience/</code> and they’ll appear here automatically.</p>
{% endif %}
