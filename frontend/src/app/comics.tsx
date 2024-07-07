export interface Comic {
        src: string;
        type?: 'video' | 'image';
        alt: string;
}

interface ComicCarousel {
        id: number;
        title?: string;
        comics: Comic[];
        date: string;
}

export const comicCarousels: ComicCarousel[] = [
        {
                id: 1,
                title: "SONGBIRD",
                date: "2020-08-11",
                comics: [
                        { src: '/img/2020-08-11_COMIC_SONGBIRD_1of1.webp', type: 'image', alt: 'SONGBIRD - Paul Thompson' },
                ],
        },
        {
                id: 2,
                title: "SPACE JOKE",
                date: "2024-01-02",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 3,
                title: "THIRD JOKE",
                date: "2024-01-03",
                comics: [
                        { id: 6, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 7, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 4,
                title: "BIG TIME ALBUM",
                date: "2024-01-04",
                comics: [
                        { id: 8, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 9, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 5,
                title: "ONION JOKE",
                date: "2024-01-05",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 6,
                title: "PIZZA JOKE",
                date: "2024-01-06",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 7,
                title: "PICKLE JOKE",
                date: "2024-01-07",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 8,
                title: "RAT JOKE",
                date: "2024-01-08",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 9,
                title: "ET JOKE",
                date: "2024-01-09",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 10,
                title: "MONEY JOKE",
                date: "2024-01-10",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 11,
                title: "IRON JOKE",
                date: "2024-01-11",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        {
                id: 12,
                title: "CAT JOKE",
                date: "2024-01-12",
                comics: [
                        { id: 4, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {id: 5, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        // Add more comics specific to this carousel
                ],
        },
        // Add more carousels as needed
];



export const comicList = [
        {id: 1, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'test'},
        {id: 2, src: '/video/test.mp4', type: 'video', alt: 'test'},
        {id: 3, src: '/video/joustDemo.webm', type: 'video', alt: 'test'},
        // Add more items as needed
]

