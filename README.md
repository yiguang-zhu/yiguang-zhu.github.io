# zhuyg.com — Personal Website

Source code for Yiguang Zhu’s personal website.

**Live site:** https://zhuyg.com

---

## Structure

- `index.md` / `research/index.md` / `random/index.md`: Home, Research, and Random
- `_layouts/` and `_includes/`: shared masthead, footer, Home and article layouts
- `_data/profile.yml`: profile, contact details, PDF links and education
- `_data/research.yml`: publications and perspectives
- `_data/navigation.yml`: top navigation tabs
- `_random/`: Random articles and recipes
- `assets/css/site.css`: the shared responsive design
- `assets/img/` and `assets/files/`: personal photos, icon and PDFs

## Updating on GitHub

- **[中文更新说明](docs/在GitHub更新网站.md)** covers editing the profile, research, articles and PDFs directly in GitHub.
- Edit `index.md` to update About me.
- Edit `_data/profile.yml` for profile details and links shared across the site.
- Edit `_data/research.yml` for research entries. Research is displayed on its own page; Home contains About me and Education.
- To add a Random entry, copy an existing file in `_random/`, give it a new filename, and update its title, date, category, and text. It will appear on the Random page automatically.
- Keep the `---` sections at the top of content files; they contain page settings.

## Checks

Pull requests automatically build the site with GitHub Pages' Jekyll builder and check that personal pages, local links, and the sitemap remain valid. Publishing continues through the repository's existing GitHub Pages settings.

Successful checks save a complete `website-preview` artifact. The `preview-centered-rewrite` branch is a review preview; it is not a production deployment.

All content renders as static HTML. A small local script adds category filters on Research and Random; with JavaScript disabled all content remains readable. Filter options are derived from the content, so adding categories in GitHub needs no code changes. The stylesheet is named `site.css` to avoid a filename collision with GitHub Pages' fallback theme stylesheet.

## Theme credit

The site was originally adapted from [Minimal Light](https://github.com/yaoyao-liu/minimal-light). The original license is retained in `LICENSE`, and bundled third-party assets retain their license notices.

LinkedIn and Instagram logos come from [Bootstrap Icons](https://github.com/twbs/icons), with their MIT license retained in `assets/icons/LICENSE`.
