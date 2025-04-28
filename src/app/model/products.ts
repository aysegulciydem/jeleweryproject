

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
      name: '4.95 CT Baguette Cut Diamond Rose Gold Ring',
      description: '4.95 CT Baguette Cut Diamond Rose Gold Ring',
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
    name: '4.95 CT Baguette Cut Diamond Rose Gold Ring',
    description: '4.95 CT Baguette Cut Diamond Rose Gold Ring',
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
