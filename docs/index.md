---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Personal Blog"
  text: "My Personal Blog"
  tagline: 前端
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: alt
      text: View on gitee
      link: https://gitee.com/cheng-jingze

features:
  - icon: 💡
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: ⚡️
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  }
</style>
