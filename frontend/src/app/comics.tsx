export interface Comic {
        id: number;
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
                title: "EARTH JOKE",
                date: "2024-01-01",
                comics: [
                        {id: 1, src: '/video/test.mp4', type: 'video', alt: 'test'},
                        { id: 2, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', type: 'image', alt: 'Comic 2' },
                        { id: 3, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', type: 'image', alt: 'Comic 2' },
                        // Add more comics specific to this carousel
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
        // Add more carousels as needed
];



export const comicList = [
        {id: 1, src: 'https://live.staticflickr.com/65535/53833912428_178cdf9a42_k.jpg', alt: 'test'},
        {id: 2, src: '/video/test.mp4', type: 'video', alt: 'test'},
        {id: 3, src: '/video/joustDemo.webm', type: 'video', alt: 'test'},
        // Add more items as needed
]