// Your details, used all over the site. Edit here, not in the components.
export const site = {
  name: "Jullia De Jesus",
  firstName: "Jullia",
  role: "UI/UX & web designer",
  email: "julliad.dejesus@gmail.com",
  location: "Philippines",
  timeZone: "Asia/Manila",
  available: true, // shows the green "Available" dot
  linkedin: "https://www.linkedin.com/in/jullia-de-jesus-2171a53a5/",
  github: "https://github.com/julliyuuuh",
};

// Pre-filled subject line so client emails are easy to spot in your inbox
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "New project inquiry",
)}`;

export const services = [
  {
    title: "Website design",
    text: "Landing pages, portfolios and small-business sites that explain what you do in five seconds and make the next step obvious.",
    deliverables: [
      "Sitemap & wireframes",
      "Desktop + phone UI",
      "Clickable prototype",
    ],
  },
  {
    title: "E-commerce UX",
    text: "Shops where browsing, choosing and checking out feel easy, so fewer people leave halfway through.",
    deliverables: [
      "Product & checkout flows",
      "Cart, account & order screens",
      "Friendly form errors",
    ],
  },
  {
    title: "Design → code",
    text: "I build what I design in React and Tailwind, so nothing gets lost between the mockup and the live site.",
    deliverables: [
      "Responsive front-end",
      "Motion & micro-interactions",
      "Accessibility basics built in",
    ],
  },
  {
    title: "UX audit & redesign",
    text: "A fresh look at a site you already have: what confuses people, what slows them down, and how to fix it.",
    deliverables: [
      "Usability review",
      "Prioritised list of fixes",
      "Redesigned key screens",
    ],
  },
];

export const process = [
  {
    title: "Discover",
    text: "A short call about your goals, your customers and what success looks like. You get a clear plan and a fixed quote.",
  },
  {
    title: "Design",
    text: "Wireframes first, then polished screens for desktop and phone. You review a clickable prototype, not static pictures.",
  },
  {
    title: "Build",
    text: "I turn the design into a fast, responsive site and test it on real phones before you see it.",
  },
  {
    title: "Launch",
    text: "I put it live, walk you through it, and stay around for the small tweaks that always come up.",
  },
];

export const toolkit = {
  Design: [
    "User flows",
    "Wireframing",
    "Prototyping",
    "UI design",
    "Design systems",
    "Accessibility",
  ],
  Build: ["React", "Tailwind CSS", "Motion", "JavaScript", "HTML & CSS", "Vite"],
  "Also know the basics": ["Java", "C++", "C#", "MySQL", "Forms Builder"],
};
