# Website typefaces

All Latin text uses Adobe Source Serif 4, including navigation, metadata, and personal links. Chinese body text and the footer retain the existing Songti SC / Noto Serif CJK SC / SimSun serif stack. A Latin-first font stack prevents English in Chinese articles from falling into a CJK font's Latin glyphs.

The WOFF2 files are self-hosted. Licenses are included alongside them.

- Source Serif: https://github.com/adobe-fonts/source-serif/tree/80d3f8894c09c937bebfa9011247d2e1c79fd6f4/WOFF2/TTF

The preview's Chinese name uses LXGW WenKai TC. Noto Serif SC (500) and ZCOOL XiaoWei (400) are alternative header treatments awaiting design review; they are not used for body text. These three files are Google Fonts web subsets containing only `朱益广` (U+6731, U+76CA, U+5E7F), served by Google Fonts on 2026-10-30 and saved without further modification. Changing the displayed name to other characters uses the Chinese fallback until its font subset is refreshed.

- LXGW WenKai TC: https://github.com/lxgw/LxgwWenkaiTC
- Noto Serif SC: https://github.com/google/fonts/tree/main/ofl/notoserifsc
- ZCOOL XiaoWei: https://github.com/google/fonts/tree/main/ofl/zcoolxiaowei
- Google Fonts requests: `family=LXGW+WenKai+TC:wght@400`, `family=Noto+Serif+SC:wght@500`, and `family=ZCOOL+XiaoWei`, each with `text=朱益广&display=swap`.
