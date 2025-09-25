---
layout: default
title: Home
---
<section class="hero">
  <h1>Hey, I'm Santiago.</h1>
  <p class="muted">Senior Technical Writer → AI‑curious PM. I design docs, systems, and tiny tools.</p>
  <p>
    <a href="mailto:you@example.com">Email me</a> · 
    <a href="{{ '/projects/' | relative_url }}">Explore projects</a>
  </p>
</section>

<h2 style="margin-top: 32px;">New Drops</h2>
<div class="grid">
  {%- assign featured = site.projects | slice: 0, 3 -%}
  {%- for p in featured -%}
    <a class="card" href="{{ p.url | relative_url }}">
      <strong>{{ p.title }}</strong>
      <div class="muted">{{ p.description }}</div>
    </a>
  {%- endfor -%}
</div>
