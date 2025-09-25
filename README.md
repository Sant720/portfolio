# Portfolio Starter (Dark-only, Jekyll + GitHub Pages)

## Quickstart
1) Set `url` and `baseurl` in `_config.yml`.
2) Push this repo to GitHub.
3) Enable **Settings → Pages → Deploy from branch** (main / root).
4) Your site will be available at `https://<user>.github.io/portfolio/`.

## Local Preview (optional)
If you have Ruby:
```bash
bundle install
bundle exec jekyll serve
```

Or Docker:
```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll jekyll/jekyll:4 jekyll serve --livereload
```
