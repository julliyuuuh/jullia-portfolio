import fLanding from "../assets/work/f-landing.jpg";
import oldLanding from "../assets/work/old-landing.jpg";
import oldmLanding from "../assets/work/oldm-landing.jpg";
import oldmAbout from "../assets/work/oldm-about.jpg";
import fMission from "../assets/work/f-landing-mission.jpg";
import fSignin from "../assets/work/f-signin.jpg";
import fShop from "../assets/work/f-shop.jpg";
import fProduct from "../assets/work/f-product.jpg";
import fCheckout from "../assets/work/f-checkout.jpg";
import fOrder from "../assets/work/f-order.jpg";
import fAccount from "../assets/work/f-account.jpg";
import fSettings from "../assets/work/f-settings.jpg";
import fmLanding from "../assets/work/fm-landing.jpg";
import fmShop from "../assets/work/fm-shop.jpg";
import fmProduct from "../assets/work/fm-product.jpg";
import fmHome from "../assets/work/fm-home.jpg";
import wTokyo from "../assets/work/w-tokyo.jpg";
import wManila from "../assets/work/w-manila.jpg";
import wLondon from "../assets/work/w-london.jpg";
import wReykjavik from "../assets/work/w-reykjavik.jpg";
import wmManila from "../assets/work/wm-manila.jpg";
import wmReykjavik from "../assets/work/wm-reykjavik.jpg";
import wmError from "../assets/work/wm-error.jpg";

// Each case study is a list of "blocks". CaseStudyPage turns each block
// type (text, image, phones, flow…) into a section, so adding a new
// project means writing data here, not new components.
export const work = [
  {
    slug: "fleurisence",
    title: "Fleurisence",
    summary:
      "Redesigning an online flower shop so sending a gift feels personal and takes minutes.",
    tags: ["UX/UI design", "E-commerce", "Front-end"],
    year: "2026",
    theme: { bg: "#1f3a2e", soft: "#f3d3cf", text: "#fbf7f2" },
    cover: { desktop: fLanding, phone: fmProduct, url: "fleurisence-shop.vercel.app" },
    highlights: ["12 screens", "3-step checkout", "Phone-first"],
    meta: [
      ["Role", "UX/UI design, front-end"],
      ["Type", "Concept redesign"],
      ["Year", "2026"],
      ["Built with", "React, Tailwind CSS, Motion"],
    ],
    links: [
      { label: "Visit the live site", href: "https://fleurisence-shop.vercel.app" },
      { label: "View the code", href: "https://github.com/julliyuuuh/fleurisence-shop" },
      { label: "See the old version", href: "https://fleurisence.vercel.app" },
    ],
    blocks: [
      {
        type: "text",
        label: "Why I made it",
        title: "I couldn't find a flower shop website I loved, so I made one",
        body: [
          "Whenever I browsed flower shops online, the websites never felt as lovely as the flowers. Most were cluttered, dated, or hard to order from on a phone. So I decided to design the one I wished existed.",
          "Fleurisence started as a simple Bootstrap page I made earlier: a pink welcome banner, an About section and a photo gallery, but no way to buy anything. I redesigned it from scratch into a complete shop, from the first impression all the way to tracking an order.",
          "It's a concept project, so there's no real backend, but every screen works: you can sign in, filter the shop, write a card message, check out and follow your order.",
        ],
      },
      {
        type: "beforeAfter",
        label: "Before & after",
        title: "Same name, completely new shop",
        body: "Drag the handle to compare the first version with the redesign.",
        before: oldLanding,
        after: fLanding,
        beforeAlt: "The old Fleurisence: a plain pink gradient banner that says Welcome to Fluerisence",
        afterAlt: "The redesigned Fleurisence landing page with a headline, buttons and an arched flower photo",
        url: "fleurisence",
        phones: { before: [oldmLanding, oldmAbout], after: [fmLanding, fmProduct] },
        changes: [
          ["A pink banner that said “Just a fun website for flowers, I guess”", "A clear promise and two obvious next steps: Start shopping or Our story"],
          ["No products and no way to buy", "15 products, a bag, a 3-step checkout and order tracking"],
          ["On phones the menu wrapped and the page scrolled sideways", "Built phone-first, with a slide-down menu and no sideways scrolling"],
          ["Emoji icons and made-up stats like “50+ fun facts”", "Real photography, a calm palette and one consistent type system"],
        ],
      },
      {
        type: "split",
        label: "The problem",
        title: "Buying flowers online is stressful",
        body: [
          "You're usually on a deadline, the gift is for someone else, and you can't see or smell what you're buying. Flower shops often make it harder: the delivery date and card message hide at the very end of checkout, forms are long, and after paying you're left wondering if it'll arrive on time.",
        ],
        list: {
          title: "Goals",
          items: [
            "Pick the day and write the note while choosing the gift, not after",
            "Keep checkout short and forgiving",
            "Feel calm and special, never pushy",
            "Work just as well on a phone",
          ],
        },
      },
      {
        type: "personas",
        label: "Who it's for",
        title: "Two kinds of gift-senders",
        note: "Assumptions I designed around, to test with real users next.",
        items: [
          {
            name: "The last-minute gifter",
            quote: "It's her birthday tomorrow. I just need something lovely there on time.",
            needs: ["Clear delivery dates", "Fast checkout", "Confidence it'll arrive"],
          },
          {
            name: "The thoughtful planner",
            quote: "I want it to feel like I chose it myself, with the right words on the card.",
            needs: ["Browse by occasion", "Card message front and centre", "Save favourites for later"],
          },
        ],
      },
      {
        type: "flow",
        label: "User flow",
        title: "The path from landing to delivery",
        steps: ["Landing", "Sign in", "Home", "Shop", "Product", "Bag", "Checkout", "Tracking"],
      },
      {
        type: "image",
        image: fMission,
        alt: "Fleurisence landing page section with the mission and vision statements",
        caption: "The landing page tells the brand's story before asking for anything.",
        frame: "browser",
        url: "fleurisence-shop.vercel.app",
      },
      {
        type: "decision",
        label: "Decision 01",
        title: "Choose the date and the note where you choose the flowers",
        body: "Size, delivery date and card message all live on the product page. The price updates as you pick a size, and the note has a gentle character counter, so the important choices happen while you're still excited about the gift.",
        image: fProduct,
        alt: "Product page with size options, a date picker and a card message box",
      },
      {
        type: "decision",
        label: "Decision 02",
        title: "Account first, but one tap away",
        body: "Accounts let people track orders and reorder for birthdays, so shopping starts with signing in. To keep that from becoming a wall, Google and Apple sign-in come first, and after signing in you land right back where you were headed.",
        aside: "Trade-off: guest checkout usually converts better. I'd A/B test this choice with real shoppers.",
        image: fSignin,
        alt: "Sign-in page with Continue with Google and Continue with Apple buttons",
        flip: true,
      },
      {
        type: "decision",
        label: "Decision 03",
        title: "A shop that remembers",
        body: "Category tabs, occasion chips, search and sort sit together above the products. The filters are saved in the link, so a filtered view survives the back button and can be shared. Hearts save favourites for later.",
        image: fShop,
        alt: "Shop page with category tabs, occasion filters and product cards",
      },
      {
        type: "decision",
        label: "Decision 04",
        title: "Three short checkout steps",
        body: "Delivery, your details, payment: one question at a time, with a progress bar. Errors are written in plain words (\"Enter a PH mobile number, like 0917 123 4567\"), your details are pre-filled, and a \"Send to myself\" button fills in your saved address.",
        image: fCheckout,
        alt: "Checkout step one with a progress bar and the order summary",
        flip: true,
      },
      {
        type: "gallery",
        label: "After paying",
        title: "Reassurance, not silence",
        body: "A drawn checkmark, a delivery tracker and a clear summary answer \"did it work?\" right away. Every order stays in your profile with its own tracker.",
        images: [
          { src: fOrder, alt: "Order confirmation with an animated checkmark and a delivery tracker" },
          { src: fAccount, alt: "Profile page with order history and delivery progress" },
        ],
      },
      {
        type: "palette",
        label: "Visual design",
        title: "Like walking into a small florist's studio",
        body: "Warm cream paper, deep forest green and soft blush, with a serif that feels handwritten next to a friendly sans. Photos sit in arch shapes, like a shop window.",
        colors: [
          { name: "Cream", hex: "#fbf7f2" },
          { name: "Forest", hex: "#1f3a2e" },
          { name: "Blush", hex: "#f3d3cf" },
          { name: "Rose", hex: "#c2525b" },
        ],
        fonts: [
          { name: "Fraunces", role: "Headings", family: "'Fraunces', Georgia, serif" },
          { name: "DM Sans", role: "Body & UI", family: "'DM Sans', system-ui, sans-serif" },
        ],
      },
      {
        type: "phones",
        label: "On phones",
        title: "Designed for the thumb",
        body: "Most gifts are bought on a phone, so every screen was checked at phone size: big tap targets, a slide-down menu, and filters that scroll sideways.",
        images: [
          { src: fmLanding, alt: "Landing page on a phone" },
          { src: fmShop, alt: "Shop with filters on a phone" },
          { src: fmProduct, alt: "Product page on a phone" },
          { src: fmHome, alt: "Signed-in home on a phone" },
        ],
      },
      {
        type: "decision",
        label: "Motion",
        title: "Calm motion, with an off switch",
        body: "One easing curve everywhere, slow fades and small movements: petals drift, photos reveal like a curtain, cards tilt gently. Everything respects the device's reduced-motion setting, and a Motion setting lets people choose Calm or Full themselves.",
        image: fSettings,
        alt: "Settings page with notification switches and a Motion setting",
      },
      {
        type: "stats",
        label: "Outcome",
        title: "What shipped",
        items: [
          ["12", "screens, from landing to order tracking"],
          ["15", "products across bouquets, plants and gifts"],
          ["277 KB", "first download, down from 510 KB after code splitting"],
          ["0", "lint errors, keyboard-friendly throughout"],
        ],
      },
      {
        type: "split",
        label: "What's next",
        title: "What I'd do with real users",
        body: [
          "The biggest open question is the account-first decision. Next, I'd watch five people send a gift for a real occasion and see where they hesitate.",
        ],
        list: {
          title: "Next steps",
          items: [
            "Usability test with 5 gift-senders",
            "A/B test account-first vs guest checkout",
            "Real payments (GCash and cards)",
            "A delivery-area checker on the product page",
          ],
        },
      },
    ],
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A weather app that answers \"what's it like outside?\" at a glance, and changes its mood with the sky.",
    tags: ["UI design", "Data & APIs", "Front-end"],
    year: "2026",
    theme: { bg: "#2a3466", soft: "#cfe0f2", text: "#f4f7fc" },
    cover: { desktop: wTokyo, phone: wmReykjavik, url: "weather-dashboard" },
    highlights: ["6 weather themes", "7 hand-drawn icons", "No framework"],
    meta: [
      ["Role", "UI design, front-end"],
      ["Type", "Personal project"],
      ["Year", "2026"],
      ["Built with", "HTML, CSS, JavaScript, Open-Meteo"],
    ],
    links: [
      { label: "View the code", href: "https://github.com/julliyuuuh/weather-dashboard" },
    ],
    blocks: [
      {
        type: "text",
        label: "Overview",
        title: "Weather apps are busy. This one isn't.",
        body: [
          "Most weather apps bury the answer under ads, maps and twenty numbers. I wanted one that tells you what it's like outside in about two seconds, and feels like the weather it's showing.",
          "Type any city and you get the temperature, the conditions, wind, humidity and a 5-day forecast. No sign-up, no API key, no framework: just three small files.",
        ],
      },
      {
        type: "gallery",
        label: "Decision 01",
        title: "The background is the forecast",
        body: "Before you read a single word, the colour tells you the story: blue for a clear day, grey for clouds and fog, deep indigo at night, and their own moods for rain, storms and snow. The API's 28 weather codes are grouped into six themes.",
        images: [
          { src: wTokyo, alt: "Tokyo, partly cloudy, on a bright blue background" },
          { src: wManila, alt: "Manila, overcast, on a grey background" },
          { src: wLondon, alt: "London in fog, on a soft grey background" },
          { src: wReykjavik, alt: "Reykjavik at night, on a deep indigo background" },
        ],
        columns: 2,
      },
      {
        type: "icons",
        label: "Decision 02",
        title: "Seven icons from three shapes",
        body: "Every icon is hand-drawn SVG built from just a sun, a moon and a cloud, combined with a few strokes for rain, snow and lightning. They stay sharp at any size and take on the theme's text colour automatically.",
      },
      {
        type: "split",
        label: "Decision 03",
        title: "One big number",
        body: [
          "The layout follows the order people ask questions in: How warm is it? Where? What's it doing? Then the details, then the week ahead. The temperature is the largest thing on the screen, so it reads from across the room.",
        ],
        list: {
          title: "Reading order",
          items: [
            "Temperature, big and bold",
            "City, region and country",
            "Conditions + local time",
            "Wind and humidity",
            "5-day highs and lows",
          ],
        },
      },
      {
        type: "phones",
        label: "Decision 04",
        title: "Errors that sound like a person",
        body: "Typos happen. Instead of a blank screen or \"Error 404\", the app says \"No city found\", repeats what you typed, and tells you what to try. Connection problems get their own message too.",
        images: [
          { src: wmManila, alt: "Manila weather on a phone" },
          { src: wmReykjavik, alt: "Reykjavik at night on a phone" },
          { src: wmError, alt: "A friendly 'No city found' message on a phone" },
        ],
      },
      {
        type: "flow",
        label: "How it works",
        title: "From a city name to a mood",
        steps: ["City name", "Geocoding API", "Coordinates", "Forecast API", "Weather code", "Icon + theme"],
      },
      {
        type: "stats",
        label: "Outcome",
        title: "Small on purpose",
        items: [
          ["3", "files: HTML, CSS and JavaScript"],
          ["335", "lines of code in total"],
          ["6", "themes, including night, rain, storm and snow"],
          ["0", "API keys or sign-ups needed"],
        ],
      },
      {
        type: "split",
        label: "What's next",
        title: "Ideas for version 2",
        body: [
          "Two everyday questions the app can't answer yet: \"Will it rain at 5?\" and \"What's it like right where I am?\" Those shape what comes next.",
        ],
        list: {
          title: "Next steps",
          items: [
            "Hourly temperature chart",
            "°C / °F toggle",
            "\"Use my location\" button",
            "A picker for cities that share a name",
          ],
        },
      },
    ],
  },
];

export const findWork = (slug) => work.find((w) => w.slug === slug);
export const nextWork = (slug) => {
  const i = work.findIndex((w) => w.slug === slug);
  return work[(i + 1) % work.length];
};
