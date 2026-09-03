import img1 from '../assets/Images/image 1.jpeg';
import img2 from '../assets/Images/image-2.jpg';
import img3 from '../assets/Images/colour-img.jpeg';
import img4 from '../assets/Images/image-3.jpg';
import img5 from '../assets/Images/image-4.jpg';
import img6 from '../assets/Images/image-5.jpg';
import hairspaImg from '../assets/Images/hairspa.jpg';
import manicureImg from '../assets/Images/menicure.jpg';
import pedicureImg from '../assets/Images/pedicure.jpg';

export const services = [
  {
    id: "01",
    name: "HAIRCUT",
    description: "Precision cutting tailored to your bone structure and personal style.",
    image: "/images/services/haircut.jpg"
  },
  {
    id: "02",
    name: "HAIR COLOR",
    description: "Bespoke color formulas from subtle balayage to complete transformations.",
    image: "/images/services/hair-color.jpg"
  },
  {
    id: "03",
    name: "HAIR TREATMENT",
    description: "Restorative treatments for ultimate hair health, shine, and vitality.",
    image: "/images/services/hair-treatment.jpg"
  },
  {
    id: "04",
    name: "HAIR SPA",
    description: "Luxury hair spa and relaxing treatments for complete rejuvenation.",
    image: "/images/services/hair-spa.jpg"
  },
  {
    id: "05",
    name: "BEARD",
    description: "Premium men's grooming, precision beard styling and shaping.",
    image: "/images/services/beard.jpg"
  },
  {
    id: "06",
    name: "BRIDAL",
    description: "Elegant bridal hair and premium beauty styling for your special day.",
    image: "/images/services/bridal.jpg"
  },
  {
    id: "07",
    name: "MEN'S STYLING",
    description: "Fashionable men's hairstyles, fades, and modern texturing.",
    image: "/images/services/mens-styling.jpg"
  },
  {
    id: "08",
    name: "WOMEN'S STYLING",
    description: "Premium women's hairstyles, blowouts, and sophisticated styling.",
    image: "/images/services/womens-styling.jpg"
  }
];

export const gallery = [
  { id: 1, image: img1, title: "Midnight Brunette", category: "Colour" },
  { id: 2, image: img2, title: "Soft Texture", category: "Cut" },
  { id: 3, image: img3, title: "Golden Hour", category: "Balayage" },
  { id: 4, image: hairspaImg, title: "Nourishing Hair Spa", category: "Hair Spa" },
  { id: 5, image: manicureImg, title: "Luxury Manicure", category: "Nail Care" },
  { id: 6, image: pedicureImg, title: "Spa Pedicure", category: "Nail Care" },
  { id: 7, image: img4, title: "Sleek Glass", category: "Treatment" },
  { id: 8, image: img5, title: "Dimensional Face Frame", category: "Colour" },
  { id: 9, image: img6, title: "Voluminous Layers", category: "Style" }
];

export const stylists = [
  {
    name: "Sagar",
    role: "Founder & Master Stylist",
    image: "/images/stylists/stylist-01.jpg",
    bio: "With over 15 years in luxury hair design, Sagar specializes in transformative cuts and bespoke colour."
  },
  {
    name: "Elena",
    role: "Senior Colourist",
    image: "/images/stylists/stylist-02.jpg",
    bio: "An artist with balayage, Elena creates dimensional, lived-in colour tailored to each client."
  },
  {
    name: "Marcus",
    role: "Extension Specialist",
    image: "/images/stylists/stylist-03.jpg",
    bio: "Marcus seamlessly blends premium extensions for undetectable, flawless volume and length."
  }
];

export const instagramFeed = [
  "/images/instagram/insta-01.jpg",
  "/images/instagram/insta-02.jpg",
  "/images/instagram/insta-03.jpg",
  "/images/instagram/insta-04.jpg",
  "/images/instagram/insta-05.jpg",
  "/images/instagram/insta-06.jpg"
];

export const testimonials = [
  {
    id: 1,
    quote: "Exceptional service, beautiful atmosphere and the best haircut I've had in years.",
    author: "Elena R.",
    role: "Client"
  },
  {
    id: 2,
    quote: "Sagar and his team truly understand the art of personal style. I left feeling more confident than ever.",
    author: "David M.",
    role: "Client"
  },
  {
    id: 3,
    quote: "A luxury experience from start to finish. The attention to detail is unmatched.",
    author: "Sophie T.",
    role: "Client"
  }
];
