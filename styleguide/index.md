---
layout: default
title: Styleguide
robots: "noindex, nofollow"
---

<div class="hero">
  <div class="eyebrow">System</div>
  <h1>Design Tokens & Type</h1>
  <p class="lead muted">Quick visual check to keep styles consistent as the site grows.</p>
</div>

## Colors
<div class="sg-grid">
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--bg);border:1px solid var(--border)"></div><p><code>--bg</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--surface);border:1px solid var(--border)"></div><p><code>--surface</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--surface-2);border:1px solid var(--border)"></div><p><code>--surface-2</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--accent)"></div><p><code>--accent</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--success)"></div><p><code>--success</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--warning)"></div><p><code>--warning</code></p></div>
  <div class="sg-card"><div style="height:48px;border-radius:12px;background:var(--danger)"></div><p><code>--danger</code></p></div>
</div>

## Typography
<div class="sg-card">
  <div class="eyebrow">Eyebrow</div>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <p class="lead">Lead paragraph — great for introductions.</p>
  <p>Body paragraph with <code>inline code</code> and a <a href="#">link</a>.</p>
</div>

## Spacing tokens
<div class="sg-grid">
  {% assign spaces = "1,2,3,4,5,6,7,8,9" | split: "," %}
  {% for n in spaces %}
  <div class="sg-card">
    <div style="height: var(--space-{{n}}); background: var(--surface-2); border:1px solid var(--border); border-radius: 8px;"></div>
    <p><code>--space-{{n}}</code></p>
  </div>
  {% endfor %}
</div>

## Buttons (demo)
<p>
  <a class="btn btn--primary" href="#">Primary</a>
  <a class="btn" href="#">Ghost</a>
  <span class="sg-chip">Badge</span>
</p>
