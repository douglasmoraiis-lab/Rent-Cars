// src/data/classicCars.ts

import opala1 from "../assets/img/opala1.png";
import opala2 from "../assets/img/opala2.png";
import opala3 from "../assets/img/opala3.png";
import opala4 from "../assets/img/opala4.png";

import opalaSS1 from "../assets/img/opalaSS1.png";
import opalaSS2 from "../assets/img/opalaSS2.png";
import opalaSS3 from "../assets/img/opalaSS3.png";
import opalaSS4 from "../assets/img/opalaSS4.png";

import fusca1 from "../assets/img/fusca1.png";
import fusca2 from "../assets/img/fusca2.png";
import fusca3 from "../assets/img/fusca3.png";
import fusca4 from "../assets/img/fusca4.png";

import chavette1 from "../assets/img/chavette1.png";
import chavette2 from "../assets/img/chavette2.png";
import chavette3 from "../assets/img/chavette3.png";
import chavette4 from "../assets/img/chavette4.png";

import charger1 from "../assets/img/charger1.png";
import charger2 from "../assets/img/charger2.png";
import charger3 from "../assets/img/charger3.png";
import charger4 from "../assets/img/charger4.png";

import maverick1 from "../assets/img/maverick1.png";
import maverick2 from "../assets/img/maverick2.png";
import maverick3 from "../assets/img/maverick3.png";
import maverick4 from "../assets/img/maverick4.png";

import monza1 from "../assets/img/monza1.png";
import monza2 from "../assets/img/monza2.png";
import monza3 from "../assets/img/monza3.png";
import monza4 from "../assets/img/monza4.png";

import puma1 from "../assets/img/puma1.png";
import puma2 from "../assets/img/puma2.png";
import puma3 from "../assets/img/puma3.png";
import puma4 from "../assets/img/puma4.png";

import gol1 from "../assets/img/gol1.png";
import gol2 from "../assets/img/gol2.png";
import gol3 from "../assets/img/gol3.png";
import gol4 from "../assets/img/gol4.png";

import santana1 from "../assets/img/santana1.png";
import santana2 from "../assets/img/santana2.png";
import santana3 from "../assets/img/santana3.png";
import santana4 from "../assets/img/santana4.png";

import uno1 from "../assets/img/uno1.png";
import uno2 from "../assets/img/uno2.png";
import uno3 from "../assets/img/uno3.png";
import uno4 from "../assets/img/uno4.png";

import fiat1 from "../assets/img/fiat1.png";
import fiat2 from "../assets/img/fiat2.png";
import fiat3 from "../assets/img/fiat3.png";
import fiat4 from "../assets/img/fiat4.png";

import gurgel1 from "../assets/img/gurgel1.png";
import gurgel2 from "../assets/img/gurgel2.png";
import gurgel3 from "../assets/img/gurgel3.png";
import gurgel4 from "../assets/img/gurgel4.png";

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
    image: [opala1, opala2, opala3, opala4],
    price: 200,
    description: "Clássico nacional em ótimo estado.",
    rating: 4.5,
    reviews: 23,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 2,
    name: "Volkswagen Fusca",
    year: 1965,
    image: [fusca1, fusca2, fusca3, fusca4],
    price: 150,
    description: "Um dos mais icônicos do Brasil.",
    rating: 4.8,
    reviews: 45,
    passengers: 4,
    doors: 2,
    category: 'classic'
  },
  {
    id: 3,
    name: "Chevrolet Opala SS",
    year: 1976,
    image: [opalaSS1, opalaSS2, opalaSS3, opalaSS4],
    price: 280,
    description: "Versão esportiva do clássico Opala.",
    rating: 4.7,
    reviews: 31,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 4,
    name: "Chevette",
    year: 1975,
    image: [chavette1, chavette2, chavette3, chavette4],
    price: 120,
    description: "Compacto clássico brasileiro.",
    rating: 4.2,
    reviews: 18,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 5,
    name: "Dodge Charger",
    year: 1970,
    image: [charger1, charger2, charger3, charger4],
    price: 450,
    description: "Muscle car americano icônico.",
    rating: 4.9,
    reviews: 67,
    passengers: 5,
    doors: 2,
    category: 'classic'
  },
  {
    id: 6,
    name: "Ford Maverick",
    year: 1974,
    image: [maverick1, maverick2, maverick3, maverick4],
    price: 220,
    description: "Clássico americano no Brasil.",
    rating: 4.4,
    reviews: 29,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 7,
    name: "Chevrolet Monza",
    year: 1982,
    image: [monza1, monza2, monza3, monza4],
    price: 180,
    description: "Sedan clássico dos anos 80.",
    rating: 4.3,
    reviews: 22,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 8,
    name: "Puma GTE",
    year: 1978,
    image: [puma1, puma2, puma3, puma4],
    price: 320,
    description: "Esportivo brasileiro artesanal.",
    rating: 4.6,
    reviews: 15,
    passengers: 2,
    doors: 2,
    category: 'classic'
  },
  {
    id: 9,
    name: "Volkswagen Gol",
    year: 1980,
    image: [gol1, gol2, gol3, gol4],
    price: 100,
    description: "O popular brasileiro.",
    rating: 4.1,
    reviews: 52,
    passengers: 5,
    doors: 4,
    category: 'popular'
  },
  {
    id: 10,
    name: "Volkswagen Santana",
    year: 1984,
    image: [santana1, santana2, santana3, santana4],
    price: 140,
    description: "Sedan popular e confiável.",
    rating: 4.2,
    reviews: 38,
    passengers: 5,
    doors: 4,
    category: 'popular'
  },
  {
    id: 11,
    name: "Fiat Uno",
    year: 1984,
    image: [uno1, uno2, uno3, uno4],
    price: 90,
    description: "Compacto popular brasileiro.",
    rating: 4.0,
    reviews: 61,
    passengers: 5,
    doors: 4,
    category: 'popular'
  },
  {
    id: 12,
    name: "Fiat 147",
    year: 1976,
    image: [fiat1, fiat2, fiat3, fiat4],
    price: 110,
    description: "Primeiro hatch brasileiro.",
    rating: 4.1,
    reviews: 25,
    passengers: 5,
    doors: 4,
    category: 'classic'
  },
  {
    id: 13,
    name: "Gurgel X-12",
    year: 1979,
    image: [gurgel1, gurgel2, gurgel3, gurgel4],
    price: 250,
    description: "Buggy brasileiro único.",
    rating: 4.5,
    reviews: 12,
    passengers: 4,
    doors: 2,
    category: 'classic'
  }
];

// Carros populares para exibição inicial
export const popularCars = classicCars.filter(car => car.category === 'popular' || car.rating >= 4.5).slice(0, 3);

// Apenas carros clássicos
export const onlyClassicCars = classicCars.filter(car => car.category === 'classic');
