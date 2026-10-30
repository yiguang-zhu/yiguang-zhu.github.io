# 在 GitHub 更新网站

网站继续由 GitHub Pages 发布，不需要安装编辑软件或接入其他平台。

## 先找到对应文件

| 想改什么 | 打开哪个文件 |
| --- | --- |
| 首页 About me | `index.md`，修改第二条 `---` 后的英文段落 |
| 姓名、邮箱、学历、个人链接 | `_data/profile.yml` |
| 研究条目 | `_data/research.yml` |
| 一篇 Random 的内容 | `_random/` 中对应的 `.md` 文件 |
| 浏览器与搜索结果里的首页标题 | `index.md` 顶部的 `seo_title` |
| Research / Random 的页面标题 | 对应文件夹中的 `index.md` 顶部的 `title` |
| CV、Resume | 在 `assets/files/` 上传 PDF，再修改 `_data/profile.yml` 的路径和日期 |

在 GitHub 打开文件，点铅笔，修改文字，再点 **Commit changes** 保存。不要删除文件开头成对的 `---`。

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
  selected: true
```

`type` 可选 `Publications`、`Perspectives`、`Talks & posters`。只有 `selected: true` 的条目会出现在首页；不想放首页就删掉这一行。没有公开链接的报告可删掉 `url`，同时不要标记 `selected`。

## 保存与发布

- 当前改版还在 **preview-centered-rewrite** 预览分支。这里的修改不会替换线上网站。
- 改版确认并合并到 `main` 后，今后的日常更新可以直接保存到 `main`，GitHub 会自动发布。
- 想先检查，可保存到新分支并创建 Pull request。自动检查会确认网页、站内链接和网站地图正常。
- 保存后网站不是立即变化，等 GitHub 的发布完成，再刷新。
- Google 的标题与搜索结果会在重新抓取后逐渐更新，不能保证何时更新或具体排名。

目前 CV 和 Resume 仍是 2026 年 2 月版本，页面已明确标注日期。新的任职信息请在正式开始后再更新。
