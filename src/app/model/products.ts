

export interface  Product {
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
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
      currentImage: ""
    }
]


export interface  ProductEarring {
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

export const  productEarring: ProductEarring[] = [
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
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
    currentImage: ""
  }
]
