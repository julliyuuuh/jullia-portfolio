# Jullia De Jesus · Portfolio

My portfolio as a freelance UI/UX and web designer: two in-depth case studies, services, process, and a way to get in touch.

## Pages

- **Home**: hero, a moving strip of real project screens, selected work, services, process, about, and contact
- **Case studies** (`/work/fleurisence`, `/work/weather-dashboard`): the problem, goals, users, flows, key design decisions with screens, visual system, outcome, and next steps

## Editing content

All the words live in two files, so you never need to touch the components:

- `src/data/site.js`: name, email, links, services, process, toolkit
- `src/data/work.js`: the case studies, written as a list of blocks (text, decision, gallery, phones, stats…)

Screenshots are in `src/assets/work/`.

## Built with

React 19, Vite, Tailwind CSS v4, Motion, React Router. Animations follow the visitor's reduced-motion setting.

## Run it

```bash
npm install
npm run dev
```
