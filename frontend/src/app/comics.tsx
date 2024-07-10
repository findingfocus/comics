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
                date: "8-11-20",
                comics: [
                        { src: '/img/2020-08-11_COMIC_SONGBIRD_1of1.webp', type: 'image', alt: 'SONGBIRD - Paul Thompson' },
                ],
        },
        {
                id: 2,
                title: "PIGSTY",
                date: "8-12-20",
                comics: [
                        { src: '/img/2020-08-12_COMIC_PIGSTY_1of1.webp', type: 'image', alt: 'PIGSTY - Paul Thompson' },
                ],
        },
        {
                id: 3,
                title: "GROUCHO",
                date: "8-13-20",
                comics: [
                        { src: '/img/2020-08-13_COMIC_GROUCHO_1of1.webp', alt: 'GROUCHO - Paul Thompson' },
                ],
        },
        {
                id: 4,
                title: "BEAN THERE",
                date: "8-14-20",
                comics: [
                        { src: '/img/2020-08-14_COMIC_BEAN-THERE_1of1.webp', alt: 'BEAN THERE - Paul Thompson' },
                ],
        },
        {
                id: 5,
                title: "FASHION SENSE",
                date: "8-15-20",
                comics: [
                        { src: '/img/2020-08-15_COMIC_FASHION-SENSE_1of1.webp', alt: 'FASHION SENSE - Paul Thompson' },
                ],
        },
        {
                id: 6,
                title: "GESUNDHEIT",
                date: "8-16-20",
                comics: [
                        { src: '/img/2020-08-16_COMIC_GESUNDHEIT_1of1.webp', alt: 'GESUNDHEIT - Paul Thompson' },
                ],
        },
        {
                id: 7,
                title: "GAME THEORY",
                date: "8-17-20",
                comics: [
                        { src: '/img/2020-08-17_COMIC_GAME-THEORY_1of1.webp', alt: 'GAME THEORY - Paul Thompson' },
                ],
        },
        {
                id: 8,
                title: "RAT JOKE",
                date: "2024-01-08",
                comics: [
                        { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        { src: '/video/test.mp4', type: 'video', alt: 'test'},
                ],
        },
        {
                id: 9,
                title: "ET JOKE",
                date: "2024-01-09",
                comics: [
                        { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        { src: '/video/test.mp4', type: 'video', alt: 'test'},
                ],
        },
        {
                id: 10,
                title: "MONEY JOKE",
                date: "2024-01-10",
                comics: [
                        { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        { src: '/video/test.mp4', type: 'video', alt: 'test'},
                ],
        },
        {
                id: 11,
                title: "IRON JOKE",
                date: "2024-01-11",
                comics: [
                        { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        { src: '/video/test.mp4', type: 'video', alt: 'test'},
                ],
        },
        {
                id: 12,
                title: "CAT JOKE",
                date: "2024-01-12",
                comics: [
                        { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
                        {src: '/video/test.mp4', type: 'video', alt: 'test'},
                ],
        },
];



export const comicList = [
        {id: 1, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'test'},
        {id: 2, src: '/video/test.mp4', type: 'video', alt: 'test'},
        {id: 3, src: '/video/joustDemo.webm', type: 'video', alt: 'test'},
        // Add more items as needed
]

