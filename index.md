---
layout: default
title: Home
---
<section class="hero">
  <h1>Hi, I'm Santiago 👋</h1>
  <p class="lead">Senior Technical Writer from Lima, Peru.</p>
  <p>I design knowledge resources, systems, and tools.</p>
  <p>
    <a class="btn btn--primary" href="mailto:santiago.bolivar7@gmail.com">Resume</a>
    <a class="btn" href="{{ '/projects/' | relative_url }}">Explore projects</a>
  </p>
</section>

<h2 style="margin-top: 32px;">New Drops</h2>
<div class="grid">
  {%- assign featured = site.projects | slice: 0, 3 -%}
  {%- for p in featured -%}
    <a class="card" href="{{ p.url | relative_url }}">
      <div class="card__title">{{ p.title }}</div>
      <div class="card__desc">{{ p.description }}</div>
    </a>
  {%- endfor -%}
</div>
