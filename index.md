---
layout: default
title: Home
---
<section class="hero">
<div class="hero__content">
  <h1>Hi, I'm Santiago 👋</h1>
  <p class="lead">Senior Technical Writer from Lima, Peru.</p>
  <p>Currently managing GenAI & SaaS knowledge resources at Uber. 5+ years of experience working with US-based engineering teams. Native-level English.</p>
  <span>
    <a class="btn btn--primary" href="mailto:santiago.bolivar7@gmail.com">Resume</a>
    <a class="btn" href="{{ '/projects/' | relative_url }}">Explore projects</a>
    <div  class="hero-socials">
    <a href="https://www.linkedin.com/in/santibolivar/" target="_blank"><img src="/assets/svg/linkedin.svg"></a>
    <a href="https://github.com/Sant720/" target="_blank"><img src="/assets/svg/github.svg"></a>
    <a href="mailto:santiago.bolivar7@gmail.com" target="_blank"><img src="/assets/svg/mail.svg"></a>
    </div>
  </span>
  
  </div>
  <div class="hero__image"></div>
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
