export const SliderImages= [
    { id:1, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/345/1-5-en.png?1699346039', alt: 'slider1'},
    { id:2, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/344/7-4-en.png?1710941122', alt: 'slider2'},
    { id:3, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/349/p-rlanta-3-en.jpg?1701170598', alt: 'slider3'},
    { id:4, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/349/6-pirlanta-bileklikler-4-en.jpg?1701170631', alt: 'slider4'},
    
];

export interface SliderImages{
    id: number;
    src: string;
    alt: string;
}


export const DiscountSliderImages = [
    {id:1, src:'https://nevjewellery.com/Data/EditorFiles/anasayfa-gorsel/bilezik_bileklik.jpg', alt:'discount1'},
    {id:2, src:'https://nevjewellery.com/Data/EditorFiles/anasayfa-gorsel/kolye.jpg', alt:'discount2'},
    {id:3, src:'', alt:'discount3'},
    
]

export interface DiscountSliderImages{
    id:number;
    src: string,
    alt: string,
}