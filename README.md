# My Personal Website

This is the code for my personal [website](https://gabsavard.com). I am using this as an opportunity to redesign my website into something more complete and that looks more professional as well as to learn the Astro.Js framework. A lot of my early work will be me migrating my old website to this new framework, but it will be worth it. This repository will also feature the source code of the website, but it will note have all of the articles and pages.

## Table of Contents

- [Features](#features)
- [Project Structure](#project_structure)
- [License](#license)

## Features

I know websites usually don't have a feature part, especially when they use frameworks like Astro that are more about being static. But I am using this section more as a checklist for what I want to do with my website:

- [ ] Home Page
- [ ] Projects
  - [ ] Projects index page
    - [ ] Filter the projects by tags
    - [ ] Automatically updates with new projects
  - [ ] Project Page Layout
- [ ] Blog
  - [x] Blog index page
    - [x] Filter the blog articles by tags
    - [x] Automatically updates with new articles
  - [ ] Blog article Layout
- [ ] Contact Page
  - [ ] Email form
  - [ ] Socials list
- [ ] About Page

## Project Structure

Here's an overview of the project structure:

```
Astro-website/
├── node_modules/
│   └── (Too many modules to list here)
├── public/
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── BlogList.jsx
│   │   ├── BlogView.jsx
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Line.astro
│   │   ├── Navigation.astro
│   │   ├── PostCard.astro
│   │   └── TagButton.jsx
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   │       └── (All blog posts)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── blog.astro
│   │   └── index.astro
│   ├── styles/
│   │   ├── blogList.css
│   │   ├── fonts.css
│   │   └── global.css
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
└── tsconfig.json
```

- public/: Static assets like images and icons.
- src/components/: Reusable components used throughout the site.
- src/layouts/: Layout components to structure different pages.
- src/pages/: Page components for different routes.
- src/styles/: Global and component-specific styles.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
