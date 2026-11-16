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
    title: "Website redesign",
    text: "Is your site hard to read on phones, or stuck in 2012? I redesign it into a clean, fast site your customers will trust, using your own content and brand.",
    deliverables: [
      "Homepage or full site",
      "Phone-friendly layout",
      "30 days of small fixes",
    ],
  },
  {
    title: "Small-business websites",
    text: "Cafés, clinics, B&Bs and shops: hand-coded in HTML, CSS and JavaScript, with no page builder or plugin bills, so they load fast and stay secure.",
    deliverables: [
      "Call, book or order buttons",
      "Hours, map & contact form",
      "Basic SEO tags",
    ],
  },
  {
    title: "Landing pages for apps",
    text: "One clear message, a sign-up or waitlist, and a little interaction that shows what your product does, built in React or Next.js.",
    deliverables: [
      "Next.js or React + TypeScript",
      "Waitlist & sign-up forms",
      "Fast, easy-to-host build",
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
    text: "You get the finished files, or I set the site live on hosting in your name. Small fixes are free for 30 days.",
  },
];

// The sticker board in the About section. `kind` sets the look:
// me = who I am, design / build = skills, basics = languages I know the basics of,
// learning = what I'm studying now. `shape`: pill, round, star, tag.
export const stickers = [
  { label: "BS Information Technology", kind: "me", shape: "tag" },
  { label: "UI/UX", kind: "me", shape: "star" },
  { label: "Chief Creatives Officer · AWS Student Builder Group TIP QC", kind: "me", shape: "tag", wide: true },
  { label: "React", kind: "build", shape: "pill" },
  { label: "User flows", kind: "design", shape: "pill" },
  { label: "Next.js", kind: "build", shape: "pill" },
  { label: "Accessibility", kind: "design", shape: "pill" },
  { label: "TypeScript", kind: "build", shape: "pill" },
  { label: "Wireframing", kind: "design", shape: "pill" },
  { label: "Tailwind CSS", kind: "build", shape: "pill" },
  { label: "HTML & CSS", kind: "build", shape: "round" },
  { label: "Prototyping", kind: "design", shape: "pill" },
  { label: "JavaScript", kind: "build", shape: "pill" },
  { label: "Motion", kind: "build", shape: "star" },
  { label: "Design systems", kind: "design", shape: "pill" },
  { label: "Learning: AWS cloud + a bit of cybersecurity", kind: "learning", shape: "tag" },
  { label: "Java", kind: "basics", shape: "pill" },
  { label: "C++", kind: "basics", shape: "round" },
  { label: "C#", kind: "basics", shape: "round" },
  { label: "MySQL", kind: "basics", shape: "pill" },
  { label: "Forms Builder", kind: "basics", shape: "pill" },
];
