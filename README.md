# zhuyg.com — Personal Website

Source code for Yiguang Zhu’s personal website.

**Live site:** https://zhuyg.com

---

## Structure

- `index.md` / `research/index.md` / `random/index.md`: Home, Research, and Random
- `_layouts/` and `_includes/`: Jekyll layouts and components
- `_data/navigation.yml`: top navigation tabs
- `_random/`: Random articles and recipes
- `assets/`: CSS, JS, images, PDFs (CV/Resume), icons

## Updating on GitHub

- Edit the main pages above to update their content.
- Edit `_config.yml` for the profile details and links shared across the site.
- To add a Random entry, copy an existing file in `_random/`, give it a new filename, and update its title, date, category, and text. It will appear on the Random page automatically.
- Keep the `---` sections at the top of content files; they contain page settings.

## Checks

Pull requests automatically build the site with GitHub Pages' Jekyll builder and check that personal pages, local links, and the sitemap remain valid. Publishing continues through the repository's existing GitHub Pages settings.

## Theme credit

The site was originally adapted from [Minimal Light](https://github.com/yaoyao-liu/minimal-light). The original license is retained in `LICENSE`, and bundled third-party assets retain their license notices.
