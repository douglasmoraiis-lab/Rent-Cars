// src/data/classicCars.ts

export type Car = {
  id: number;
  name: string;
  year: number;
  image: string[];
  price: number;
  description: string;
};

export const classicCars: Car[] = [
  {
    id: 1,
    name: "Chevrolet Opala",
    year: 1974,
    image: ["/images/opala.jpg"],
    price: 200,
    description: "Clássico nacional em ótimo estado."
  },
  {
    id: 2,
    name: "Volkswagen Fusca",
    year: 1965,
    image: ["/images/fusca.jpg"],
    price: 150,
    description: "Um dos mais icônicos do Brasil."
  },
];
