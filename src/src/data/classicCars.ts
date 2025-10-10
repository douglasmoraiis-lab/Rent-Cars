// src/data/classicCars.ts

export type Car = {
  id: number;
  name: string;
  year: number;
  image: string[];
  price: number;
  description: string;
  rating: number;
  reviews: number;
  passengers: number;
  doors: number;
  category: 'classic' | 'popular' | 'sport' | 'family' | 'electric' | 'imported';
};

export const classicCars: Car[] = [
  {
    id: 1,
    name: "Chevrolet Opala",
    year: 1974,
    image: ["/images/opala.jpg"],
    price: 200,
    description: "Clássico nacional em ótimo estado.",
    rating: 4.5,
    reviews: 1250,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 2,
    name: "Volkswagen Fusca",
    year: 1965,
    image: ["/images/fusca.jpg"],
    price: 150,
    description: "Um dos mais icônicos do Brasil.",
    rating: 4.8,
    reviews: 2100,
    passengers: 4,
    doors: 2,
    category: 'classic'
  },
];
