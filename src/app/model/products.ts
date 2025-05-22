

export interface  Product {
  bracelet: any;
  currentImage: string;
  count: number;
  quantity: number;
  id: number,
  name: string,
  description?: string,
  price: number,
  imageUrl: string[];
  shipping: number;
}
export const  products: Product[] = [
    {
      id: 1,
      name: '0.12 CT Baquette Cut Diamond Rose Gold Ring',
      description: '0.12 CT Baquette Cut Diamond Rose Gold Ring',
      price: 335,
      imageUrl: [
        'https://www.nevjewellery.com/gunes-018-ct-baget-pi…baget-pirlanta-yuzuk-nev-jewellery-10115-59-O.jpg',
        'https://www.nevjewellery.com/gunes-018-ct-baget-pi…baget-pirlanta-yuzuk-nev-jewellery-10114-59-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 2,
      name: 'White Pearly Enamel Rose Gold Drop Shaped Single Earring',
      description: 'White Pearly Enamel Rose Gold Drop Shaped Single Earring',
      price: 500,
      imageUrl: [
        'https://www.nevjewellery.com/106-ct-baguette-cut-d…e-cut-diamond-rings-nev-jewellery-21439-26-O.webp',
        'https://www.nevjewellery.com/106-ct-baget-pirlanta…-baget-pirlanta-yuzuk-nev-jewellery-9387-26-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 3,
      name: 'Solid 0.04 CT Baguette Cut Diamond Rose Gold Ring',
      description: 'Solid 0.04 CT Baguette Cut Diamond Rose Gold Ring',
      price: 270,
      imageUrl: [
        'https://www.nevjewellery.com/solid-004-ct-baguette-cut-diamond-rose-gold-ring-diamond-rings-nev-jewellery-11313-23-O.jpg',
        'https://www.nevjewellery.com/solid-004-ct-baget-pi…yuzuk-pirlanta-yuzuk-nev-jewellery-11312-23-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 4,
      name: 'Metis 1.44 Baguette Cut Diamond Ring',
      description: 'Metis 1.44 Baguette Cut Diamond Ring',
      price: 620,
      imageUrl: [
        'https://www.nevjewellery.com/metis-144-ct-baguette-cut-diamond-ring-baguette-cut-diamond-rings-nev-jewellery-7831-71-O.jpg',
        'https://www.nevjewellery.com/metis-144-ct-baget-pi…aget-pirlanta-yuzuk-nev-jewellery-22710-71-O.webp'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 5,
      name: 'Aden 0.30 CT Baguette Cut Diamond White Gold Ring',
      description: 'Aden 0.30 CT Baguette Cut Diamond White Gold Ring',
      price: 420,
      imageUrl: [
        'https://www.nevjewellery.com/aden-030-ct-baguette-cut-diamond-white-gold-ring-baguette-cut-diamond-rings-nev-jewellery-15385-31-O.jpg',
        'https://www.nevjewellery.com/aden-030-ct-baget-pir…baget-pirlanta-yuzuk-nev-jewellery-15388-31-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 6,
      name: '0.55 CT Multicolor Sapphire and Brown Diamond Ring',
      description: '0.55 CT Multicolor Sapphire and Brown Diamond Ring',
      price: 175,
      imageUrl: [
        'https://www.nevjewellery.com/055-ct-multicolor-sap…lored-gemstone-rings-nev-jewellery-14374-46-B.jpg',
        'https://www.nevjewellery.com/055-ct-multicolor-saf…k-renkli-tasli-yuzuk-nev-jewellery-14370-46-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 7,
      name: 'Flare 0.28 CT Multicolor Sapphire and Daimond Ring',
      description: 'Flare 0.28 CT Multicolor Sapphire and Daimond Ring',
      price: 200,
      imageUrl: [
        'https://www.nevjewellery.com/flare-028-ct-multicol…lored-gemstone-rings-nev-jewellery-11031-22-O.jpg',
        'https://www.nevjewellery.com/flare-028-ct-multicol…k-renkli-tasli-yuzuk-nev-jewellery-11030-22-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 8,
      name: 'Cutie  0.16 CT Daimond and Green Sapphire Dual Heart Ring',
      description: 'Cutie  0.16 CT Daimond and Green Sapphire Dual Heart Ring',
      price: 230,
      imageUrl: [
        'https://www.nevjewellery.com/016-ct-diamond-and-gr…lored-gemstone-rings-nev-jewellery-14135-24-O.jpg',
        'https://www.nevjewellery.com/016-ct-pirlanta-ve-gr…k-renkli-tasli-yuzuk-nev-jewellery-14134-24-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 9,
      name: 'Eye 0.11 CT Sapphire and Diamond Rose Gold Ring',
      description: 'Eye 0.11 CT Sapphire and Diamond Rose Gold Ring',
      price: 167,
      imageUrl: [
        'https://www.nevjewellery.com/085-ct-markiz-kesim-y…in-yuzuk-yakut-yuzuk-nev-jewellery-11769-29-O.jpg',
        'https://www.nevjewellery.com/083-ct-multicolor-sap…olored-gemstone-rings-nev-jewellery-7117-57-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 10,
      name: 'Aten Diamond and Sapphire Rose Gold Ring',
      description: 'Aten Diamond and Sapphire Rose Gold Ring',
      price: 285,
      imageUrl: [
        'https://www.nevjewellery.com/aten-diamond-and-sapphire-rose-gold-ring-soul-star-nev-jewellery-19714-36-O.webp',
        'https://www.nevjewellery.com/aten-diamond-and-sapp…gold-ring-soul-star-nev-jewellery-19801-36-O.webp'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 11,
      name: '2.38 CT Multicolor Sapphire White Gold Eternity Ring',
      description: '2.38 CT Multicolor Sapphire White Gold Eternity Ring',
      price: 305,
      imageUrl: [
        'https://www.nevjewellery.com/238-ct-multicolor-sap…olored-gemstone-rings-nev-jewellery-2144-54-O.jpg',
        'https://www.nevjewellery.com/238-ct-multicolor-sap…olored-gemstone-rings-nev-jewellery-2150-54-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 12,
      name: '2.55 CT Oval Cut Citrine and Diamond Rose Gold Ring',
      description: '2.55 CT Oval Cut Citrine and Diamond Rose Gold Ring',
      price: 332,
      imageUrl: [
        'https://www.nevjewellery.com/228-ct-oval-cut-citri…ored-gemstone-rings-nev-jewellery-22581-47-O.webp',
        'https://www.nevjewellery.com/228-ct-oval-cut-citri…ored-gemstone-rings-nev-jewellery-22580-47-O.webp'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 13,
      name: ' Hearts 0.05 CT Diamond White Gold Ring',
      description: ' Hearts 0.05 CT Diamond White Gold Ring',
      price: 189,
      imageUrl: [
        'https://www.nevjewellery.com/hearts-005-ct-diamond…d-ring-diamond-rings-nev-jewellery-11052-22-O.jpg',
        'https://www.nevjewellery.com/hearts-005-ct-diamond…d-ring-diamond-rings-nev-jewellery-11051-22-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 14,
      name: 'Loop 0.02 CT Diamond Rose Gold Ring',
      description: 'Loop 0.02 CT Diamond Rose Gold Ring',
      price: 210,
      imageUrl: [
        'https://www.nevjewellery.com/loop-002-ct-diamond-r…d-ring-diamond-rings-nev-jewellery-13953-33-O.jpg',
        'https://www.nevjewellery.com/loop-002-ct-diamond-r…d-ring-diamond-rings-nev-jewellery-13949-33-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 15,
      name: 'Minimal Diamond Chevron Ring',
      description: 'Minimal Diamond Chevron Ring',
      price: 200,
      imageUrl: [
        'https://www.nevjewellery.com/minimal-diamond-chevron-ring-1-diamond-rings-nev-jewellery-826-15-O.jpg',
        'https://www.nevjewellery.com/minimal-diamond-chevron-ring-1-diamond-rings-nev-jewellery-825-15-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    },
    {
      id: 16,
      name: '0.09 CT Blue Sapphire Ring',
      description: '0.09 CT Blue Sapphire and Diamond White Gold Ring',
      price: 285,
      imageUrl: [
        'https://www.nevjewellery.com/moon-009-ct-blue-sapp…lored-gemstone-rings-nev-jewellery-12894-22-O.jpg',
        'https://www.nevjewellery.com/moon-009-ct-blue-sapp…lored-gemstone-rings-nev-jewellery-11015-22-O.jpg'
      ],
      quantity: 0,
      count: 0,
      shipping: 4.90,
      currentImage: "",
      bracelet: undefined
    }
]
export const  earrings: Product[]  = [
  {
    id: 1,
    name: 'All Diamond Rose Gold Single Earring',
    description: 'All Diamond Rose Gold Single Earring',
    price: 120,
    imageUrl: [
      'https://www.nevjewellery.com/ally-diamond-rose-gold-single-earring-single-earrings-nev-jewellery-24507-45-O.webp',
      'https://www.nevjewellery.com/ally-diamond-rose-gold-single-earring-single-earrings-nev-jewellery-24510-45-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 2,
    name: 'White Pearly Enamel Rose Gold Drop Shaped Single Earring',
    description: 'White Pearly Enamel Rose Gold Drop Shaped Single Earring',
    price: 72,
    imageUrl: [
      'https://www.nevjewellery.com/white-pearly-enamel-rose-gold-drop-shaped-single-earring-single-earrings-nev-jewellery-16686-19-O.webp',
      'https://www.nevjewellery.com/white-pearly-enamel-rose-gold-drop-shaped-single-earring-single-earrings-nev-jewellery-16684-19-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 3,
    name: 'Bliss Line 0.10 CT Pink Sapphire and White Sapphire Mini Single Earring',
    description: 'Bliss Line 0.10 CT Pink Sapphire and White Sapphire Mini Single Earring',
    price: 143,
    imageUrl: [
      'https://www.nevjewellery.com/bliss-line-010-ct-pink-sapphire-and-white-sapphire-mini-single-earring-single-earrings-nev-jewellery-1826-33-O.jpg',
      'https://www.nevjewellery.com/bliss-line-010-ct-pink-sapphire-and-white-sapphire-mini-single-earring-single-earrings-nev-jewellery-1827-33-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 4,
    name: 'Boson 0.18 CT Brown Diamond and Black Enamel Earring',
    description: 'Boson 0.18 CT Brown Diamond and Black Enamel Earring',
    price: 350,
    imageUrl: [
      'https://www.nevjewellery.com/boson-018-ct-brown-diamond-and-black-enamel-earring-diamond-earrings-with-enamel-nev-jewellery-4035-15-O.jpg',
      'https://www.nevjewellery.com/boson-018-ct-brown-diamond-and-black-enamel-earring-diamond-earrings-with-enamel-nev-jewellery-18646-15-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 5,
    name: 'Flare 0.26 CT Diamond Mini Earring',
    description: 'Flare 0.26 CT Diamond Mini Earring',
    price: 420,
    imageUrl: [
      'https://www.nevjewellery.com/flare-026-ct-diamond-mini-earring-single-earrings-nev-jewellery-15579-21-O.jpg',
      'https://www.nevjewellery.com/flare-026-ct-diamond-mini-earring-single-earrings-nev-jewellery-15580-21-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 6,
    name: '0.55 CT Multicolor Sapphire and Brown Diamond Ring',
    description: '0.55 CT Multicolor Sapphire and Brown Diamond Ring',
    price: 115,
    imageUrl: [
      'https://www.nevjewellery.com/dream-032-ct-baguette-cut-diamond-single-earring-baguette-cut-diamond-earring-nev-jewellery-1856-34-O.jpg',
      'https://www.nevjewellery.com/dream-032-ct-baguette-cut-diamond-single-earring-baguette-cut-diamond-earring-nev-jewellery-1855-34-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 7,
    name: '2.74 CT Diamond White Gold Sphere Single Earring',
    description: '2.74 CT Diamond White Gold Sphere Single Earring',
    price: 120,
    imageUrl: [
      'https://www.nevjewellery.com/274-ct-diamond-white-gold-sphere-single-earring-single-earrings-nev-jewellery-12316-25-B.jpg',
      'https://www.nevjewellery.com/274-ct-diamond-white-gold-sphere-single-earring-single-earrings-nev-jewellery-12317-25-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 8,
    name: 'Camelia Orange Sapphire Rose Gold Single Earring',
    description: 'Camelia Orange Sapphire Rose Gold Single Earring',
    price: 270,
    imageUrl: [
      'https://www.nevjewellery.com/camelia-orange-sapphire-rose-gold-single-earring-single-earrings-nev-jewellery-20935-39-O.webp',
      'https://www.nevjewellery.com/camelia-orange-sapphire-rose-gold-single-earring-single-earrings-nev-jewellery-20936-39-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 9,
    name: 'Mirror Pear Cut Diamond White Gold Single Earring',
    description: 'Mirror Pear Cut Diamond White Gold Single Earring',
    price: 167,
    imageUrl: [
      'https://www.nevjewellery.com/mirror-pear-cut-diamond-white-gold-single-earring-single-earrings-nev-jewellery-20849-39-O.webp',
      'https://www.nevjewellery.com/mirror-pear-cut-diamond-white-gold-single-earring-single-earrings-nev-jewellery-20850-39-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 10,
    name: 'Diya Diamond Rose Gold Single Earring',
    description: 'Diya Diamond Rose Gold Single Earring',
    price: 205,
    imageUrl: [
      'https://www.nevjewellery.com/diya-diamond-rose-gold-single-earring-diamond-earrings-nev-jewellery-23091-42-O.webp',
      'https://www.nevjewellery.com/diya-diamond-rose-gold-single-earring-diamond-earrings-nev-jewellery-23102-42-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 11,
    name: 'Eclipse 0.26 CT Sapphire and Diamond Single Earring',
    description: 'Eclipse 0.26 CT Sapphire and Diamond Single Earring',
    price: 335,
    imageUrl: [
      'https://www.nevjewellery.com/eclipse-026-ct-sapphire-and-diamond-single-earring-single-earrings-nev-jewellery-22218-21-O.webp',
      'https://www.nevjewellery.com/eclipse-026-ct-sapphire-and-diamond-single-earring-single-earrings-nev-jewellery-23179-21-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 12,
    name: 'Crimp Black 0.07 CT Black Diamond Mini Single Earring',
    description: 'Crimp Black 0.07 CT Black Diamond Mini Single Earring',
    price: 232,
    imageUrl: [
      'https://www.nevjewellery.com/crimp-black-007-ct-black-diamond-mini-single-earring-single-earrings-nev-jewellery-11526-21-O.jpg',
      'https://www.nevjewellery.com/crimp-black-007-ct-black-diamond-mini-single-earring-single-earrings-nev-jewellery-23178-21-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 13,
    name: ' 0.84 CT Diamond, Ruby and Emerald Long Earring',
    description: ' 0.84 CT Diamond, Ruby and Emerald Long Earring',
    price: 225,
    imageUrl: [
      'https://www.nevjewellery.com/084-ct-diamond-ruby-and-emerald-long-earring-colored-gemstone-earrings-nev-jewellery-6678-20-O.jpg',
      'https://www.nevjewellery.com/084-ct-diamond-ruby-and-emerald-long-earring-colored-gemstone-earrings-nev-jewellery-23155-20-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 14,
    name: 'Lindi 0.14 CT Black Diamond and Multicolor Sapphire Rose Gold Earring',
    description: 'Lindi 0.14 CT Black Diamond and Multicolor Sapphire Rose Gold Earring',
    price: 210,
    imageUrl: [
      'https://www.nevjewellery.com/lindi-014-ct-black-diamond-and-multicolor-sapphire-rose-gold-earring-single-earrings-nev-jewellery-22360-41-O.webp',
      'https://www.nevjewellery.com/lindi-014-ct-black-diamond-and-multicolor-sapphire-rose-gold-earring-single-earrings-nev-jewellery-23196-41-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 15,
    name: '0.14 CT Diamond Rose Gold Single Earring',
    description: '0.14 CT Diamond Rose Gold Single Earring',
    price: 245,
    imageUrl: [
      'https://www.nevjewellery.com/014-ct-diamond-rose-gold-single-earring-diamond-earrings-nev-jewellery-9298-26-O.jpg',
      'https://www.nevjewellery.com/014-ct-diamond-rose-gold-single-earring-diamond-earrings-nev-jewellery-21500-26-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 16,
    name: 'Minimal Moon Rose Gold Single Earring',
    description: 'Minimal Moon Rose Gold Single Earring ',
    price: 185,
    imageUrl: [
      'https://www.nevjewellery.com/minimal-moon-rose-gold-single-earring-gold-earrings-nev-jewellery-13114-19-O.jpg',
      'https://www.nevjewellery.com/minimal-moon-rose-gold-single-earring-gold-earrings-nev-jewellery-4822-19-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  }
]
export const  necklaces: Product[]  = [
  {
    id: 1,
    name: '3.81 CT Sapphire and Diamond White Gold Necklace',
    description: '3.81 CT Sapphire and Diamond White Gold Necklace',
    price: 180,
    imageUrl: [
      'https://nevjewellery.com/381-ct-sapphire-and-diamond-white-gold-necklace-sapphire-necklace-nev-jewellery-22828-25-O.webp',
      'https://nevjewellery.com/381-ct-sapphire-and-diamond-white-gold-necklace-sapphire-necklace-nev-jewellery-12335-25-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 2,
    name: 'Yellow Gold Pole Star Necklace with Turquoise Enamel',
    description: 'Yellow Gold Pole Star Necklace with Turquoise Enamel',
    price: 1720,
    imageUrl: [
      'https://nevjewellery.com/yellow-gold-pole-star-necklace-with-turquoise-enamel-gold-necklace-nev-jewellery-25197-48-O.webp',
      'https://nevjewellery.com/yellow-gold-pole-star-necklace-with-turquoise-enamel-gold-necklace-nev-jewellery-25198-48-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 3,
    name: 'Alida 0.69 CT Emerald and Diamond Yellow Gold Necklace',
    description: 'Alida 0.69 CT Emerald and Diamond Yellow Gold Necklace',
    price: 1200,
    imageUrl: [
      'https://nevjewellery.com/alida-061-ct-emerald-and-diamond-yellow-gold-necklace-emerald-necklace-nev-jewellery-21685-39-B.webp',
      'https://nevjewellery.com/alida-061-ct-emerald-and-diamond-yellow-gold-necklace-emerald-necklace-nev-jewellery-20804-39-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 4,
    name: 'Yellow and White Gold Double-Sided Necklace',
    description: 'Yellow and White Gold Double-Sided Necklace',
    price: 1380,
    imageUrl: [
      'https://nevjewellery.com/white-gold-italian-stud-necklace-gold-necklace-nev-jewellery-25350-48-O.webp',
      'https://nevjewellery.com/white-gold-italian-stud-necklace-gold-necklace-nev-jewellery-25354-48-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 5,
    name: 'Owen 2.55 CT Pear Cut Diamond White Gold Necklace',
    description: 'Owen 2.55 CT Pear Cut Diamond White Gold Necklace',
    price: 4500,
    imageUrl: [
      'https://nevjewellery.com/owen-255-ct-pear-cut-diamond-white-gold-necklace-diamond-pendants-nev-jewellery-17472-34-B.webp',
      'https://nevjewellery.com/owen-255-ct-pear-cut-diamond-white-gold-necklace-diamond-pendants-nev-jewellery-17473-34-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 6,
    name: 'Rita 0.03 CT Baguette Cut Diamond Rose Gold Pendant',
    description: 'Rita 0.03 CT Baguette Cut Diamond Rose Gold Pendant',
    price: 1150,
    imageUrl: [
      'https://nevjewellery.com/rita-003-ct-baguette-cut-diamond-rose-gold-pendant-baguette-cut-diamond-necklace-nev-jewellery-6511-10-B.jpg',
      'https://nevjewellery.com/rita-003-ct-baguette-cut-diamond-rose-gold-pendant-baguette-cut-diamond-necklace-nev-jewellery-6512-10-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 7,
    name: 'Trine Yellow Gold Pendant/Charm',
    description: 'Trine Yellow Gold Pendant/Charm',
    price: 900,
    imageUrl: [
      'https://nevjewellery.com/trine-yellow-gold-pendantcharm-charm-nev-jewellery-24798-46-B.webp',
      'https://nevjewellery.com/trine-yellow-gold-pendantcharm-charm-nev-jewellery-24797-46-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 8,
    name: 'Spica 0.23 CT Diamond and Turquoise Enamel Pendant',
    description: 'Spica 0.23 CT Diamond and Turquoise Enamel Pendant',
    price: 2070,
    imageUrl: [
      'https://nevjewellery.com/spica-023-ct-diamond-and-turquoise-enamel-pendant-diamond-pendants-with-enamel-nev-jewellery-16576-15-B.webp',
      'https://nevjewellery.com/spica-023-ct-diamond-and-turquoise-enamel-pendant-diamond-pendants-with-enamel-nev-jewellery-4433-15-O.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 9,
    name: 'Sophia 0.41 CT Emerald and Diamond Yellow Gold Necklace',
    description: 'Sophia 0.41 CT Emerald and Diamond Yellow Gold Necklace',
    price: 1160,
    imageUrl: [
      'https://nevjewellery.com/sophia-041-ct-emerald-and-diamond-yellow-gold-necklace-emerald-necklace-nev-jewellery-22546-41-B.webp',
      'https://nevjewellery.com/sophia-041-ct-emerald-and-diamond-yellow-gold-necklace-emerald-necklace-nev-jewellery-22548-41-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 10,
    name: 'Perseus 0.52 CT Black Diamond and Baguette Cut Diamond Necklace',
    description: 'Perseus 0.52 CT Black Diamond and Baguette Cut Diamond Necklace',
    price: 1075,
    imageUrl: [
      'https://nevjewellery.com/perseus-052-ct-black-diamond-and-baguette-cut-diamond-necklace-diamond-pendants-nev-jewellery-23239-15-B.webp',
      'https://nevjewellery.com/perseus-052-ct-black-diamond-and-baguette-cut-diamond-necklace-diamond-pendants-nev-jewellery-4349-15-B.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 11,
    name: 'Disco 2.63 CT Diamond Rose Gold Sphere Pendant',
    description: 'Disco 2.63 CT Diamond Rose Gold Sphere Pendant',
    price: 1500,
    imageUrl: [
      'https://nevjewellery.com/disco-263-ct-diamond-rose-gold-sphere-pendant-diamond-pendants-nev-jewellery-23111-23-B.webp',
      'https://nevjewellery.com/disco-263-ct-diamond-rose-gold-sphere-pendant-diamond-pendants-nev-jewellery-21348-23-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 12,
    name: '0.03 CT Baguette Cut Diamond R Letter Rose Gold Necklace',
    description: '0.03 CT Baguette Cut Diamond R Letter Rose Gold Necklace',
    price: 982,
    imageUrl: [
      'https://nevjewellery.com/003-ct-baguette-cut-diamond-r-letter-rose-gold-necklace-alphabet-nev-jewellery-23037-42-B.webp',
      'https://nevjewellery.com/003-ct-baguette-cut-diamond-r-letter-rose-gold-necklace-alphabet-nev-jewellery-23019-42-O.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 13,
    name: 'Sandy 0.34 CT Emerald Rose Gold Necklace',
    description: ' Sandy 0.34 CT Emerald Rose Gold Necklace',
    price: 1425,
    imageUrl: [
      'https://nevjewellery.com/sandy-034-ct-emerald-rose-gold-necklace-emerald-necklace-nev-jewellery-20163-37-B.webp',
      'https://nevjewellery.com/sandy-034-ct-emerald-rose-gold-necklace-emerald-necklace-nev-jewellery-23728-37-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 14,
    name: '2.48 CT Diamond Rose Gold Necklace',
    description: '2.48 CT Diamond Rose Gold Necklace',
    price: 2150,
    imageUrl: [
      'https://nevjewellery.com/280-ct-diamond-rose-gold-necklace-diamond-pendants-nev-jewellery-9249-26-B.jpg',
      'https://nevjewellery.com/280-ct-diamond-rose-gold-necklace-diamond-pendants-nev-jewellery-9250-26-B.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 15,
    name: 'Flanch Yellow Gold Necklace',
    description: 'Flanch Yellow Gold Necklace',
    price: 1270,
    imageUrl: [
      'https://nevjewellery.com/flanch-yellow-gold-necklace-gold-necklace-nev-jewellery-25333-48-B.webp',
      'https://nevjewellery.com/flanch-yellow-gold-necklace-gold-necklace-nev-jewellery-25334-48-B.webp'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 16,
    name: '0.18 CT Diamond and Enamel Rose Gold Necklace',
    description: '0.18 CT Diamond and Enamel Rose Gold Necklace',
    price: 1805,
    imageUrl: [
      'https://nevjewellery.com/0-18-ct-diamond-and-enamel-rose-gold-necklace-diamond-pendants-with-enamel-nev-jewellery-21514-29-B.webp',
      'https://nevjewellery.com/0-18-ct-diamond-and-enamel-rose-gold-necklace-diamond-pendants-with-enamel-nev-jewellery-11774-29-B.jpg'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  }
]
export const  bracelets: Product[]  = [
  {
    id: 1,
    name: 'Mini Heart Pavé Diamond Bracelet',
    description: 'Mini Heart Pavé Diamond Bracelet',
    price: 240,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-14KHEARTS_PaveDiamondHeartBracelet_14K_Stack_046.jpg?v=1720618073&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/3-14KHEARTS_PaveDiamondHeartBracelet_14K_FlatLay_095.jpg?v=1717088342&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 2,
    name: 'Multi Gemstone Station Bracelet',
    description: 'Multi Gemstone Station Bracelet',
    price: 300,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-BIRTHSTONEBRACELETS_BirthstoneBraceletAprilDiamond_14k_Stack_011.jpg?v=1720212392&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-BIRTHSTONEBRACELETS_BirthstoneBraceletAprilDiamond_14k_TopDown_065.jpg?v=1720212392&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 3,
    name: 'Lab Grown Sapphire Tennis Bracelet',
    description: 'Lab Grown Sapphire Tennis Bracelet',
    price: 280,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-LGS3mmBraceletSilver-SS-Stack_00220231103-8314-sqpyfd.png?v=1724173021&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-RESHOOT-LabGrownSapphireTennis_Bracelet-SS-Front_119.jpg?v=1724173013&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 4,
    name: 'Heart Station Bracelet',
    description: 'Heart Station Bracelet',
    price: 700,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-VERMEILBRACELETS_MultiStationBraceletHeartVermeil_V_Stack_019.jpg?v=1720119706&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-VERMEILBRACELETS_MultiStationBraceletHeartVermeil_V_TopDown_033.jpg?v=1720119706&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 5,
    name: 'Multi Gemstone Station Bracelet',
    description: 'Multi Gemstone Station Bracelet',
    price: 410,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/2-BIRTHSTONEBRACELETS_BirthstoneBraceletSeptemberBlueSapphire_14k_Stack2_024.jpg?v=1720212392&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-BIRTHSTONEBRACELETS_BirthstoneBraceletSeptemberBlueSapphire_14k_TopDown_030.jpg?v=1720212392&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 6,
    name: 'Solo Diamond Bracelet',
    description: 'Solo Diamond Bracelet',
    price: 550,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/2-SoloDiamondBracelet-14K-Stack_014.jpg?v=1720127271&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-SoloDiamondBracelet-14K-TopDown_161.jpg?v=1720127271&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 7,
    name: 'Zadie Bezel Lab Grown Sapphire Tennis Bracelet',
    description: 'Zadie Bezel Lab Grown Sapphire Tennis Bracelet',
    price: 390,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-LGSEternityTennisChase_LGSBezelTennisBracelet_V_OffFigureFrontViewTennis-PDP.jpg?v=1736353250&width=800&height=956&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/2-LGSEternityTennisChase_LGSBezelTennisBracelet_V_ArtfulDiamond_PDP.jpg?v=1736353251&width=800&height=956&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 8,
    name: 'Base Chain Convertible Bracelet',
    description: 'Base Chain Convertible Bracelet',
    price: 270,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-MEJURICUSTOMCHAINS-MejuriCustomVermeilChainBracelet-V-Stack1_094.jpg?v=1722973172&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-MEJURICUSTOMCHAINS-MejuriCustomVermeilChainBracelet-V-TopDown_479.jpg?v=1722973172&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 9,
    name: 'Bold Spheres Bracelet',
    description: 'Bold Spheres Bracelet',
    price: 460,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-BoldSpheresBracelet-14K-Stack2_014.jpg?v=1720026881&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-BoldSpheresBracelet-14K-TopDown_027.jpg?v=1720026881&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 10,
    name: 'Patra Diamond Tennis Bracelet',
    description: 'Patra Diamond Tennis Bracelet',
    price: 2205,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-CleoTennisBracelet-14K-Stack_042.jpg?v=1720618113&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-CleoTennisBracelet-14K-TopDown_541.jpg?v=1720618113&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 11,
    name: 'Rectangular Micro-Pavé Diamond Tennis Bracelet',
    description: 'Rectangular Micro-Pavé Diamond Tennis Bracelet',
    price: 1800,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-BaguetteTennisRiviereBracelet-14K-Solo_001.jpg?v=1720205603&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/3-BaguetteTennisRiviereBracelet-14K-DesignMacro_475.jpg?v=1720205603&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 12,
    name: 'Lotus Bracelet',
    description: 'Lotus Bracelet',
    price: 980,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-Evergreen_LotusBracelet_V_Stack_009.jpg?v=1732125486&width=1000&height=1000&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/Lotus_Bracelet_V_Overhead.jpg?v=1720401029&width=1000&height=1000&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 13,
    name: 'Large Square Oval Chain Charm Bracelet',
    description: 'Large Square Oval Chain Charm Bracelet',
    price: 700,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-ENHANCERCHAINS-LargeSquareOvalChainCharmBracelet-14K-Stack_106.jpg?v=1721916632&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-ENHANCERCHAINS-LargeSquareOvalChainCharmBracelet-14K-TopDown_137.jpg?v=1721916630&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 14,
    name: 'Mini Heart Pavé Diamond Bracelet',
    description: 'Mini Heart Pavé Diamond Bracelet',
    price: 240,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/2-BlackDiamonds-MiniHeartBlackDiamondBracelet-14K-Stack1_029.jpg?v=1717088342&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-BLACKDIAMONDS-MiniHeartBlackDiamondBracelet-14K-TopDown_065.jpg?v=1717088342&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 15,
    name: 'Dôme Cuff Bracelet',
    description: 'Dôme Cuff Bracelet',
    price: 320,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1_DomeCuffBracelet_SS_Fair_Solo.jpg?v=1717088212&width=1000&height=1000&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0_DomeCuffBracelet_SS_Hero_Front.jpg?v=1717088212&width=1000&height=1000&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  },
  {
    id: 16,
    name: 'Bezel Lab Grown Diamond Bracelet',
    description: 'Bezel Lab Grown Diamond Bracelet',
    price: 450,
    imageUrl: [
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/1-LABGROWNDIAMONDSBEZEL-LargeSoloDiamondBracelet-14K-Stack_018.jpg?v=1719971652&width=1000&height=1195&crop=center',
      'https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0-LABGROWNDIAMONDSBEZEL-LargeSoloDiamondBracelet-14K-TopDown_444.jpg?v=1719971652&width=1000&height=1195&crop=center'
    ],
    quantity: 0,
    count: 0,
    shipping: 4.90,
    currentImage: "",
    bracelet: undefined
  }
]

