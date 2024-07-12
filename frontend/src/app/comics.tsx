export interface Comic {
        src: string;
        type?: 'video' | 'image';
        alt: string;
}

export interface ComicCarousel {
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
                title: "GYM BUDDY",
                date: "8-18-20",
                comics: [
                        { src: '/img/2020-08-18_COMIC_GYM-BUDDY_1of1.webp', alt: 'GYM BUDDY - Paul Thompson' },
                ],
        },
        {
                id: 9,
                title: "THE TRUTH",
                date: "8-19-20",
                comics: [
                        { src: '/img/2020-08-19_COMIC_THE-TRUTH_1of1.webp', alt: 'THE TRUTH - Paul Thompson' },
                ],
        },
        {
                id: 10,
                title: "KICKBALL",
                date: "8-20-20",
                comics: [
                        { src: '/img/2020-08-20_COMIC_KICKBALL_1of1.webp', alt: 'KICKBALL - Paul Thompson' },
                ],
        },
        {
                id: 11,
                title: "RED ROCKET",
                date: "8-21-20",
                comics: [
                        { src: '/img/2020-08-21_COMIC_RED-ROCKET_1of1.webp', alt: 'RED ROCKET - Paul Thompson' },
                ],
        },
        {
                id: 12,
                title: "SENSEI",
                date: "8-22-20",
                comics: [
                        { src: '/img/2020-08-22_COMIC_SENSEI_1of1.webp', alt: 'SENSEI - Paul Thompson' },
                ],
        },
        {
                id: 13,
                title: "HYDRATION",
                date: "8-23-20",
                comics: [
                        { src: '/img/2020-08-23_COMIC_HYDRATION_1of1.webp', alt: 'HYDRATION - Paul Thompson' },
                ],
        },
        {
                id: 14,
                title: "SUPPRESSION",
                date: "8-24-20",
                comics: [
                        { src: '/img/2020-08-24_COMIC_SUPPRESSION_1of1.webp', alt: 'SUPPRESSION - Paul Thompson' },
                ],
        },
        {
                id: 15,
                title: "BIGFOOT",
                date: "8-25-20",
                comics: [
                        { src: '/img/2020-08-25_COMIC_BIGFOOT_1of1.webp', alt: 'BIGFOOT - Paul Thompson' },
                ],
        },
        {
                id: 16,
                title: "HAIRCUT",
                date: "8-26-20",
                comics: [
                        { src: '/img/2020-08-26_COMIC_HAIRCUT_1of1.webp', alt: 'HAIRCUT - Paul Thompson' },
                ],
        },
        {
                id: 17,
                title: "SLOW",
                date: "8-27-20",
                comics: [
                        { src: '/img/2020-08-27_COMIC_SLOW_1of1.webp', alt: 'SLOW - Paul Thompson' },
                ],
        },
        {
                id: 18,
                title: "CAMOFLAUGE",
                date: "8-28-20",
                comics: [
                        { src: '/img/2020-08-28_COMIC_CAMOFLAUGE_1of1.webp', alt: 'CAMOFLAUGE - Paul Thompson' },
                ],
        },
        {
                id: 19,
                title: "ONE OF US",
                date: "8-29-20",
                comics: [
                        { src: '/img/2020-08-29_COMIC_ONE-OF-US_1of1.webp', alt: 'ONE OF US - Paul Thompson' },
                ],
        },
        {
                id: 20,
                title: "JUDGES",
                date: "8-30-20",
                comics: [
                        { src: '/img/2020-08-30_COMIC_JUDGES_1of1.webp', alt: 'JUDGES - Paul Thompson' },
                ],
        },
        {
                id: 21,
                title: "JUNGLE KING",
                date: "8-31-20",
                comics: [
                        { src: '/img/2020-08-31_COMIC_JUNGLE-KING_1of1.webp', alt: 'JUNGLE KING - Paul Thompson' },
                ],
        },
        {
                id: 22,
                title: "BIG THINKERS",
                date: "9-1-20",
                comics: [
                        { src: '/img/2020-09-01_COMIC_BIG-THINKERS_1of1.webp', alt: 'BIG THINKERS - Paul Thompson' },
                ],
        },
        {
                id: 23,
                title: "CONDIMENTS",
                date: "9-2-20",
                comics: [
                        { src: '/img/2020-09-02_COMIC_CONDIMENTS_1of1.webp', alt: 'CONDIMENTS - Paul Thompson' },
                ],
        },
        {
                id: 24,
                title: "TIE",
                date: "9-3-20",
                comics: [
                        { src: '/img/2020-09-03_COMIC_TIE_1of1.webp', alt: 'TIE - Paul Thompson' },
                ],
        },
        {
                id: 25,
                title: "SOFT BREAD",
                date: "9-4-20",
                comics: [
                        { src: '/img/2020-09-04_COMIC_SOFT-BREAD_1of1.webp', alt: 'SOFT BREAD - Paul Thompson' },
                ],
        },
        {
                id: 26,
                title: "STAND TALL",
                date: "9-5-20",
                comics: [
                        { src: '/img/2020-09-05_COMIC_STAND-TALL_1of1.webp', alt: 'STAND TALL - Paul Thompson' },
                ],
        },
        {
                id: 27,
                title: "WASH UP",
                date: "9-6-20",
                comics: [
                        { src: '/img/2020-09-06_COMIC_WASH-UP_1of1.webp', alt: 'WASH UP - Paul Thompson' },
                ],
        }
]


// {
//         id: 12,
//             title: "CAT JOKE",
//     date: "2024-01-12",
//     comics: [
//         { src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'Comic 1' },
//         {src: '/video/test.mp4', type: 'video', alt: 'test'},
// ],
// },



export const comicList = [
        {id: 1, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'test'},
        {id: 2, src: '/video/test.mp4', type: 'video', alt: 'test'},
        {id: 3, src: '/video/joustDemo.webm', type: 'video', alt: 'test'},
        // Add more items as needed
]

