# 在 GitHub 更新网站

网站继续由 GitHub Pages 发布，不需要安装编辑软件或接入其他平台。

## 先找到对应文件

| 想改什么 | 打开哪个文件 |
| --- | --- |
| 首页 About me 英文 | `index.md`，修改第二条 `---` 后的英文段落 |
| 首页 About me 中文 | 同一个 `index.md` 顶部的 `about_zh` 段落，保留行首两个空格 |
| 导航、教育经历和分类的中英文译文 | `_data/translations.yml` |
| 姓名、邮箱、学历、个人链接 | `_data/profile.yml` |
| 研究条目 | `_data/research.yml` |
| 一篇 Random 的内容 | `_random/` 中对应的 `.md` 文件 |
| 浏览器与搜索结果里的首页标题 | `index.md` 顶部的 `seo_title` |
| Research / Random 的页面标题 | 对应文件夹中的 `index.md` 顶部的 `title` |
| CV、Resume | 在 `assets/files/` 上传 PDF，再修改 `_data/profile.yml` 的路径和日期 |

在 GitHub 打开文件，点铅笔，修改文字，再点 **Commit changes** 保存。不要删除文件开头成对的 `---`。

## 中英文切换

中英文切换目前暂停，网站统一显示英文界面；中文译文仍保存在文件中。以后需要恢复时，把 `_config.yml` 中的 `language_switcher: false` 改为 `language_switcher: true` 即可。网站仍使用原有网址，不需要维护两套页面或接入翻译服务。

首页的两段介绍在同一个 `index.md` 中分别维护。中文写在 `about_zh: |` 后面，段落每行以两个空格开头；英文写在第二条 `---` 后。更新内容时，记得同步这两部分。

论文标题、作者、期刊名以及 Random 正文保留原文；不用为每篇文章准备译文。新主题或新分类如果还没有译文，会先显示你填写的原始名称。需要译名时，在 `_data/translations.yml` 加一行，例如：

```yaml
新分类: { en: New category, zh: 新分类 }
```

## 新增一篇 Random

进入 `_random` 文件夹，点 **Add file → Create new file**。文件名例如 `一杯新的鸡尾酒.md`，粘贴以下内容后改成自己的文字：

```markdown
---
title: "一杯新的鸡尾酒"
subtitle: "A new cocktail"
date: 2026-10-30
category: 调酒
---

这里写正文。空一行就是新的一段。

## 小标题

- 第一项
- 第二项

[链接显示的文字](https://example.com)
```

`subtitle` 是可选英文副标题，不需要时可删掉这一行。日期用 `年-月-日`。保存后文章会自动加入 Random 列表，按日期从新到旧排列；不用手工修改导航或列表。已有文章的文件名决定网址，通常只改正文，不改文件名。

## 新增研究条目

在 `_data/research.yml` 复制一组内容并修改。保留每行前面的空格，标题和作者用英文双引号括起来。

```yaml
- title: "完整标题"
  year: 2026
  type: "Publications"
  authors: "作者姓名"
  venue: "期刊或会议名称"
  topic: "Science policy"
  url: "https://doi.org/实际链接"
  pdf: "/assets/files/论文文件名.pdf"
```

`type` 可选 `Publications`、`Perspectives`。`topic` 是研究主题，同名主题会自动归为一组，生成可点选的分类。研究条目统一显示在 Research 页面；首页只保留 About me 和 Education。没有公开链接时可删掉 `url`。

`research/index.md` 顶部的 `hidden_topics` 可隐藏某个主题的筛选按钮，不删除文章。目前隐藏了 `Environmental science`；对应文章仍会显示在 All topics 下。

`url` 决定点击标题后打开的论文网页；`pdf` 决定下面的 **Full text PDF** 链接。添加全文时，先进入 `assets/files`，点 **Add file → Upload files** 上传 PDF，再把对应路径填入 `pdf`。建议文件名用简短的英文字母、数字和短横线。没有 PDF 时删掉 `pdf` 这一行，不会出现空链接。

## 保存与发布

- 日常更新可以直接保存到 `main`，GitHub 会自动发布。
- 想先检查，可保存到新分支并创建 Pull request。自动检查会确认网页、站内链接和网站地图正常。
- 保存后网站不是立即变化，等 GitHub 的发布完成，再刷新。
- Google 的标题与搜索结果会在重新抓取后逐渐更新，不能保证何时更新或具体排名。

目前 CV 和 Resume 仍是 2026 年 2 月版本，页面已明确标注日期。
