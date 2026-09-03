import haircutImg from '../assets/Images/haircut.jpg';
import hairtreatmentImg from '../assets/Images/hairtreatment.jpg';
import haircolourImg from '../assets/Images/haircolour.jpg';
import straightBlowDryImg from '../assets/Images/Straight-Blow-Dry.jpg';
import ironhairImg from '../assets/Images/ironhair.jpg';
import hairspaImg from '../assets/Images/hairspa.jpg';
import hairspa1Img from '../assets/Images/hairspa1.jpg';
import waxImg from '../assets/Images/wax.jpg';
import detanImg from '../assets/Images/detan.jpg';
import manicureImg from '../assets/Images/menicure.jpg';
import cleanupImg from '../assets/Images/cleanup.jpg';
import hydrafacialImg from '../assets/Images/hydrafacial.jpg';
import threadingImg from '../assets/Images/Threading.png';
import bodyPolishingImg from '../assets/Images/body-polishing.jpg';

export const serviceCategories = [
  {
    id: "hair",
    title: "HAIR",
    image: haircutImg,
    hasToggle: false,
    services: [
      { name: "Haircut", gents: 250, ladies: 600 },
      { name: "Haircut with Wash", gents: 300, ladies: 700 },
      { name: "Haircut (Sagar)", gents: 300, ladies: 600 },
      { name: "Haircut (Sagar) with Wash", gents: 350, ladies: 700 },
      { name: "Child Boy Haircut", gents: 250, ladies: "—" },
      { name: "Child Girl Haircut", gents: "—", ladies: 400 },
      { name: "Head Massage", gents: 350, ladies: 500 },
    ]
  },
  {
    id: "hair-spa",
    title: "HAIR SPA",
    image: hairtreatmentImg,
    hasToggle: false,
    services: [
      { name: "Loreal Hair Spa", gents: "700 onwards", ladies: "1200 onwards" },
      { name: "Hair Smoothing Spa", gents: "800 onwards", ladies: "1400 onwards" },
      { name: "Anti Dandruff Hair Spa", gents: "800 onwards", ladies: "1500 onwards" },
      { name: "Hair Repairing Spa", gents: "1000 onwards", ladies: "1600 onwards" },
    ]
  },
  {
    id: "hair-colour",
    title: "HAIR COLOUR",
    image: haircolourImg,
    hasToggle: false,
    services: [
      { name: "Root Touchup", gents: "Contact for Price", ladies: "1200 onwards" },
      { name: "Global", gents: "800 onwards", ladies: "3000 onwards" },
      { name: "Highlight", gents: "Contact for Price", ladies: "400 / strip" },
      { name: "Global Highlight", gents: "1500 onwards", ladies: "3500 onwards" },
      { name: "Global + Highlight", gents: "2500 onwards", ladies: "6000 onwards" },
    ]
  },
  {
    id: "blowdry-styling",
    title: "BLOW DRY & STYLING",
    image: straightBlowDryImg,
    hasToggle: false,
    singlePrice: true,
    services: [
      { name: "Straight Blow Dry", price: "400 onwards" },
      { name: "Curls Blow Dry", price: "500 onwards" },
    ]
  },
  {
    id: "ironing",
    title: "IRONING",
    image: ironhairImg,
    hasToggle: false,
    singlePrice: true,
    services: [
      { name: "Straight", price: "800 onwards" },
      { name: "Tong Curls", price: "1000 onwards" },
    ]
  },
  {
    id: "hair-treatment",
    title: "HAIR TREATMENT",
    image: hairspa1Img,
    hasToggle: false,
    services: [
      { name: "Rebonding", gents: 3500, ladies: "6000 onwards" },
      { name: "Smoothing", gents: 2500, ladies: "5000 onwards" },
      { name: "Basic Keratin", gents: 2000, ladies: "4000 onwards" },
      { name: "Botox", gents: 3000, ladies: "6000 onwards" },
      { name: "Nano Plastia", gents: 4000, ladies: "7000 onwards" },
    ]
  },
  {
    id: "threading-wax",
    title: "THREADING / STRIPLESS WAX",
    image: threadingImg,
    hasToggle: false,
    columnLabels: ["Thread", "Wax"],
    services: [
      { name: "Eyebrow", thread: 50, wax: null },
      { name: "Upper Lips", thread: 20, wax: 60 },
      { name: "Forehead", thread: 30, wax: 60 },
      { name: "Lower Lips", thread: 20, wax: 60 },
      { name: "Chin", thread: 40, wax: 60 },
      { name: "Full Chin", thread: 60, wax: 100 },
      { name: "Side Lock", thread: 100, wax: 200 },
      { name: "Jawline", thread: 50, wax: 80 },
      { name: "Neck", thread: 80, wax: 150 },
      { name: "Full Face", thread: 250, wax: 400 },
      { name: "B. Wax", thread: null, wax: 1800 },
      { name: "Nose", thread: null, wax: 60 },
    ]
  },
  {
    id: "waxing",
    title: "WAXING",
    image: waxImg,
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
      { name: "Full Body", gents: 3000, ladies: 2000, gentsRica: 4000, ladiesRica: 3000 },
    ]
  },
  {
    id: "bleach-detan",
    title: "BLEACH / DE-TAN",
    image: detanImg,
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
    image: manicureImg,
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
    image: cleanupImg,
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
    image: hydrafacialImg,
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
    image: bodyPolishingImg,
    hasToggle: false,
    singlePrice: true,
    services: [
      { name: "Hand Polishing", price: 800 },
      { name: "Leg Polishing", price: 1000 },
      { name: "Back Polishing", price: 600 },
      { name: "Full Body Polishing", price: 3500 },
      { name: "Full Body Massage", duration: "60 min", price: 1500 },
    ]
  }
];
