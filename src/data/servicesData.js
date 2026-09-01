export const serviceCategories = [
  {
    id: "waxing",
    title: "WAXING",
    image: "/images/services/cat-waxing.jpg",
    hasToggle: true,
    toggleLabels: ["Normal Waxing", "Rica Waxing"],
    services: [
      { name: "Full Hand", gents: 400, ladies: 300, gentsRica: 500, ladiesRica: 400 },
      { name: "Half Hand", gents: 300, ladies: 200, gentsRica: 400, ladiesRica: 300 },
      { name: "Underarms", gents: 150, ladies: 100, gentsRica: 300, ladiesRica: 200 },
      { name: "Full Leg", gents: 700, ladies: 600, gentsRica: 800, ladiesRica: 700 },
      { name: "Half Leg", gents: 500, ladies: 400, gentsRica: 600, ladiesRica: 500 },
      { name: "Stomach", gents: 400, ladies: 300, gentsRica: 500, ladiesRica: 400 },
      { name: "Chest", gents: 400, ladies: 300, gentsRica: 500, ladiesRica: 400 },
      { name: "Back Half", gents: 350, ladies: 250, gentsRica: 400, ladiesRica: 300 },
      { name: "Full Back", gents: 500, ladies: 400, gentsRica: 600, ladiesRica: 500 },
    ]
  },
  {
    id: "bleach-detan",
    title: "BLEACH / DE-TAN",
    image: "/images/services/cat-bleach.jpg",
    hasToggle: false,
    services: [
      { name: "Full Face", gents: 400, ladies: 400 },
      { name: "Half Hand", gents: 600, ladies: 600 },
      { name: "Full Hand", gents: 400, ladies: 400 },
      { name: "Full Leg", gents: 800, ladies: 800 },
      { name: "Half Leg", gents: 500, ladies: 500 },
      { name: "Full Front", gents: 600, ladies: 600 },
      { name: "Full Back", gents: 500, ladies: 500 },
      { name: "Full Body", gents: 3000, ladies: 3000 },
    ]
  },
  {
    id: "mani-pedi",
    title: "MANICURE & PEDICURE",
    image: "/images/services/cat-mani-pedi.jpg",
    hasToggle: false,
    services: [
      { name: "Manicure", gents: 600, ladies: 600 },
      { name: "Pedicure", gents: 800, ladies: 800 },
      { name: "Crystal Manicure", gents: 1000, ladies: 1000 },
      { name: "Crystal Pedicure", gents: 1200, ladies: 1200 },
      { name: "Foot Massage", gents: "500 / 400", ladies: "500 / 400", isString: true },
      { name: "Manicure + Pedicure with Back Massage", gents: 2000, ladies: 2000 },
      { name: "Crystal Mani + Pedi with Back Massage", gents: 2500, ladies: 2500 },
    ]
  },
  {
    id: "cleanup",
    title: "CLEAN UP",
    image: "/images/services/cat-cleanup.jpg",
    hasToggle: false,
    services: [
      { name: "Instant Clean Up", gents: 600, ladies: 600 },
      { name: "Whitening Clean Up + De-Tan", gents: 800, ladies: 800 },
      { name: "Advance Clean Up", gents: 1000, ladies: 1000 },
    ]
  },
  {
    id: "facial",
    title: "FACIAL / DE-TAN",
    image: "/images/services/cat-facial.jpg",
    hasToggle: false,
    services: [
      { name: "Fruit Facial", gents: 1000, ladies: 1000 },
      { name: "Gold Facial", gents: 1200, ladies: 1200 },
      { name: "N+Plus Facial", gents: 1500, ladies: 1500 },
      { name: "Lotus Facial", gents: 1800, ladies: 1800 },
      { name: "O3 Basic", gents: 2200, ladies: 2200 },
      { name: "Diamond Facial", gents: 2500, ladies: 2500 },
      { name: "O3 Advance", gents: 3000, ladies: 3000 },
      { name: "Basic Hydra Facial", gents: 3500, ladies: 3500 },
      { name: "Advance Hydra Facial", gents: 4500, ladies: 4500 },
    ]
  },
  {
    id: "polishing",
    title: "BODY POLISHING",
    image: "/images/services/cat-polishing.jpg",
    hasToggle: false,
    singlePrice: true,
    services: [
      { name: "Hand Polishing", price: 800 },
      { name: "Leg Polishing", price: 1000 },
      { name: "Back Polishing", price: 600 },
      { name: "Full Body Polishing", price: 3500 },
    ]
  }
];
