---
layout: default
title: Home
---
<section class="hero">
<div class="hero__content">
  <h1>Hi, I'm Santiago 👋</h1>
  <p class="lead">Senior Technical Writer from Lima, Peru.</p>
  <p>Currently managing GenAI & SaaS knowledge resources at Uber. 5+ years of experience working with US-based engineering teams. Native-level English.</p>
  <div>
    <a class="btn btn--primary" href="mailto:santiago.bolivar7@gmail.com">Resume
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    </a>
    <a class="btn" href="#">Email
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </a>
    <a class="btn" href="https://www.linkedin.com/in/santibolivar/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    </a>
    <a class="btn" href="https://github.com/Sant720/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </a>
  </div>
</div>

<div class="hero__image">
</div>

</section>

<h2>Work & Education</h2>

<p>2 tabs to show work and education</p>

<h2 >Featured projects</h2>
<div class="grid">
  {%- assign featured = site.projects | slice: 0, 3 -%}
  {%- for p in featured -%}
    <a class="card" href="{{ p.url | relative_url }}">
      <div class="card__title">{{ p.title }}</div>
      <div class="card__desc">{{ p.description }}</div>
    </a>
  {%- endfor -%}
</div>
