import { Product } from '@/types/product';
import earrings1 from '@/assets/earrings-1.jpg';
import necklace1 from '@/assets/necklace-1.jpg';
import bracelet1 from '@/assets/bracelet-1.jpg';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Kolczyki Kwiatowe "Różana Elegancja"',
    price: 89.99,
    images: [earrings1],
    description: 'Delikatne kolczyki wykonane z wysokiej jakości modeliny. Ręcznie rzeźbione kwiaty w odcieniach pudrowego różu. Idealne na specjalne okazje.',
    category: 'kolczyki',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Naszyjnik "Pastelowa Harmonia"',
    price: 129.99,
    images: [necklace1],
    description: 'Elegancki naszyjnik z pastelowymi elementami. Każdy detal wykonany z precyzją i miłością do rzemiosła.',
    category: 'naszyjniki',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Bransoletka "Subtelny Urok"',
    price: 79.99,
    images: [bracelet1],
    description: 'Delikatna bransoletka z małymi kwiatowymi elementami. Perfekcyjna do codziennego noszenia.',
    category: 'bransoletki',
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Kolczyki "Minimalistyczne Kręgi"',
    price: 69.99,
    images: [earrings1],
    description: 'Nowoczesne kolczyki o geometrycznym kształcie. Łączą w sobie prostotę i elegancję.',
    category: 'kolczyki',
    inStock: true,
    featured: false
  },
  {
    id: '5',
    name: 'Naszyjnik "Vintage Rose"',
    price: 149.99,
    images: [necklace1],
    description: 'Naszyjnik inspirowany stylem vintage. Ozdobiony różami w odcieniach pudrowego różu.',
    category: 'naszyjniki',
    inStock: false,
    featured: true
  },
  {
    id: '6',
    name: 'Zestaw "Romantyczny Wieczór"',
    price: 199.99,
    images: [earrings1, necklace1],
    description: 'Kompletny zestaw składający się z kolczyków i naszyjnika. Idealny prezent na specjalne okazje.',
    category: 'inne',
    inStock: true,
    featured: true
  }
];