import ppBefore from "../assets/concepts/pp-before.jpg";
import ppAfter from "../assets/concepts/pp-after.jpg";
import ppPhone from "../assets/concepts/pp-phone.jpg";
import odBefore from "../assets/concepts/od-before.jpg";
import odAfter from "../assets/concepts/od-after.jpg";
import odPhone from "../assets/concepts/od-phone.jpg";
import tlBefore from "../assets/concepts/tl-before.jpg";
import tlAfter from "../assets/concepts/tl-after.jpg";
import tlPhone from "../assets/concepts/tl-phone.jpg";

// Redesign concepts: made-up businesses, each with a deliberately dated
// "before" site and my redesign. Edit the words here, not in the component.
export const concepts = [
  {
    id: "cafe",
    name: "Pebble & Pour",
    kind: "Café",
    url: "pebbleandpour.example",
    summary:
      "A 2013 table layout with a PDF menu, reimagined as the café's own two-ink risograph zine: a contents page for navigation and a menu that prints your order on a paper receipt.",
    changes: [
      "PDF menu → a printed-zine menu with + buttons",
      "“Call us to order” → a receipt that builds your pickup order",
      "Visitor counter & guestbook → today's hours and a hand-drawn map",
    ],
    builtWith: ["HTML", "CSS", "JavaScript"],
    before: ppBefore,
    after: ppAfter,
    phone: ppPhone,
  },
  {
    id: "dental",
    name: "Oakmint Dental",
    kind: "Dental clinic",
    url: "oakmintdental.example",
    summary:
      "A 2012 site with old notices and a Flash slideshow, redesigned in a calm Swiss style for nervous patients: a breathing exercise, prices up front and a week-view booking picker.",
    changes: [
      "Stale 2020 notices → open-now status and hours, always in the sidebar",
      "Print-out forms → pick a time slot, then three short fields",
      "Wall of text → plain-words care list, price table, first visit minute by minute",
    ],
    builtWith: ["HTML", "CSS", "JavaScript"],
    before: odBefore,
    after: odAfter,
    phone: odPhone,
  },
  {
    id: "app",
    name: "Tallyloop",
    kind: "App landing page",
    url: "tallyloop.example",
    summary:
      "A filler-text template replaced with a housemates' group chat that explains the app, plus an 'untangle' demo that turns nine IOUs into two payments.",
    changes: [
      "Lorem ipsum → a group chat that tells the story",
      "Empty screenshot box → an untangle diagram and a live split demo",
      "“Download now!!” → a simple waitlist form",
    ],
    builtWith: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    before: tlBefore,
    after: tlAfter,
    phone: tlPhone,
  },
];
