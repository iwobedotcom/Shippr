export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const RAZER_URL = "https://www.razer.com/";

export const categories = [
  { id: 1, name: "PCs", slug: "pcs" },
  { id: 2, name: "Mobile", slug: "mobile" },
  { id: 3, name: "Audio", slug: "audio" },
  { id: 4, name: "Keyboards", slug: "keyboards" },
  { id: 5, name: "Console", slug: "console" },
  { id: 6, name: "Gear", slug: "gear" },
  { id: 7, name: "Accessories", slug: "accessories" },
];

export const ratings = [
  { value: 20, name: "one-star-rating" },
  { value: 40, name: "two-stars-rating" },
  { value: 60, name: "three-stars-rating" },
  { value: 80, name: "four-stars-rating" },
  { value: 100, name: "five-stars-rating" },
];
