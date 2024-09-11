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
                title: "TIE-DYE",
                date: "9-3-20",
                comics: [
                        { src: '/img/2020-09-03_COMIC_TIE-DYE_1of1.webp', alt: 'TIE - Paul Thompson' },
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
        },
        {
                id: 28,
                title: "INSOLENCE",
                date: "9-7-20",
                comics: [
                        { src: '/img/2020-09-07_COMIC_INSOLENCE_1of1.webp', alt: 'INSOLENCE - Paul Thompson' },
                ],
        },
        {
                id: 29,
                title: "EFFORT",
                date: "9-8-20",
                comics: [
                        { src: '/img/2020-09-08_COMIC_EFFORT_1of1.webp', alt: 'EFFORT - Paul Thompson' },
                ],
        },
        {
                id: 30,
                title: "FELON",
                date: "9-9-20",
                comics: [
                        { src: '/img/2020-09-09_COMIC_FELON_1of1.webp', alt: 'FELON - Paul Thompson' },
                ],
        },
        {
                id: 31,
                title: "BRAINS",
                date: "9-10-20",
                comics: [
                        { src: '/img/2020-09-10_COMIC_BRAINS_1of1.webp', alt: 'BRAINS - Paul Thompson' },
                ],
        },
        {
                id: 32,
                title: "TRIGGERS",
                date: "9-11-20",
                comics: [
                        { src: '/img/2020-09-11_COMIC_TRIGGERS_1of1.webp', alt: 'TRIGGERS - Paul Thompson' },
                ],
        },
        {
                id: 33,
                title: "THE BEAR",
                date: "9-12-20",
                comics: [
                        { src: '/img/2020-09-12_COMIC_THE-BEAR_1of1.webp', alt: 'THE BEAR - Paul Thompson' },
                ],
        },
        {
                id: 34,
                title: "HARD TIMES",
                date: "9-13-20",
                comics: [
                        { src: '/img/2020-09-13_COMIC_HARD-TIMES_1of1.webp', alt: 'HARD TIMES - Paul Thompson' },
                ],
        },
        {
                id: 35,
                title: "GO FISH",
                date: "9-14-20",
                comics: [
                        { src: '/img/2020-09-14_COMIC_GO-FISH_1of1.webp', alt: 'GO FISH - Paul Thompson' },
                ],
        },
        {
                id: 36,
                title: "FAMILY",
                date: "9-15-20",
                comics: [
                        { src: '/img/2020-09-15_COMIC_FAMILY_1of1.webp', alt: 'FAMILY - Paul Thompson' },
                ],
        },
        {
                id: 37,
                title: "BADA-BOOM",
                date: "9-16-20",
                comics: [
                        { src: '/img/2020-09-16_COMIC_BADA-BOOM_1of1.webp', alt: 'BADA-BOOM - Paul Thompson' },
                ],
        },
        {
                id: 38,
                title: "SPEAK",
                date: "9-17-20",
                comics: [
                        { src: '/img/2020-09-17_COMIC_SPEAK_1of1.webp', alt: 'SPEAK - Paul Thompson' },
                ],
        },
        {
                id: 39,
                title: "DUMPSTER",
                date: "9-18-20",
                comics: [
                        { src: '/img/2020-09-18_COMIC_DUMPSTER_1of1.webp', alt: 'DUMPSTER - Paul Thompson' },
                ],
        },
        {
                id: 40,
                title: "SOARING",
                date: "9-19-20",
                comics: [
                        { src: '/img/2020-09-19_COMIC_SOARING_1of1.webp', alt: 'SOARING - Paul Thompson' },
                ],
        },
        {
                id: 41,
                title: "POOL PARTY",
                date: "9-20-20",
                comics: [
                        { src: '/img/2020-09-20_COMIC_POOL-PARTY_1of1.webp', alt: 'POOL PARTY - Paul Thompson' },
                ],
        },
        {
                id: 42,
                title: "TIPPING",
                date: "9-21-20",
                comics: [
                        { src: '/img/2020-09-21_COMIC_TIPPING_1of1.webp', alt: 'TIPPING - Paul Thompson' },
                ],
        },
        {
                id: 43,
                title: "IN CASE",
                date: "9-22-20",
                comics: [
                        { src: '/img/2020-09-22_COMIC_IN-CASE_1of1.webp', alt: 'IN CASE - Paul Thompson' },
                ],
        },
        {
                id: 44,
                title: "SLEEPING",
                date: "9-23-20",
                comics: [
                        { src: '/img/2020-09-23_COMIC_SLEEPING_1of1.webp', alt: 'SLEEPING - Paul Thompson' },
                ],
        },
        {
                id: 45,
                title: "EYE EXAM",
                date: "9-24-20",
                comics: [
                        { src: '/img/2020-09-24_COMIC_EYE-EXAM_1of1.webp', alt: 'EYE EXAM - Paul Thompson' },
                ],
        },
        {
                id: 46,
                title: "ROAD RAGE",
                date: "9-25-20",
                comics: [
                        { src: '/img/2020-09-25_COMIC_ROAD-RAGE_1of1.webp', alt: 'ROAD RAGE - Paul Thompson' },
                ],
        },
        {
                id: 47,
                title: "BELLIES",
                date: "9-26-20",
                comics: [
                        { src: '/img/2020-09-26_COMIC_BELLIES_1of1.webp', alt: 'BELLIES - Paul Thompson' },
                ],
        },
        {
                id: 48,
                title: "COLUMN",
                date: "9-27-20",
                comics: [
                        { src: '/img/2020-09-27_COMIC_COLUMN_1of1.webp', alt: 'COLUMN - Paul Thompson' },
                ],
        },
        {
                id: 49,
                title: "SLICED",
                date: "9-28-20",
                comics: [
                        { src: '/img/2020-09-28_COMIC_SLICED_1of1.webp', alt: 'SLICED - Paul Thompson' },
                ],
        },
        {
                id: 50,
                title: "MOVING DAY",
                date: "9-29-20",
                comics: [
                        { src: '/img/2020-09-29_COMIC_MOVING-DAY_1of1.webp', alt: 'MOVING DAY - Paul Thompson' },
                ],
        },
        {
                id: 51,
                title: "FEEDING",
                date: "9-30-20",
                comics: [
                        { src: '/img/2020-09-30_COMIC_FEEDING_1of1.webp', alt: 'FEEDING - Paul Thompson' },
                ],
        },
        {
                id: 52,
                title: "SHATTERED",
                date: "10-1-20",
                comics: [
                        { src: '/img/2020-10-01_COMIC_SHATTERED_1of1.webp', alt: 'SHATTERED - Paul Thompson' },
                ],
        },
        {
                id: 53,
                title: "SUPERPOWER",
                date: "10-2-20",
                comics: [
                        { src: '/img/2020-10-02_COMIC_SUPERPOWER_1of1.webp', alt: 'SUPERPOWER - Paul Thompson' },
                ],
        },
        {
                id: 54,
                title: "2D",
                date: "10-3-20",
                comics: [
                        { src: '/img/2020-10-03_COMIC_2D_1of1.webp', alt: '2D - Paul Thompson' },
                ],
        },
        {
                id: 55,
                title: "HALLOWEEN",
                date: "10-4-20",
                comics: [
                        { src: '/img/2020-10-04_COMIC_HALLOWEEN_1of1.webp', alt: 'HALLOWEEN - Paul Thompson' },
                ],
        },
        {
                id: 56,
                title: "IN THE RAIN",
                date: "10-5-20",
                comics: [
                        { src: '/img/2020-10-05_COMIC_IN-THE-RAIN_1of1.webp', alt: 'IN THE RAIN - Paul Thompson' },
                ],
        },
        {
                id: 57,
                title: "ROACH",
                date: "10-6-20",
                comics: [
                        { src: '/img/2020-10-06_COMIC_ROACH_1of1.webp', alt: 'ROACH - Paul Thompson' },
                ],
        },
        {
                id: 58,
                title: "RUNNING",
                date: "10-7-20",
                comics: [
                        { src: '/img/2020-10-07_COMIC_RUNNING_1of1.webp', alt: 'RUNNING - Paul Thompson' },
                ],
        },
        {
                id: 59,
                title: "RECIPE",
                date: "10-8-20",
                comics: [
                        { src: '/img/2020-10-08_COMIC_RECIPE_1of1.webp', alt: 'RECIPE - Paul Thompson' },
                ],
        },
        {
                id: 60,
                title: "BOWLING",
                date: "10-9-20",
                comics: [
                        { src: '/img/2020-10-09_COMIC_BOWLING_1of1.webp', alt: 'BOWLING - Paul Thompson' },
                ],
        },
        {
                id: 61,
                title: "MAGNIFY",
                date: "10-10-20",
                comics: [
                        { src: '/img/2020-10-10_COMIC_MAGNIFY_1of1.webp', alt: 'MAGNIFY - Paul Thompson' },
                ],
        },
        {
                id: 62,
                title: "AS ABOVE",
                date: "10-11-20",
                comics: [
                        { src: '/img/2020-10-11_COMIC_AS-ABOVE_1of1.webp', alt: 'AS ABOVE - Paul Thompson' },
                ],
        },
        {
                id: 63,
                title: "LOSING IT",
                date: "10-12-20",
                comics: [
                        { src: '/img/2020-10-12_COMIC_LOSING-IT_1of1.webp', alt: 'LOSING IT - Paul Thompson' },
                ],
        },
        {
                id: 64,
                title: "90 DEGREES",
                date: "10-13-20",
                comics: [
                        { src: '/img/2020-10-13_COMIC_90-DEGREES_1of1.webp', alt: '90 DEGREES - Paul Thompson' },
                ],
        },
        {
                id: 65,
                title: "SHERLOCK",
                date: "10-14-20",
                comics: [
                        { src: '/img/2020-10-14_COMIC_SHERLOCK_1of1.webp', alt: 'SHERLOCK - Paul Thompson' },
                ],
        },
        {
                id: 66,
                title: "ABSTRACTION",
                date: "10-15-20",
                comics: [
                        { src: '/img/2020-10-15_COMIC_ABSTRACTION_1of1.webp', alt: 'ABSTRACTION - Paul Thompson' },
                ],
        },
        {
                id: 67,
                title: "OCCUPIED",
                date: "10-16-20",
                comics: [
                        { src: '/img/2020-10-16_COMIC_OCCUPIED_1of1.webp', alt: 'OCCUPIED - Paul Thompson' },
                ],
        },
        {
                id: 68,
                title: "WEDDING",
                date: "10-17-20",
                comics: [
                        { src: '/img/2020-10-17_COMIC_WEDDING_1of1.webp', alt: 'WEDDING - Paul Thompson' },
                ],
        },
        {
                id: 69,
                title: "FOLLOW ME",
                date: "10-18-20",
                comics: [
                        { src: '/img/2020-10-18_COMIC_FOLLOW-ME_1of1.webp', alt: 'FOLLOW ME - Paul Thompson' },
                ],
        },
        {
                id: 70,
                title: "DIP IT",
                date: "10-19-20",
                comics: [
                        { src: '/img/2020-10-19_COMIC_DIP-IT_1of1.webp', alt: 'DIP IT - Paul Thompson' },
                ],
        },
        {
                id: 71,
                title: "LOSER",
                date: "10-20-20",
                comics: [
                        { src: '/img/2020-10-20_COMIC_LOSER_1of1.webp', alt: 'LOSER - Paul Thompson' },
                ],
        },
        {
                id: 72,
                title: "WATERMELON",
                date: "10-21-20",
                comics: [
                        { src: '/img/2020-10-21_COMIC_WATERMELON_1of1.webp', alt: 'WATERMELON - Paul Thompson' },
                ],
        },
        {
                id: 73,
                title: "ROLLING",
                date: "10-22-20",
                comics: [
                        { src: '/img/2020-10-22_COMIC_ROLLING_1of1.webp', alt: 'ROLLING - Paul Thompson' },
                ],
        },
        {
                id: 74,
                title: "JEOPARDY",
                date: "10-23-20",
                comics: [
                        { src: '/img/2020-10-23_COMIC_JEOPARDY_1of1.webp', alt: 'JEOPARDY - Paul Thompson' },
                ],
        },
        {
                id: 75,
                title: "PAINTING",
                date: "10-24-20",
                comics: [
                        { src: '/img/2020-10-24_COMIC_PAINTING_1of1.webp', alt: 'PAINTING - Paul Thompson' },
                ],
        },
        {
                id: 76,
                title: "FARMBOYS",
                date: "10-25-20",
                comics: [
                        { src: '/img/2020-10-25_COMIC_FARMBOYS_1of1.webp', alt: 'FARMBOYS - Paul Thompson' },
                ],
        },
        {
                id: 77,
                title: "FIAT",
                date: "10-26-20",
                comics: [
                        { src: '/img/2020-10-26_COMIC_FIAT_1of1.webp', alt: 'FIAT - Paul Thompson' },
                ],
        },
        {
                id: 78,
                title: "BUSINESS MAN",
                date: "10-27-20",
                comics: [
                        { src: '/img/2020-10-27_COMIC_BUSINESS-MAN_1of1.webp', alt: 'BUSINESS MAN - Paul Thompson' },
                ],
        },
        {
                id: 79,
                title: "SIMON SAYS",
                date: "10-28-20",
                comics: [
                        { src: '/img/2020-10-28_COMIC_SIMON-SAYS_1of1.webp', alt: 'SIMON SAYS - Paul Thompson' },
                ],
        },
        {
                id: 80,
                title: "SLOPPY",
                date: "10-29-20",
                comics: [
                        { src: '/img/2020-10-29_COMIC_SLOPPY_1of1.webp', alt: 'SLOPPY - Paul Thompson' },
                ],
        },
        {
                id: 81,
                title: "DETECTIVE",
                date: "10-30-20",
                comics: [
                        { src: '/img/2020-10-30_COMIC_DETECTIVE_1of1.webp', alt: 'DETECTIVE - Paul Thompson' },
                ],
        },
        {
                id: 82,
                title: "DINNER PARTY",
                date: "10-31-20",
                comics: [
                        { src: '/img/2020-10-31_COMIC_DINNER-PARTY_1of1.webp', alt: 'DINNER-PARTY - Paul Thompson' },
                ],
        },
        {
                id: 83,
                title: "HARDWARE",
                date: "11-1-20",
                comics: [
                        { src: '/img/2020-11-01_COMIC_HARDWARE_1of1.webp', alt: 'HARDWARE - Paul Thompson' },
                ],
        },
        {
                id: 84,
                title: "KRUNCHIES",
                date: "11-2-20",
                comics: [
                        { src: '/img/2020-11-02_COMIC_KRUNCHIES_1of1.webp', alt: 'KRUNCHIES - Paul Thompson' },
                ],
        },
        {
                id: 85,
                title: "PERMANENCE",
                date: "11-3-20",
                comics: [
                        { src: '/img/2020-11-03_COMIC_PERMANENCE_1of1.webp', alt: 'PERMANENCE - Paul Thompson' },
                ],
        },
        {
                id: 86,
                title: "REPORT CARD",
                date: "11-4-20",
                comics: [
                        { src: '/img/2020-11-04_COMIC_REPORT-CARD_1of1.webp', alt: 'REPORT CARD - Paul Thompson' },
                ],
        },
        {
                id: 87,
                title: "REGURGITATE",
                date: "11-5-20",
                comics: [
                        { src: '/img/2020-11-05_COMIC_REGURGITATE_1of1.webp', alt: 'REGURGITATE - Paul Thompson' },
                ],
        },
        {
                id: 88,
                title: "GO LONG",
                date: "11-6-20",
                comics: [
                        { src: '/img/2020-11-06_COMIC_GO-LONG_1of1.webp', alt: 'GO LONG - Paul Thompson' },
                ],
        },
        {
                id: 89,
                title: "DRINK HOLDERS",
                date: "11-7-20",
                comics: [
                        { src: '/img/2020-11-07_COMIC_DRINK-HOLDERS_1of1.webp', alt: 'DRINK HOLDERS - Paul Thompson' },
                ],
        },
        {
                id: 90,
                title: "MUSTACHE",
                date: "11-8-20",
                comics: [
                        { src: '/img/2020-11-08_COMIC_MUSTACHE_1of1.webp', alt: 'MUSTACHE - Paul Thompson' },
                ],
        },
        {
                id: 91,
                title: "FAILURE",
                date: "11-9-20",
                comics: [
                        { src: '/img/2020-11-09_COMIC_FAILURE_1of1.webp', alt: 'FAILURE - Paul Thompson' },
                ],
        },
        {
                id: 92,
                title: "RIPOFF",
                date: "11-10-20",
                comics: [
                        { src: '/img/2020-11-10_COMIC_RIPOFF_1of1.webp', alt: 'RIPOFF - Paul Thompson' },
                ],
        },
        {
                id: 93,
                title: "ALAKAZAM",
                date: "11-11-20",
                comics: [
                        { src: '/img/2020-11-11_COMIC_ALAKAZAM_1of1.webp', alt: 'ALAKAZAM - Paul Thompson' },
                ],
        },
        {
                id: 94,
                title: "DRAW",
                date: "11-12-20",
                comics: [
                        { src: '/img/2020-11-12_COMIC_DRAW_1of1.webp', alt: 'DRAW - Paul Thompson' },
                ],
        },
        {
                id: 95,
                title: "PLAY DEAD",
                date: "11-13-20",
                comics: [
                        { src: '/img/2020-11-13_COMIC_PLAY-DEAD_1of1.webp', alt: 'PLAY DEAD - Paul Thompson' },
                ],
        },
        {
                id: 96,
                title: "CYMBALS",
                date: "11-14-20",
                comics: [
                        { src: '/img/2020-11-14_COMIC_CYMBALS_1of1.webp', alt: 'CYMBALS - Paul Thompson' },
                ],
        },
        {
                id: 96,
                title: "JELLO",
                date: "11-15-20",
                comics: [
                        { src: '/img/2020-11-15_COMIC_JELLO_1of1.webp', alt: 'JELLO - Paul Thompson' },
                ],
        },
        {
                id: 97,
                title: "SOCKS",
                date: "11-16-20",
                comics: [
                        { src: '/img/2020-11-16_COMIC_SOCKS_1of1.webp', alt: 'SOCKS - Paul Thompson' },
                ],
        },
        {
                id: 98,
                title: "BLAME",
                date: "11-17-20",
                comics: [
                        { src: '/img/2020-11-17_COMIC_BLAME_1of1.webp', alt: 'BLAME - Paul Thompson' },
                ],
        },
        {
                id: 99,
                title: "WET PIZZA",
                date: "11-18-20",
                comics: [
                        { src: '/img/2020-11-18_COMIC_WET-PIZZA_1of1.webp', alt: 'WET PIZZA - Paul Thompson' },
                ],
        },
        {
                id: 100,
                title: "GUILT",
                date: "11-19-20",
                comics: [
                        { src: '/img/2020-11-19_COMIC_GUILT_1of1.webp', alt: 'GUILT - Paul Thompson' },
                ],
        },
        {
                id: 101,
                title: "NICE SLICE",
                date: "11-20-20",
                comics: [
                        { src: '/img/2020-11-20_COMIC_NICE-SLICE_1of1.webp', alt: 'NICE SLICE - Paul Thompson' },
                ],
        },
        {
                id: 102,
                title: "COLD SOUP",
                date: "11-21-20",
                comics: [
                        { src: '/img/2020-11-21_COMIC_COLD-SOUP_1of1.webp', alt: 'COLD SOUP - Paul Thompson' },
                ],
        },
        {
                id: 103,
                title: "MASTERPIECE",
                date: "11-22-20",
                comics: [
                        { src: '/img/2020-11-22_COMIC_MASTERPIECE_1of1.webp', alt: 'MASTERPIECE - Paul Thompson' },
                ],
        },
        {
                id: 104,
                title: "CHILE",
                date: "11-23-20",
                comics: [
                        { src: '/img/2020-11-23_COMIC_CHILE_1of1.webp', alt: 'CHILE - Paul Thompson' },
                ],
        },
        {
                id: 105,
                title: "WITCH",
                date: "11-24-20",
                comics: [
                        { src: '/img/2020-11-24_COMIC_WITCH_1of1.webp', alt: 'WITCH - Paul Thompson' },
                ],
        },
        {
                id: 106,
                title: "STAY SAFE",
                date: "11-25-20",
                comics: [
                        { src: '/img/2020-11-25_COMIC_STAY-SAFE_1of1.webp', alt: 'STAY SAFE - Paul Thompson' },
                ],
        },
        {
                id: 107,
                title: "HAIKU",
                date: "11-26-20",
                comics: [
                        { src: '/img/2020-11-26_COMIC_HAIKU_1of1.webp', alt: 'HAIKU - Paul Thompson' },
                ],
        },
        {
                id: 108,
                title: "MASKING",
                date: "11-27-20",
                comics: [
                        { src: '/img/2020-11-27_COMIC_MASKING_1of1.webp', alt: 'MASK UP - Paul Thompson' },
                ],

        },
        {
                id: 109,
                title: "LOUD",
                date: "11-28-20",
                comics: [
                        { src: '/img/2020-11-28_COMIC_LOUD_1of1.webp', alt: 'LOUD - Paul Thompson' },
                ],
        },
        {
                id: 110,
                title: "JAMMED",
                date: "11-29-20",
                comics: [
                        { src: '/img/2020-11-29_COMIC_JAMMED_1of1.webp', alt: 'JAMMED - Paul Thompson' },
                ],
        },
        {
                id: 111,
                title: "STICKERS",
                date: "11-30-20",
                comics: [
                        { src: '/img/2020-11-30_COMIC_STICKERS_1of1.webp', alt: 'STICKERS - Paul Thompson' },
                ],
        },
        {
                id: 112,
                title: "BED WORK",
                date: "12-1-20",
                comics: [
                        { src: '/img/2020-12-01_COMIC_BED-WORK_1of2.webp', alt: 'BED WORK - Paul Thompson' },
                        { src: '/img/2020-12-01_COMIC_BED-WORK_2of2.webp', alt: 'BED WORK - Paul Thompson' },
                ],
        },
        {
                id: 113,
                title: "BITTER SOUP",
                date: "12-2-20",
                comics: [
                        { src: '/img/2020-12-02_COMIC_BITTER-SOUP_1of2.webp', alt: 'COOK BOOK - Paul Thompson' },
                        { src: '/img/2020-12-02_COMIC_BITTER-SOUP_2of2.webp', alt: 'COOK BOOK - Paul Thompson' },
                ],
        },
        {
                id: 114,
                title: "PADDLE",
                date: "12-3-20",
                comics: [
                        { src: '/img/2020-12-03_COMIC_PADDLE_1of3.webp', alt: 'PADDLE - Paul Thompson' },
                        { src: '/img/2020-12-03_COMIC_PADDLE_2of3.webp', alt: 'PADDLE - Paul Thompson' },
                        { src: '/img/2020-12-03_COMIC_PADDLE_3of3.webp', alt: 'PADDLE - Paul Thompson' },
                ],
        },
        {
                id: 115,
                title: "CORRUPT",
                date: "12-4-20",
                comics: [
                        { src: '/img/2020-12-04_COMIC_CORRUPT_1of1.webp', alt: 'CORRUPT - Paul Thompson' },
                ],
        },
        {
                id: 116,
                title: "HUFFHINES",
                date: "12-5-20",
                comics: [
                        { src: '/img/2020-12-05_COMIC_HUFFHINES_1of1.webp', alt: 'HUFFHINES - Paul Thompson' },
                ],
        },
        {
                id: 117,
                title: "SAN",
                date: "12-6-20",
                comics: [
                        { src: '/img/2020-12-06_COMIC_SAN_1of1.webp', alt: 'SAN - Paul Thompson' },
                ],
        },
        {
                id: 118,
                title: "YAKUL",
                date: "12-7-20",
                comics: [
                        { src: '/img/2020-12-07_COMIC_YAKUL_1of1.webp', alt: 'YAKUL - Paul Thompson' },
                ],
        },
        {
                id: 119,
                title: "ASHITAKA",
                date: "12-8-20",
                comics: [
                        { src: '/img/2020-12-08_COMIC_ASHITAKA_1of1.webp', alt: 'ASHITAKA - Paul Thompson' },
                ],
        },
        {
                id: 120,
                title: "HOT WATER",
                date: "12-9-20",
                comics: [
                        { src: '/img/2020-12-09_COMIC_HOT-WATER_1of2.webp', alt: 'HOT-WATER - Paul Thompson' },
                        { src: '/img/2020-12-09_COMIC_HOT-WATER_2of2.webp', alt: 'HOT-WATER - Paul Thompson' },
                ],
        },
        {
                id: 121,
                title: "HYDRANT",
                date: "12-10-20",
                comics: [
                        { src: '/img/2020-12-10_COMIC_HYDRANT_1of1.webp', alt: 'HYDRANT - Paul Thompson' },
                ],
        },
        {
                id: 122,
                title: "GRADUATED",
                date: "12-11-20",
                comics: [
                        { src: '/img/2020-12-11_COMIC_GRADUATED_1of1.webp', alt: 'GRADUATED - Paul Thompson' },
                ],
        },
        {
                id: 123,
                title: "TAGGING",
                date: "12-12-20",
                comics: [
                        { src: '/img/2020-12-12_COMIC_TAGGING_1of1.webp', alt: 'TAGGING - Paul Thompson' },
                ],
        },
        {
                id: 124,
                title: "RABID",
                date: "12-13-20",
                comics: [
                        { src: '/img/2020-12-13_COMIC_RABID_1of2.webp', alt: 'RABID - Paul Thompson' },
                        { src: '/img/2020-12-13_COMIC_RABID_2of2.webp', alt: 'RABID - Paul Thompson' },
                ],
        },
        {
                id: 125,
                title: "MOTIVATION",
                date: "12-14-20",
                comics: [
                        { src: '/img/2020-12-14_COMIC_MOTIVATION_1of1.webp', alt: 'MOTIVATION - Paul Thompson' },
                ],
        },
        {
                id: 126,
                title: "DAYDREAM",
                date: "12-15-20",
                comics: [
                        { src: '/img/2020-12-15_COMIC_DAYDREAM_1of2.webp', alt: 'DAYDREAM - Paul Thompson' },
                        { src: '/img/2020-12-15_COMIC_DAYDREAM_2of2.webp', alt: 'DAYDREAM - Paul Thompson' },
                ],
        },
        {
                id: 127,
                title: "MUSIC TASTE",
                date: "12-16-20",
                comics: [
                        { src: '/img/2020-12-16_COMIC_MUSIC-TASTE_1of1.webp', alt: 'MUSIC TASTE - Paul Thompson' },
                ],
        },
        {
                id: 128,
                title: "FAMILY MAN",
                date: "12-17-20",
                comics: [
                        { src: '/img/2020-12-17_COMIC_FAMILY-MAN_1of1.webp', alt: 'FAMILY MAN - Paul Thompson' },
                ],
        },
        {
                id: 129,
                title: "STAFF MEETING",
                date: "12-18-20",
                comics: [
                        { src: '/img/2020-12-18_COMIC_STAFF-MEETING_1of1.webp', alt: 'STAFF MEETING - Paul Thompson' },
                ],
        },
        {
                id: 130,
                title: "EGG PLANT",
                date: "12-19-20",
                comics: [
                        { src: '/img/2020-12-19_COMIC_EGG-PLANT_1of1.webp', alt: 'EGG PLANT - Paul Thompson' },
                ],
        },
        {
                id: 131,
                title: "STRONG HAND",
                date: "12-20-20",
                comics: [
                        { src: '/img/2020-12-20_COMIC_STRONG-HAND_1of1.webp', alt: 'STRONG HAND - Paul Thompson' },
                ],
        },
        {
                id: 132,
                title: "FANATIC",
                date: "12-21-20",
                comics: [
                        { src: '/img/2020-12-21_COMIC_FANATIC_1of1.webp', alt: 'FANATIC - Paul Thompson' },
                ],
        },
        {
                id: 133,
                title: "LONER",
                date: "12-22-20",
                comics: [
                        { src: '/img/2020-12-22_COMIC_LONER_1of2.webp', alt: 'LONER - Paul Thompson' },
                        { src: '/img/2020-12-22_COMIC_LONER_2of2.webp', alt: 'LONER - Paul Thompson' },
                ],
        },
        {
                id: 134,
                title: "IRRATIONAL",
                date: "12-23-20",
                comics: [
                        { src: '/img/2020-12-23_COMIC_IRRATIONAL_1of1.webp', alt: 'IRRATIONAL - Paul Thompson' },
                ],
        },
        {
                id: 135,
                title: "FED UP",
                date: "12-24-20",
                comics: [
                        { src: '/img/2020-12-24_COMIC_FED-UP_1of2.webp', alt: 'FED UP - Paul Thompson' },
                        { src: '/img/2020-12-24_COMIC_FED-UP_2of2.webp', alt: 'FED UP - Paul Thompson' },
                ],
        },
        {
                id: 136,
                title: "CHRISTMAS TIME",
                date: "12-25-20",
                comics: [
                        { src: '/img/2020-12-25_COMIC_CHRISTMAS-TIME_1of1.webp', alt: 'CHRISTMAS TIME - Paul Thompson' },
                ],
        },
        {
                id: 137,
                title: "DOOM SCROLL",
                date: "12-26-20",
                comics: [
                        { src: '/video/2020-12-26_COMIC_DOOM-SCROLL_1of1.mp4', type: 'video', alt: 'DOOM SCROLL - Paul Thompson' },
                ],
        },
        {
                id: 138,
                title: "GUESS WHO",
                date: "12-27-20",
                comics: [
                        { src: '/video/2020-12-27_COMIC_GUESS-WHO_1of1.mp4', type: 'video', alt: 'GUESS WHO - Paul Thompson' },
                ],
        },
        {
                id: 139,
                title: "WORLD GREASE",
                date: "12-28-20",
                comics: [
                        { src: '/img/2020-12-28_COMIC_WORLD-GREASE_1of1.webp', alt: 'WORLD GREASE - Paul Thompson' },
                ],
        },
        {
                id: 140,
                title: "NOODLES",
                date: "12-29-20",
                comics: [
                        { src: '/img/2020-12-29_COMIC_NOODLES_1of2.webp', alt: 'NOODLES - Paul Thompson' },
                        { src: '/img/2020-12-29_COMIC_NOODLES_2of2.webp', alt: 'NOODLES - Paul Thompson' },
                ],
        },
        {
                id: 141,
                title: "FREEZE",
                date: "12-30-20",
                comics: [
                        { src: '/img/2020-12-30_COMIC_FREEZE_1of1.webp', alt: 'FREEZE - Paul Thompson' },
                ],
        },
        {
                id: 142,
                title: "EARLY",
                date: "12-31-20",
                comics: [
                        { src: '/img/2020-12-31_COMIC_EARLY_1of3.webp', alt: 'EARLY - Paul Thompson' },
                        { src: '/img/2020-12-31_COMIC_EARLY_2of3.webp', alt: 'EARLY - Paul Thompson' },
                        { src: '/img/2020-12-31_COMIC_EARLY_3of3.webp', alt: 'EARLY - Paul Thompson' },
                ],
        },
        {
                id: 143,
                title: "UNICORN",
                date: "1-1-21",
                comics: [
                        { src: '/img/2021-01-01_COMIC_UNICORN_1of2.webp', alt: 'UNICORN - Paul Thompson' },
                        { src: '/img/2021-01-01_COMIC_UNICORN_2of2.webp', alt: 'UNICORN - Paul Thompson' },
                ],
        },
        {
                id: 144,
                title: "CLOSE SHAVE",
                date: "1-2-21",
                comics: [
                        { src: '/img/2021-01-02_COMIC_CLOSE-SHAVE_1of1.webp', alt: 'CLOSE SHAVE - Paul Thompson' },
                ],
        },
        {
                id: 145,
                title: "RISK",
                date: "1-3-21",
                comics: [
                        { src: '/img/2021-01-03_COMIC_OPPORTUNITY-COST_1of1.webp', alt: 'OPPURTUNITY COST - Paul Thompson' },
                ],
        },
        {
                id: 146,
                title: "CHOIR",
                date: "1-4-21",
                comics: [
                        { src: '/img/2021-01-04_COMIC_CHOIR_1of1.webp', alt: 'CHOIR - Paul Thompson' },
                ],
        },
        {
                id: 147,
                title: "ANIMAL CRACKERS",
                date: "1-5-21",
                comics: [
                        { src: '/img/2021-01-05_COMIC_ANIMAL-CRACKERS_1of1.webp', alt: 'ANIMAL CRACKERS - Paul Thompson' },
                ],
        },
        {
                id: 148,
                title: "DISPUTE",
                date: "1-6-21",
                comics: [
                        { src: '/img/2021-01-06_COMIC_DISPUTE_1of1.webp', alt: 'DISPUTE - Paul Thompson' },
                ],
        },
        {
                id: 149,
                title: "ROBO",
                date: "1-7-21",
                comics: [
                        { src: '/img/2021-01-07_COMIC_ROBO_1of1.webp', alt: 'ROBO - Paul Thompson' },
                ],
        },
        {
                id: 150,
                title: "YOGA",
                date: "1-8-21",
                comics: [
                        { src: '/img/2021-01-08_COMIC_YOGA_1of2.webp', alt: 'YOGA - Paul Thompson' },
                        { src: '/img/2021-01-08_COMIC_YOGA_2of2.webp', alt: 'YOGA - Paul Thompson' },
                ],
        },
        {
                id: 151,
                title: "LOOKIE HERE",
                date: "1-9-21",
                comics: [
                        { src: '/img/2021-01-09_COMIC_LOOKIE-HERE_1of2.webp', alt: 'LOOKIE HERE - Paul Thompson' },
                        { src: '/img/2021-01-09_COMIC_LOOKIE-HERE_2of2.webp', alt: 'LOOKIE HERE - Paul Thompson' },
                ],
        },
        {
                id: 152,
                title: "DIET",
                date: "1-10-21",
                comics: [
                        { src: '/video/2021-01-10_COMIC_DIET_1of1.mp4', type: 'video', alt: 'DIET - Paul Thompson' },
                ],
        },
        {
                id: 153,
                title: "TOMATO",
                date: "1-11-21",
                comics: [
                        { src: '/img/2021-01-11_COMIC_TOMATO_1of2.webp', alt: 'TOMATO - Paul Thompson' },
                        { src: '/img/2021-01-11_COMIC_TOMATO_2of2.webp', alt: 'TOMATO - Paul Thompson' },
                ],
        },
        {
                id: 154,
                title: "CENSORSHIP",
                date: "1-12-21",
                comics: [
                        { src: '/img/2021-01-12_COMIC_CENSORSHIP_1of1.webp', alt: 'CENSORSHIP - Paul Thompson' },
                ],
        },
        {
                id: 155,
                title: "BUSINESS HOURS",
                date: "1-13-21",
                comics: [
                        { src: '/img/2021-01-13_COMIC_BUSINESS-HOURS_1of2.webp', alt: 'BUSINESS HOURS - Paul Thompson' },
                        { src: '/img/2021-01-13_COMIC_BUSINESS-HOURS_2of2.webp', alt: 'BUSINESS HOURS - Paul Thompson' },
                ],
        },
        {
                id: 156,
                title: "MIME",
                date: "1-14-21",
                comics: [
                        { src: '/img/2021-01-14_COMIC_MIME_1of2.webp', alt: 'MIME - Paul Thompson' },
                        { src: '/img/2021-01-14_COMIC_MIME_2of2.webp', alt: 'MIME - Paul Thompson' },
                ],
        },
        {
                id: 157,
                title: "IT'S ALIVE",
                date: "1-15-21",
                comics: [
                        { src: '/img/2021-01-15_COMIC_ITS-ALIVE_1of1.webp', alt: 'IT\'S ALIVE - Paul Thompson' },
                ],
        },
        {
                id: 158,
                title: "STRIKE",
                date: "1-16-21",
                comics: [
                        { src: '/img/2021-01-16_COMIC_STRIKE_1of1.webp', alt: 'STRIKE - Paul Thompson' },
                ],
        },
        {
                id: 159,
                title: "WHOLE EGGS",
                date: "1-17-21",
                comics: [
                        { src: '/img/2021-01-17_COMIC_WHOLE-EGGS_1of1.webp', alt: 'WHOLE EGGS - Paul Thompson' },
                ],
        },
        {
                id: 160,
                title: "EXTINCTION",
                date: "1-18-21",
                comics: [
                        { src: '/img/2021-01-18_COMIC_EXTINCTION_1of2.webp', alt: 'EXTINCTION - Paul Thompson' },
                        { src: '/img/2021-01-18_COMIC_EXTINCTION_2of2.webp', alt: 'EXTINCTION - Paul Thompson' },
                ],
        },
        {
                id: 161,
                title: "POUR MORE",
                date: "1-19-21",
                comics: [
                        { src: '/img/2021-01-19_COMIC_POUR-MORE_1of2.webp', alt: 'POUR MORE - Paul Thompson' },
                        { src: '/img/2021-01-19_COMIC_POUR-MORE_2of2.webp', alt: 'POUR MORE - Paul Thompson' },
                ],
        },
        {
                id: 162,
                title: "FUN HOUSE",
                date: "1-20-21",
                comics: [
                        { src: '/img/2021-01-20_COMIC_FUN-HOUSE_1of2.webp', alt: 'FUN HOUSE - Paul Thompson' },
                        { src: '/img/2021-01-20_COMIC_FUN-HOUSE_2of2.webp', alt: 'FUN HOUSE - Paul Thompson' },
                ],
        },
        {
                id: 163,
                title: "FASTING",
                date: "1-21-21",
                comics: [
                        { src: '/img/2021-01-21_COMIC_FASTING_1of1.webp', alt: 'FASTING - Paul Thompson' },
                ],
        },
        {
                id: 164,
                title: "BOGO",
                date: "1-22-21",
                comics: [
                        { src: '/img/2021-01-22_COMIC_BOGO_1of1.webp', alt: 'BOGO - Paul Thompson' },
                ],
        },
        {
                id: 165,
                title: "THE ONE",
                date: "1-23-21",
                comics: [
                        { src: '/img/2021-01-23_COMIC_THE-ONE_1of1.webp', alt: 'THE ONE - Paul Thompson' },
                ],
        },
        {
                id: 166,
                title: "IN THE AIR",
                date: "1-24-21",
                comics: [
                        { src: '/img/2021-01-24_COMIC_JUGGLER_1of1.webp', alt: 'JUGGLE - Paul Thompson' },
                ],
        },
        {
                id: 167,
                title: "SILENT NIGHT",
                date: "1-25-21",
                comics: [
                        { src: '/img/2021-01-25_COMIC_SILENT-NIGHT_1of2.webp', alt: 'SILENT NIGHT - Paul Thompson' },
                        { src: '/img/2021-01-25_COMIC_SILENT-NIGHT_2of2.webp', alt: 'SILENT NIGHT - Paul Thompson' },
                ],
        },
        {
                id: 168,
                title: "PSYCHEDELIC",
                date: "1-26-21",
                comics: [
                        { src: '/video/2021-01-26_COMIC_PSYCHEDELIC_1of2.mp4', type: 'video', alt: 'PSYCHEDELIC - Paul Thompson' },
                        { src: '/video/2021-01-26_COMIC_PSYCHEDELIC_2of2.mp4', type: 'video', alt: 'PSYCHEDELIC - Paul Thompson' },
                ],
        },
        {
                id: 169,
                title: "ONE SNAIL",
                date: "1-27-21",
                comics: [
                        { src: '/video/2021-01-27_COMIC_ONE-SNAIL_1of1.mp4', type: 'video', alt: 'ONE SNAIL - Paul Thompson' },
                ],
        },
        {
                id: 170,
                title: "HERMIT",
                date: "1-28-21",
                comics: [
                        { src: '/img/2021-01-28_COMIC_HERMIT_1of1.webp', alt: 'HERMIT - Paul Thompson' },
                ],
        },
        {
                id: 171,
                title: "RIP",
                date: "1-29-21",
                comics: [
                        { src: '/img/2021-01-29_COMIC_RIP_1of1.webp', alt: 'RIP - Paul Thompson' },
                ],
        },
        {
                id: 172,
                title: "TAG",
                date: "1-30-21",
                comics: [
                        { src: '/img/2021-01-30_COMIC_TAG_1of2.webp', alt: 'TAG - Paul Thompson' },
                        { src: '/img/2021-01-30_COMIC_TAG_2of2.webp', alt: 'TAG - Paul Thompson' },
                ],
        },
        {
                id: 173,
                title: "OUT THERE",
                date: "1-31-21",
                comics: [
                        { src: '/img/2021-01-31_COMIC_OUT-THERE_1of2.webp', alt: 'OUT THERE - Paul Thompson' },
                        { src: '/img/2021-01-31_COMIC_OUT-THERE_2of2.webp', alt: 'OUT THERE - Paul Thompson' },
                ],
        },
        {
                id: 174,
                title: "STABILITY",
                date: "2-1-21",
                comics: [
                        { src: '/video/2021-02-01_COMIC_STABILITY_1of1.mp4', type:'video', alt: 'STABILITY - Paul Thompson' },
                ],
        },
        {
                id: 175,
                title: "CARDS",
                date: "2-2-21",
                comics: [
                        { src: '/img/2021-02-02_COMIC_CARDS_1of1.webp', alt: 'CARDS - Paul Thompson' },
                ],
        },
        {
                id: 176,
                title: "BUMPY",
                date: "2-3-21",
                comics: [
                        { src: '/img/2021-02-03_COMIC_BUMPY_1of1.webp', alt: 'BUMPY - Paul Thompson' },
                ],
        },
        {
                id: 177,
                title: "T-SHIRT",
                date: "2-4-21",
                comics: [
                        { src: '/img/2021-02-04_COMIC_T-SHIRT_1of2.webp', alt: 'T-SHIRT - Paul Thompson' },
                        { src: '/img/2021-02-04_COMIC_T-SHIRT_2of2.webp', alt: 'T-SHIRT - Paul Thompson' },
                ],
        },
        {
                id: 178,
                title: "SHOTS",
                date: "2-5-21",
                comics: [
                        { src: '/img/2021-02-05_COMIC_SHOTS_1of1.webp', alt: 'SHOTS - Paul Thompson' },
                ],
        },
        {
                id: 179,
                title: "SWEET SWEET",
                date: "2-6-21",
                comics: [
                        { src: '/img/2021-02-06_COMIC_SWEET-SWEET_1of1.webp', alt: 'SWEET SWEET - Paul Thompson' },
                ],
        },
        {
                id: 180,
                title: "JAIL",
                date: "2-7-21",
                comics: [
                        { src: '/img/2021-02-07_COMIC_JAIL_1of2.webp', alt: 'JAIL - Paul Thompson' },
                        { src: '/img/2021-02-07_COMIC_JAIL_2of2.webp', alt: 'JAIL - Paul Thompson' },
                ],
        },
        {
                id: 181,
                title: "YEAH SEW",
                date: "2-8-21",
                comics: [
                        { src: '/img/2021-02-08_COMIC_YEAH-SEW_1of2.webp', alt: 'YEAH SEW - Paul Thompson' },
                        { src: '/img/2021-02-08_COMIC_YEAH-SEW_2of2.webp', alt: 'YEAH SEW - Paul Thompson' },
                ],
        },
        {
                id: 182,
                title: "HIDING",
                date: "2-9-21",
                comics: [
                        { src: '/img/2021-02-09_COMIC_HIDING_1of1.webp', alt: 'HIDING - Paul Thompson' },
                ],
        },
        {
                id: 183,
                title: "BALANCE",
                date: "2-10-21",
                comics: [
                        { src: '/img/2021-02-10_COMIC_BALANCE_1of1.webp', alt: 'BALANCE - Paul Thompson' },
                ],
        },
        {
                id: 184,
                title: "PROTEST",
                date: "2-11-21",
                comics: [
                        { src: '/img/2021-02-11_COMIC_PROTEST_1of1.webp', alt: 'PROTEST - Paul Thompson' },
                ],
        },
        {
                id: 185,
                title: "HYDRATE",
                date: "2-12-21",
                comics: [
                        { src: '/img/2021-02-12_COMIC_HYDRATE_1of2.webp', alt: 'HYDRATE - Paul Thompson' },
                        { src: '/img/2021-02-12_COMIC_HYDRATE_2of2.webp', alt: 'HYDRATE - Paul Thompson' },
                ],
        },
        {
                id: 186,
                title: "SURGERY",
                date: "2-13-21",
                comics: [
                        { src: '/img/2021-02-13_COMIC_SURGERY_1of1.webp', alt: 'SURGERY - Paul Thompson' },
                ],
        },
        {
                id: 187,
                title: "PERSPECTIVE",
                date: "2-14-21",
                comics: [
                        { src: '/img/2021-02-14_COMIC_PERSPECTIVE_1of1.webp', alt: 'PERSPECTIVE - Paul Thompson' },
                ],
        },
        {
                id: 188,
                title: "IN SHAPE",
                date: "2-15-21",
                comics: [
                        { src: '/img/2021-02-15_COMIC_IN-SHAPE_1of1.webp', alt: 'IN SHAPE - Paul Thompson' },
                ],
        },
        {
                id: 189,
                title: "FREEZE",
                date: "2-16-21",
                comics: [
                        { src: '/img/2021-02-16_COMIC_FREEZE_1of1.webp', alt: 'FREEZE - Paul Thompson' },
                ],
        },
        {
                id: 190,
                title: "OCTOPUS",
                date: "2-17-21",
                comics: [
                        { src: '/img/2021-02-17_COMIC_OCTOPUS_1of1.webp', alt: 'OCTOPUS - Paul Thompson' },
                ],
        },
        {
                id: 191,
                title: "ZEN",
                date: "2-18-21",
                comics: [
                        { src: '/img/2021-02-18_COMIC_ZEN_1of2.webp', alt: 'ZEN - Paul Thompson' },
                        { src: '/img/2021-02-18_COMIC_ZEN_2of2.webp', alt: 'ZEN - Paul Thompson' },
                ],
        },
        {
                id: 192,
                title: "NEW TECH",
                date: "2-19-21",
                comics: [
                        { src: '/img/2021-02-19_COMIC_NEW-TECH_1of2.webp', alt: 'NEW TECH - Paul Thompson' },
                        { src: '/img/2021-02-19_COMIC_NEW-TECH_2of2.webp', alt: 'NEW TECH - Paul Thompson' },
                ],
        },
        {
                id: 193,
                title: "REVENGE",
                date: "2-20-21",
                comics: [
                        { src: '/img/2021-02-20_COMIC_REVENGE_1of2.webp', alt: 'REVENGE - Paul Thompson' },
                        { src: '/img/2021-02-20_COMIC_REVENGE_2of2.webp', alt: 'REVENGE - Paul Thompson' },
                ],
        },
        {
                id: 194,
                title: "SAY WHEN",
                date: "2-21-21",
                comics: [
                        { src: '/video/2021-02-21_COMIC_SAY-WHEN_1of1.mp4', type: 'video', alt: 'SAY WHEN - Paul Thompson' },
                ],
        },
        {
                id: 195,
                title: "MEDITATE",
                date: "2-22-21",
                comics: [
                        { src: '/video/2021-02-22_COMIC_MEDITATE_1of1.mp4', type: 'video', alt: 'MEDITATE - Paul Thompson' },
                ],
        },
        {
                id: 196,
                title: "BIG MOUTH",
                date: "2-23-21",
                comics: [
                        { src: '/img/2021-02-23_COMIC_BIG-MOUTH_1of2.webp', alt: 'BIG MOUTH - Paul Thompson' },
                        { src: '/img/2021-02-23_COMIC_BIG-MOUTH_2of2.webp', alt: 'BIG MOUTH - Paul Thompson' },
                ],
        },
        {
                id: 197,
                title: "NOTIFICATIONS",
                date: "2-24-21",
                comics: [
                        { src: '/video/2021-02-24_COMIC_NOTIFICATIONS_1of1.mp4', type: 'video', alt: 'NOTIFICATIONS - Paul Thompson' },
                ],
        },
        {
                id: 198,
                title: "GO FISH",
                date: "2-25-21",
                comics: [
                        { src: '/img/2021-02-25_COMIC_GO-FISH_1of2.webp', alt: 'GO-FISH - Paul Thompson' },
                        { src: '/img/2021-02-25_COMIC_GO-FISH_2of2.webp', alt: 'GO-FISH - Paul Thompson' },
                ],
        },
        {
                id: 199,
                title: "ONE CALL",
                date: "2-26-21",
                comics: [
                        { src: '/img/2021-02-26_COMIC_ONE-CALL_1of1.webp', alt: 'ONE-CALL - Paul Thompson' },
                ],
        },
        {
                id: 200,
                title: "BREATHE",
                date: "2-27-21",
                comics: [
                        { src: '/img/2021-02-27_COMIC_BREATHE_1of5.webp', alt: 'BREATHE - Paul Thompson' },
                        { src: '/img/2021-02-27_COMIC_BREATHE_2of5.webp', alt: 'BREATHE - Paul Thompson' },
                        { src: '/img/2021-02-27_COMIC_BREATHE_3of5.webp', alt: 'BREATHE - Paul Thompson' },
                        { src: '/img/2021-02-27_COMIC_BREATHE_2of5.webp', alt: 'BREATHE - Paul Thompson' },
                        { src: '/img/2021-02-27_COMIC_BREATHE_4of5.webp', alt: 'BREATHE - Paul Thompson' },
                        { src: '/img/2021-02-27_COMIC_BREATHE_5of5.webp', alt: 'BREATHE - Paul Thompson' },
                ],
        },
        {
                id: 201,
                title: "CROP CIRCLE",
                date: "2-28-21",
                comics: [
                        { src: '/video/2021-02-28_COMIC_CROP-CIRCLE_1of1.mp4', type: 'video', alt: 'CROP CIRCLE - Paul Thompson' },
                ],
        },
        {
                id: 202,
                title: "TURBO",
                date: "3-1-21",
                comics: [
                        { src: '/video/2021-03-01_COMIC_TURBO_1of1.mp4', type: 'video', alt: 'TURBO - Paul Thompson' },
                ],
        },
        {
                id: 203,
                title: "COLLAR",
                date: "3-2-21",
                comics: [
                        { src: '/img/2021-03-02_COMIC_COLLAR_1of1.webp', alt: 'COLLAR - Paul Thompson' },
                ],
        },
        {
                id: 204,
                title: "AUTO FLIRT",
                date: "3-3-21",
                comics: [
                        { src: '/img/2021-03-03_COMIC_AUTO-FLIRT_1of1.webp', alt: 'AUTO FLIRT - Paul Thompson' },
                ],
        },
        {
                id: 205,
                title: "LAUNDRY",
                date: "3-4-21",
                comics: [
                        { src: '/img/2021-03-04_COMIC_LAUNDRY_1of1.webp', alt: 'LAUNDRY - Paul Thompson' },
                ],
        },
        {
                id: 206,
                title: "SKILLED",
                date: "3-5-21",
                comics: [
                        { src: '/img/2021-03-05_COMIC_SKILLED_1of1.webp', alt: 'SKILLED - Paul Thompson' },
                ],
        },
        {
                id: 207,
                title: "MOOD",
                date: "3-6-21",
                comics: [
                        { src: '/img/2021-03-06_COMIC_MOOD_1of2.webp', alt: 'MOOD - Paul Thompson' },
                        { src: '/video/2021-03-06_COMIC_MOOD_2of2.mp4', type: 'video', alt: 'MOOD - Paul Thompson' },
                ],
        },
        {
                id: 208,
                title: "BLINDING LIGHT",
                date: "3-7-21",
                comics: [
                        { src: '/video/2021-03-07_COMIC_BLINDING-LIGHT_1of1.mp4', type: 'video', alt: 'BLINDING LIGHT - Paul Thompson' },
                ],
        },
        {
                id: 209,
                title: "FISHING",
                date: "3-8-21",
                comics: [
                        { src: '/img/2021-03-08_COMIC_FISHING_1of1.webp', alt: 'FISHING - Paul Thompson' },
                ],
        },
        {
                id: 210,
                title: "BULLSEYE",
                date: "3-9-21",
                comics: [
                        { src: '/video/2021-03-09_COMIC_BULLSEYE_1of1.mp4', type: 'video', alt: 'BULLSEYE - Paul Thompson' },
                ],
        },
        {
                id: 211,
                title: "MASK UP",
                date: "3-10-21",
                comics: [
                        { src: '/img/2021-03-10_COMIC_MASK-UP_1of1.webp', alt: 'MASK UP - Paul Thompson' },
                ],
        },
        {
                id: 212,
                title: "SCALE ISSUE",
                date: "3-11-21",
                comics: [
                        { src: '/video/2021-03-11_COMIC_SCALE-ISSUE_1of1.mp4', type: 'video', alt: 'SCALE ISSUE - Paul Thompson' },
                ],
        },
        {
                id: 213,
                title: "TOGETHER",
                date: "3-12-21",
                comics: [
                        { src: '/img/2021-03-12_COMIC_TOGETHER_1of1.webp', alt: 'TOGETHER - Paul Thompson' },
                ],
        },
        {
                id: 214,
                title: "UTILITIES",
                date: "3-13-21",
                comics: [
                        { src: '/img/2021-03-13_COMIC_UTILITIES_1of1.webp', alt: 'UTILITIES - Paul Thompson' },
                ],
        },
        {
                id: 215,
                title: "LITERATE",
                date: "3-14-21",
                comics: [
                        { src: '/img/2021-03-14_COMIC_LITERATE_1of1.webp', alt: 'LITERATE - Paul Thompson' },
                ],
        },
        {
                id: 216,
                title: "NEUTER",
                date: "3-15-21",
                comics: [
                        { src: '/img/2021-03-15_COMIC_NEUTER_1of1.webp', alt: 'NEUTER - Paul Thompson' },
                ],
        },
        {
                id: 217,
                title: "DOMINO",
                date: "3-16-21",
                comics: [
                        { src: '/img/2021-03-16_COMIC_DOMINO_1of1.webp', alt: 'DOMINO - Paul Thompson' },
                ],
        },
        {
                id: 218,
                title: "PRACTICAL",
                date: "3-17-21",
                comics: [
                        { src: '/video/2021-03-17_COMIC_PRACTICAL_1of1.mp4', type: 'video', alt: 'PRACTICAL - Paul Thompson' },
                ],
        },
        {
                id: 219,
                title: "GOLDEN GATES",
                date: "3-18-21",
                comics: [
                        { src: '/video/2021-03-18_COMIC_GOLDEN-GATES_1of1.mp4', type: 'video', alt: 'GOLDEN GATES - Paul Thompson' },
                ],
        },
        {
                id: 220,
                title: "FRYING PAN",
                date: "3-19-21",
                comics: [
                        { src: '/video/2021-03-19_COMIC_FRYING-PAN_1of1.mp4', type: 'video', alt: 'FRYING PAN - Paul Thompson' },
                ],
        },
        {
                id: 221,
                title: "MOLE",
                date: "3-20-21",
                comics: [
                        { src: '/video/2021-03-20_COMIC_MOLE_1of1.mp4', type: 'video', alt: 'MOLE - Paul Thompson' },
                ],
        },
        {
                id: 222,
                title: "IRATE",
                date: "3-21-21",
                comics: [
                        { src: '/video/2021-03-21_COMIC_IRATE_1of1.mp4', type: 'video', alt: 'IRATE - Paul Thompson' },
                ],
        },
        {
                id: 223,
                title: "LUCKY NUMBERS",
                date: "3-22-21",
                comics: [
                        { src: '/video/2021-03-22_COMIC_LUCKY-NUMBERS_1of1.mp4', type: 'video', alt: 'LUCKY NUMBERS - Paul Thompson' },
                ],
        },
        {
                id: 224,
                title: "PI SHOP",
                date: "3-23-21",
                comics: [
                        { src: '/video/2021-03-23_COMIC_PI-SHOP_1of1.mp4', type: 'video', alt: 'PI SHOP - Paul Thompson' },
                ],
        },
        {
                id: 225,
                title: "STARRY NIGHT",
                date: "3-24-21",
                comics: [
                        { src: '/img/2021-03-24_COMIC_STARRY-NIGHT_1of2.webp', alt: 'STARRY NIGHT - Paul Thompson' },
                        { src: '/img/2021-03-24_COMIC_STARRY-NIGHT_2of2.webp', alt: 'STARRY NIGHT - Paul Thompson' },
                ],
        },
        {
                id: 226,
                title: "DEAD HANGS",
                date: "3-25-21",
                comics: [
                        { src: '/img/2021-03-25_COMIC_DEAD-HANGS_1of1.webp', alt: 'DEAD HANGS - Paul Thompson' },
                ],
        },
        {
                id: 227,
                title: "NECESSITIES",
                date: "3-26-21",
                comics: [
                        { src: '/img/2021-03-26_COMIC_NECESSITIES_1of1.webp', alt: 'NECESSITIES - Paul Thompson' },
                ],
        },
        {
                id: 228,
                title: "LEGIBILITY",
                date: "3-27-21",
                comics: [
                        { src: '/video/2021-03-27_COMIC_LEGIBILITY_1of1.mp4', type: 'video', alt: 'LEGIBILITY - Paul Thompson' },
                ],
        },
        {
                id: 229,
                title: "TOAD",
                date: "3-28-21",
                comics: [
                        { src: '/img/2021-03-28_COMIC_TOAD_1of1.webp', alt: 'TOAD - Paul Thompson' },
                ],
        },
        {
                id: 230,
                title: "MAGIC PILL",
                date: "3-29-21",
                comics: [
                        { src: '/img/2021-03-29_COMIC_MAGIC-PILL_1of3.webp', alt: 'MAGIC PILL - Paul Thompson' },
                        { src: '/img/2021-03-29_COMIC_MAGIC-PILL_2of3.webp', alt: 'MAGIC PILL - Paul Thompson' },
                        { src: '/img/2021-03-29_COMIC_MAGIC-PILL_3of3.webp', alt: 'MAGIC PILL - Paul Thompson' },
                ],
        },
        {
                id: 231,
                title: "THE WIRE",
                date: "3-30-21",
                comics: [
                        { src: '/img/2021-03-30_COMIC_THE-WIRE_1of2.webp', alt: 'THE WIRE - Paul Thompson' },
                        { src: '/img/2021-03-30_COMIC_THE-WIRE_2of2.webp', alt: 'THE WIRE - Paul Thompson' },
                ],
        },
        {
                id: 232,
                title: "LYRICS",
                date: "3-31-21",
                comics: [
                        { src: '/img/2021-03-31_COMIC_LYRICS_1of2.webp', alt: 'LYRICS - Paul Thompson' },
                        { src: '/img/2021-03-31_COMIC_LYRICS_2of2.webp', alt: 'LYRICS - Paul Thompson' },
                ],
        },
        {
                id: 233,
                title: "PALM TREE",
                date: "4-1-21",
                comics: [
                        { src: '/img/2021-04-01_COMIC_PALM-TREE_1of1.webp', alt: 'PALM TREE - Paul Thompson' },
                ],
        },
        {
                id: 234,
                title: "BRAIN STEW",
                date: "4-2-21",
                comics: [
                        { src: '/img/2021-04-02_COMIC_BRAIN-STEW_1of1.webp', alt: 'BRAIN STEW - Paul Thompson' },
                ],
        },
        {
                id: 235,
                title: "TIC-TAC-TOE",
                date: "4-3-21",
                comics: [
                        { src: '/img/2021-04-03_COMIC_TIC-TAC-TOE_1of2.webp', alt: 'TIC-TAC-TOE - Paul Thompson' },
                        { src: '/img/2021-04-03_COMIC_TIC-TAC-TOE_2of2.webp', alt: 'TIC-TAC-TOE - Paul Thompson' },
                ],
        },
        {
                id: 236,
                title: "DON'T STOP",
                date: "4-4-21",
                comics: [
                        { src: '/img/2021-04-04_COMIC_DONT-STOP_1of2.webp', alt: 'DON\'T STOP - Paul Thompson' },
                        { src: '/img/2021-04-04_COMIC_DONT-STOP_2of2.webp', alt: 'DON\'T STOP - Paul Thompson' },
                ],
        },
        {
                id: 237,
                title: "SLURP",
                date: "4-5-21",
                comics: [
                        { src: '/img/2021-04-05_COMIC_SLURP_1of1.webp', alt: 'SLURP - Paul Thompson' },
                ],
        },
        {
                id: 238,
                title: "VENN",
                date: "4-6-21",
                comics: [
                        { src: '/img/2021-04-06_COMIC_VENN_1of1.webp', alt: 'VENN - Paul Thompson' },
                ],
        },
        {
                id: 239,
                title: "DINNER TIME",
                date: "4-7-21",
                comics: [
                        { src: '/img/2021-04-07_COMIC_DINNER-TIME_1of3.webp', alt: 'DINNER TIME - Paul Thompson' },
                        { src: '/img/2021-04-07_COMIC_DINNER-TIME_2of3.webp', alt: 'DINNER TIME - Paul Thompson' },
                        { src: '/img/2021-04-07_COMIC_DINNER-TIME_3of3.webp', alt: 'DINNER TIME - Paul Thompson' },
                ],
        },
        {
                id: 240,
                title: "HOME RUN",
                date: "4-8-21",
                comics: [
                        { src: '/img/2021-04-08_COMIC_HOME-RUN_1of2.webp', alt: 'HOME RUN - Paul Thompson' },
                        { src: '/img/2021-04-08_COMIC_HOME-RUN_2of2.webp', alt: 'HOME RUN - Paul Thompson' },
                ],
        },
        {
                id: 241,
                title: "SPIRITS",
                date: "4-9-21",
                comics: [
                        { src: '/img/2021-04-09_COMIC_SPIRITS_1of1.webp', alt: 'SPIRIT - Paul Thompson' },
                ],
        },
        {
                id: 242,
                title: "COMPOSER",
                date: "4-10-21",
                comics: [
                        { src: '/img/2021-04-10_COMIC_COMPOSER_1of2.webp', alt: 'COMPOSER - Paul Thompson' },
                        { src: '/img/2021-04-10_COMIC_COMPOSER_2of2.webp', alt: 'COMPOSER - Paul Thompson' },
                ],
        },
        {
                id: 243,
                title: "CRABS",
                date: "4-11-21",
                comics: [
                        { src: '/img/2021-04-11_COMIC_CRABS_1of1.webp', alt: 'CRABS - Paul Thompson' },
                ],
        },
        {
                id: 244,
                title: "RARE",
                date: "4-12-21",
                comics: [
                        { src: '/img/2021-04-12_COMIC_RARE_1of2.webp', alt: 'RARE - Paul Thompson' },
                        { src: '/img/2021-04-12_COMIC_RARE_2of2.webp', alt: 'RARE - Paul Thompson' },
                ],
        },
        {
                id: 245,
                title: "TAXI",
                date: "4-13-21",
                comics: [
                        { src: '/img/2021-04-13_COMIC_TAXI_1of2.webp', alt: 'TAXI - Paul Thompson' },
                        { src: '/img/2021-04-13_COMIC_TAXI_2of2.webp', alt: 'TAXI - Paul Thompson' },
                ],
        },
        {
                id: 246,
                title: "STRICT TIME",
                date: "4-14-21",
                comics: [
                        { src: '/img/2021-04-14_COMIC_STRICT-TIME_1of1.webp', alt: 'STRICT TIME - Paul Thompson' },
                ],
        },
        {
                id: 247,
                title: "MANUAL",
                date: "4-15-21",
                comics: [
                        { src: '/img/2021-04-15_COMIC_MANUAL_1of2.webp', alt: 'MANUAL - Paul Thompson' },
                        { src: '/img/2021-04-15_COMIC_MANUAL_2of2.webp', alt: 'MANUAL - Paul Thompson' },
                ],
        },
        {
                id: 248,
                title: "BUTTERFLY",
                date: "4-16-21",
                comics: [
                        { src: '/img/2021-04-16_COMIC_BUTTERFLY_1of1.webp', alt: 'BUTTERFLY - Paul Thompson' },
                ],
        },
        {
                id: 249,
                title: "DOO KIND",
                date: "4-17-21",
                comics: [
                        { src: '/img/2021-04-17_COMIC_DOO-KIND_1of1.webp', alt: 'DOO KIND - Paul Thompson' },
                ],
        },
        {
                id: 250,
                title: "TWONICYCLE",
                date: "4-18-21",
                comics: [
                        { src: '/img/2021-04-18_COMIC_TWONICYCLE_1of1.webp', alt: 'TWONICYCLE - Paul Thompson' },
                ],
        },
        {
                id: 251,
                title: "PIDGEON-TOED",
                date: "4-19-21",
                comics: [
                        { src: '/img/2021-04-19_COMIC_PIDGEON-TOED_1of1.webp', alt: 'PIDGEON-TOED - Paul Thompson' },
                ],
        },
        {
                id: 252,
                title: "BE PREPARED",
                date: "4-20-21",
                comics: [
                        { src: '/img/2021-04-20_COMIC_BE-PREPARED_1of1.webp', alt: 'BE PREPARED - Paul Thompson' },
                ],
        },
        {
                id: 253,
                title: "ACE",
                date: "4-21-21",
                comics: [
                        { src: '/img/2021-04-21_COMIC_ACE_1of1.webp', alt: 'ACE - Paul Thompson' },
                ],
        },
        {
                id: 254,
                title: "HOT HEAD",
                date: "4-22-21",
                comics: [
                        { src: '/img/2021-04-22_COMIC_HOT-HEAD_1of1.webp', alt: 'HOT HEAD - Paul Thompson' },
                ],
        },
        {
                id: 255,
                title: "HOME STRETCH",
                date: "4-23-21",
                comics: [
                        { src: '/img/2021-04-23_COMIC_HOME-STRETCH_1of1.webp', alt: 'HOME STRETCH - Paul Thompson' },
                ],
        },
        {
                id: 256,
                title: "SPEED WALK",
                date: "4-24-21",
                comics: [
                        { src: '/img/2021-04-24_COMIC_SPEED-WALK_1of1.webp', alt: 'SPEED WALK - Paul Thompson' },
                ],
        },
        {
                id: 257,
                title: "CRANE KICK",
                date: "4-25-21",
                comics: [
                        { src: '/img/2021-04-25_COMIC_CRANE-KICK_1of2.webp', alt: 'CRANE KICK - Paul Thompson' },
                        { src: '/video/2021-04-25_COMIC_CRANE-KICK_2of2.mp4', type: 'video', alt: 'CRANE KICK - Paul Thompson' },
                ],
        },
        {
                id: 258,
                title: "PRIME TIME",
                date: "4-26-21",
                comics: [
                        { src: '/img/2021-04-26_COMIC_PRIME-TIME_1of1.webp', alt: 'PRIME TIME - Paul Thompson' },
                ],
        },
        {
                id: 259,
                title: "SOIL",
                date: "4-27-21",
                comics: [
                        { src: '/img/2021-04-27_COMIC_SOIL_1of1.webp', alt: 'SOIL - Paul Thompson' },
                ],
        },
        {
                id: 260,
                title: "8 BITS",
                date: "4-28-21",
                comics: [
                        { src: '/img/2021-04-28_COMIC_8-BITS_1of1.webp', alt: '8 BITS - Paul Thompson' },
                ],
        },
        {
                id: 261,
                title: "CLEAN UP",
                date: "4-29-21",
                comics: [
                        { src: '/img/2021-04-29_COMIC_CLEAN-UP_1of3.webp', alt: 'CLEAN UP - Paul Thompson' },
                        { src: '/img/2021-04-29_COMIC_CLEAN-UP_2of3.webp', alt: 'CLEAN UP - Paul Thompson' },
                        { src: '/img/2021-04-29_COMIC_CLEAN-UP_3of3.webp', alt: 'CLEAN UP - Paul Thompson' },
                ],
        },
        {
                id: 262,
                title: "BREAKFAST",
                date: "4-30-21",
                comics: [
                        { src: '/img/2021-04-30_COMIC_BREAKFAST_1of1.webp', alt: 'BREAKFAST - Paul Thompson' },
                ],
        },
        {
                id: 263,
                title: "PICNIC",
                date: "5-1-21",
                comics: [
                        { src: '/img/2021-05-01_COMIC_PICNIC_1of1.webp', alt: 'PICNIC - Paul Thompson' },
                ],
        },
        {
                id: 264,
                title: "SMELL THAT?",
                date: "5-2-21",
                comics: [
                        { src: '/img/2021-05-02_COMIC_SMELL-THAT_1of1.webp', alt: 'SMELL THAT? - Paul Thompson' },
                ],
        },
        {
                id: 265,
                title: "THEFT",
                date: "5-3-21",
                comics: [
                        { src: '/img/2021-05-03_COMIC_THEFT_1of1.webp', alt: 'THEFT - Paul Thompson' },
                ],
        },
        {
                id: 266,
                title: "OWNERS",
                date: "5-4-21",
                comics: [
                        { src: '/img/2021-05-04_COMIC_OWNERS_1of1.webp', alt: 'OWNERS - Paul Thompson' },
                ],
        },
        {
                id: 267,
                title: "SHAKE IT UP",
                date: "5-5-21",
                comics: [
                        { src: '/img/2021-05-05_COMIC_SHAKE-IT-UP_1of1.webp', alt: 'SHAKE IT UP - Paul Thompson' },
                ],
        },
        {
                id: 268,
                title: "OLD SCHOOL",
                date: "5-6-21",
                comics: [
                        { src: '/img/2021-05-06_COMIC_OLD-SCHOOL_1of2.webp', alt: 'OLD SCHOOL - Paul Thompson' },
                        { src: '/img/2021-05-06_COMIC_OLD-SCHOOL_2of2.webp', alt: 'OLD SCHOOL - Paul Thompson' },
                ],
        },
        {
                id: 269,
                title: "CHEATING",
                date: "5-7-21",
                comics: [
                        { src: '/img/2021-05-07_COMIC_CHEATING_1of1.webp', alt: 'CHEATING - Paul Thompson' },
                ],
        },
        {
                id: 270,
                title: "LOUD NOISES",
                date: "5-8-21",
                comics: [
                        { src: '/img/2021-05-08_COMIC_LOUD-NOISES_1of2.webp', alt: 'LOUD NOISES - Paul Thompson' },
                        { src: '/img/2021-05-08_COMIC_LOUD-NOISES_2of2.webp', alt: 'LOUD NOISES - Paul Thompson' },
                ],
        },
        {
                id: 271,
                title: "NOT GUILTY",
                date: "5-9-21",
                comics: [
                        { src: '/img/2021-05-09_COMIC_NOT-GUILTY_1of2.webp', alt: 'NOT GUILTY - Paul Thompson' },
                        { src: '/img/2021-05-09_COMIC_NOT-GUILTY_2of2.webp', alt: 'NOT GUILTY - Paul Thompson' },
                ],
        },
        {
                id: 272,
                title: "PLAQUE",
                date: "5-10-21",
                comics: [
                        { src: '/video/2021-05-10_COMIC_PLAQUE_1of1.mp4', type: 'video', alt: 'PLAQUE - Paul Thompson' },
                ],
        },
        {
                id: 273,
                title: "BEDTIME MATH",
                date: "5-11-21",
                comics: [
                        { src: '/video/2021-05-11_COMIC_BEDTIME-MATH_1of1.mp4', type: 'video', alt: 'BEDTIME MATH - Paul Thompson' },
                ],
        },
        {
                id: 274,
                title: "MATURITY",
                date: "5-12-21",
                comics: [
                        { src: '/img/2021-05-12_COMIC_MATURITY_1of1.webp', alt: 'MATURITY - Paul Thompson' },
                ],
        },
        {
                id: 275,
                title: "NO DIFFERENCE",
                date: "5-13-21",
                comics: [
                        { src: '/img/2021-05-13_COMIC_NO-DIFFERENCE_1of1.webp', alt: 'NO DIFFERENCE - Paul Thompson' },
                ],
        },
        {
                id: 276,
                title: "UTENSILS",
                date: "5-14-21",
                comics: [
                        { src: '/img/2021-05-14_COMIC_UTENSILS_1of1.webp', alt: 'UTENSILS - Paul Thompson' },
                ],
        },
        {
                id: 277,
                title: "OH SNAP",
                date: "5-15-21",
                comics: [
                        { src: '/video/2021-05-15_COMIC_OH-SNAP_1of1.mp4', type: 'video', alt: 'OH SNAP - Paul Thompson' },
                ],
        },
        {
                id: 278,
                title: "LA-LA-LA-LA",
                date: "5-16-21",
                comics: [
                        { src: '/img/2021-05-16_COMIC_LA-LA-LA-LA_1of1.webp', alt: 'LA-LA-LA-LA - Paul Thompson' },
                ],
        },
        {
                id: 279,
                title: "STATION WAGON",
                date: "5-17-21",
                comics: [
                        { src: '/img/2021-05-17_COMIC_STATION-WAGON_1of1.webp', alt: 'STATION WAGON - Paul Thompson' },
                ],
        },
        {
                id: 280,
                title: "HIGH HORSE",
                date: "5-18-21",
                comics: [
                        { src: '/img/2021-05-18_COMIC_HIGH-HORSE_1of1.webp', alt: 'HIGH HORSE - Paul Thompson' },
                ],
        },
        {
                id: 281,
                title: "SNOOZIN",
                date: "5-19-21",
                comics: [
                        { src: '/img/2021-05-19_COMIC_SNOOZIN_1of1.webp', alt: 'SNOOZIN - Paul Thompson' },
                ],
        },
        {
                id: 282,
                title: "SLIPPERS",
                date: "5-20-21",
                comics: [
                        { src: '/img/2021-05-20_COMIC_SLIPPERS_1of1.webp', alt: 'SLIPPERS - Paul Thompson' },
                ],
        },
        {
                id: 283,
                title: "NEW DRIVER",
                date: "5-21-21",
                comics: [
                        { src: '/img/2021-05-21_COMIC_NEW-DRIVER_1of2.webp', alt: 'NEW DRIVER - Paul Thompson' },
                        { src: '/img/2021-05-21_COMIC_NEW-DRIVER_2of2.webp', alt: 'NEW DRIVER - Paul Thompson' },
                ],
        },
        {
                id: 284,
                title: "HAPPY",
                date: "5-22-21",
                comics: [
                        { src: '/img/2021-05-22_COMIC_HAPPY_1of1.webp', alt: 'HAPPY - Paul Thompson' },
                ],
        },
        {
                id: 285,
                title: "BOQUET",
                date: "5-23-21",
                comics: [
                        { src: '/img/2021-05-23_COMIC_BOQUET_1of1.webp', alt: 'BOQUET - Paul Thompson' },
                ],
        },
        {
                id: 286,
                title: "GROCERIES",
                date: "5-24-21",
                comics: [
                        { src: '/img/2021-05-24_COMIC_GROCERIES_1of1.webp', alt: 'GROCERIES - Paul Thompson' },
                ],
        },
        {
                id: 287,
                title: "GUTS",
                date: "5-25-21",
                comics: [
                        { src: '/img/2021-05-25_COMIC_GUTS_1of1.webp', alt: 'GUTS - Paul Thompson' },
                ],
        },
        {
                id: 288,
                title: "COUNTERTOPS",
                date: "5-26-21",
                comics: [
                        { src: '/img/2021-05-26_COMIC_COUNTERTOPS_1of1.webp', alt: 'COUNTERTOPS - Paul Thompson' },
                ],
        },
        {
                id: 289,
                title: "PARKING",
                date: "5-27-21",
                comics: [
                        { src: '/img/2021-05-27_COMIC_PARKING_1of2.webp', alt: 'PARKING - Paul Thompson' },
                        { src: '/img/2021-05-27_COMIC_PARKING_2of2.webp', alt: 'PARKING - Paul Thompson' },
                ],
        },
        {
                id: 290,
                title: "SASQUATCH",
                date: "5-28-21",
                comics: [
                        { src: '/img/2021-05-28_COMIC_SASQUATCH_1of1.webp', alt: 'SASQUATCH - Paul Thompson' },
                ],
        },
        {
                id: 291,
                title: "SIGNAL",
                date: "5-29-21",
                comics: [
                        { src: '/img/2021-05-29_COMIC_SIGNAL_1of2.webp', alt: 'SIGN - Paul Thompson' },
                        { src: '/video/2021-05-29_COMIC_SIGNAL_2of2.mp4', type: 'video', alt: 'SIGN - Paul Thompson' },
                ],
        },
        {
                id: 292,
                title: "HOPE",
                date: "5-30-21",
                comics: [
                        { src: '/img/2021-05-30_COMIC_HOPE_1of1.webp', alt: 'HOPE - Paul Thompson' },
                ],
        },
        {
                id: 293,
                title: "MAY",
                date: "5-31-21",
                comics: [
                        { src: '/img/2021-05-31_COMIC_MAY_1of1.webp', alt: 'MAY - Paul Thompson' },
                ],
        },
        {
                id: 294,
                title: "FOOTWEAR",
                date: "6-1-21",
                comics: [
                        { src: '/img/2021-06-01_COMIC_FOOTWEAR_1of1.webp', alt: 'FOOTWEAR - Paul Thompson' },
                ],
        },
        {
                id: 295,
                title: "DEFENSE",
                date: "6-2-21",
                comics: [
                        { src: '/img/2021-06-02_COMIC_DEFENSE_1of2.webp', alt: 'DEFENSE - Paul Thompson' },
                        { src: '/img/2021-06-02_COMIC_DEFENSE_2of2.webp', alt: 'DEFENSE - Paul Thompson' },
                ],
        },
        {
                id: 296,
                title: "PANDA",
                date: "6-3-21",
                comics: [
                        { src: '/img/2021-06-03_COMIC_PANDA_1of1.webp', alt: 'PANDA - Paul Thompson' },
                ],
        },
        {
                id: 297,
                title: "ROUGH DAY",
                date: "6-4-21",
                comics: [
                        { src: '/img/2021-06-04_COMIC_ROUGH-DAY_1of1.webp', alt: 'ROUGH DAY - Paul Thompson' },
                ],
        },
        {
                id: 298,
                title: "OUCH",
                date: "6-5-21",
                comics: [
                        { src: '/img/2021-06-05_COMIC_OUCH_1of1.webp', alt: 'OUCH - Paul Thompson' },
                ],
        },
        {
                id: 299,
                title: "CLOUD",
                date: "6-6-21",
                comics: [
                        { src: '/img/2021-06-06_COMIC_CLOUD_1of1.webp', alt: 'CLOUD - Paul Thompson' },
                ],
        },
        {
                id: 300,
                title: "UPDATE",
                date: "6-7-21",
                comics: [
                        { src: '/img/2021-06-07_COMIC_UPDATE_1of1.webp', alt: 'UPDATE - Paul Thompson' },
                ],
        },
        {
                id: 301,
                title: "PAPERS PLEASE",
                date: "6-8-21",
                comics: [
                        { src: '/img/2021-06-08_COMIC_PAPERS-PLEASE_1of2.webp', alt: 'PAPERS PLEASE - Paul Thompson' },
                        { src: '/img/2021-06-08_COMIC_PAPERS-PLEASE_2of2.webp', alt: 'PAPERS PLEASE - Paul Thompson' },
                ],
        },
        {
                id: 302,
                title: "TEA TIME",
                date: "6-9-21",
                comics: [
                        { src: '/img/2021-06-09_COMIC_TEA-TIME_1of1.webp', alt: 'TEA-TIME - Paul Thompson' },
                ],
        },
        {
                id: 303,
                title: "STORY TIME",
                date: "6-10-21",
                comics: [
                        { src: '/img/2021-06-10_COMIC_STORY-TIME_1of1.webp', alt: 'STORY TIME - Paul Thompson' },
                ],
        },
        {
                id: 304,
                title: "PLAY DUMB",
                date: "6-11-21",
                comics: [
                        { src: '/img/2021-06-11_COMIC_PLAY-DUMB_1of1.webp', alt: 'PLAY DUMB - Paul Thompson' },
                ],
        },
        {
                id: 305,
                title: "BIDET",
                date: "6-12-21",
                comics: [
                        { src: '/img/2021-06-12_COMIC_BIDET_1of1.webp', alt: 'BIDET - Paul Thompson' },
                ],
        },
        {
                id: 306,
                title: "PARAKEET",
                date: "6-13-21",
                comics: [
                        { src: '/img/2021-06-13_COMIC_PARAKEET_1of2.webp', alt: 'PARAKEET - Paul Thompson' },
                        { src: '/img/2021-06-13_COMIC_PARAKEET_2of2.webp', alt: 'PARAKEET - Paul Thompson' },
                ],
        },
        {
                id: 307,
                title: "MADNESS",
                date: "5-30-22",
                comics: [
                        { src: '/img/2022-05-30_COMIC_MADNESS_1of1.webp', alt: 'MADNESS - Paul Thompson' },
                ],
        },
        {
                id: 308,
                title: "FULL STOMACH",
                date: "5-31-22",
                comics: [
                        { src: '/img/2022-05-31_COMIC_FULL-STOMACH_1of1.webp', alt: 'FULL STOMACH - Paul Thompson' },
                ],
        },
        {
                id: 309,
                title: "DEFECTIVE",
                date: "6-1-22",
                comics: [
                        { src: '/img/2022-06-01_COMIC_DEFECTIVE_1of1.webp', alt: 'DEFECTIVE - Paul Thompson' },
                ],
        },
        {
                id: 310,
                title: "OPEN DOOR",
                date: "6-2-22",
                comics: [
                        { src: '/img/2022-06-02_COMIC_OPEN-DOOR_1of1.webp', alt: 'OPEN DOOR - Paul Thompson' },
                ],
        },
        {
                id: 311,
                title: "MICRO-PHONE",
                date: "6-3-22",
                comics: [
                        { src: '/img/2022-06-03_COMIC_MICRO-PHONE_1of1.webp', alt: 'MICRO-PHONE - Paul Thompson' },
                ],
        },
        {
                id: 312,
                title: "NOT FUNNY",
                date: "6-4-22",
                comics: [
                        { src: '/img/2022-06-04_COMIC_NOT-FUNNY_1of1.webp', alt: 'NOT FUNNY - Paul Thompson' },
                ],
        },
        {
                id: 313,
                title: "MOB",
                date: "6-5-22",
                comics: [
                        { src: '/img/2022-06-05_COMIC_MOB_1of1.webp', alt: 'MOB - Paul Thompson' },
                ],
        },
        {
                id: 314,
                title: "CONE HEAD",
                date: "6-6-22",
                comics: [
                        { src: '/img/2022-06-06_COMIC_CONE-HEAD_1of1.webp', alt: 'CONE HEAD - Paul Thompson' },
                ],
        },
        {
                id: 315,
                title: "LEG ROOM",
                date: "6-7-22",
                comics: [
                        { src: '/img/2022-06-07_COMIC_LEG-ROOM_1of1.webp', alt: 'LEG ROOM - Paul Thompson' },
                ],
        },
        {
                id: 316,
                title: "BEDSIDE",
                date: "6-8-22",
                comics: [
                        { src: '/img/2022-06-08_COMIC_BEDSIDE_1of1.webp', alt: 'BEDSIDE - Paul Thompson' },
                ],
        },
        {
                id: 317,
                title: "MOCKINGBIRD",
                date: "6-9-22",
                comics: [
                        { src: '/video/2022-06-09_COMIC_MOCKINGBIRD_1of1.mp4', type: 'video', alt: 'MOCKINGBIRD - Paul Thompson' },
                ],
        },
        {
                id: 318,
                title: "ROUGH WATERS",
                date: "6-10-22",
                comics: [
                        { src: '/img/2022-06-10_COMIC_ROUGH-WATERS_1of1.webp', alt: 'ROUGH WATERS - Paul Thompson' },
                ],
        },
        {
                id: 319,
                title: "LIGHTS OUT",
                date: "6-11-22",
                comics: [
                        { src: '/img/2022-06-11_COMIC_LIGHTS-OUT_1of1.webp', alt: 'TROUBLESHOOTING - Paul Thompson' },
                ],
        },
        {
                id: 320,
                title: "HOLD HANDS",
                date: "6-12-22",
                comics: [
                        { src: '/img/2022-06-12_COMIC_HOLD-HANDS_1of2.webp', alt: 'HOLD HANDS - Paul Thompson' },
                        { src: '/img/2022-06-12_COMIC_HOLD-HANDS_2of2.webp', alt: 'HOLD HANDS - Paul Thompson' },
                ],
        },
        {
                id: 321,
                title: "CHOPSTICKS",
                date: "6-13-22",
                comics: [
                        { src: '/video/2022-06-13_COMIC_CHOPSTICKS_1of1.mp4', type: 'video', alt: 'CHOPSTICKS - Paul Thompson' },
                ],
        },
        {
                id: 322,
                title: "CHEESE",
                date: "6-14-22",
                comics: [
                        { src: '/video/2022-06-14_COMIC_CHEESE_1of1.mp4', type: 'video', alt: 'CHEESE - Paul Thompson' },
                ],
        },
        {
                id: 323,
                title: "BABY BOY",
                date: "6-15-22",
                comics: [
                        { src: '/img/2022-06-15_COMIC_BABY-BOY_1of1.webp', alt: 'BABY BOY - Paul Thompson' },
                ],
        },
        {
                id: 324,
                title: "HOUSTON",
                date: "6-16-22",
                comics: [
                        { src: '/img/2022-06-16_COMIC_HOUSTON_1of1.webp', alt: 'HOUSTON - Paul Thompson' },
                ],
        },
        {
                id: 325,
                title: "TMNT",
                date: "6-17-22",
                comics: [
                        { src: '/img/2022-06-17_COMIC_TMNT_1of1.webp', alt: 'TMNT - Paul Thompson' },
                ],
        },
        {
                id: 326,
                title: "PLAY BALL",
                date: "6-18-22",
                comics: [
                        { src: '/img/2022-06-18_COMIC_PLAY-BALL_1of1.webp', alt: 'PLAY BALL - Paul Thompson' },
                ],
        },
        {
                id: 327,
                title: "METAMORPHOSIS",
                date: "6-19-22",
                comics: [
                        { src: '/img/2022-06-19_COMIC_METAMORPHOSIS_1of1.webp', alt: 'METAMORPHOSIS - Paul Thompson' },
                ],
        },
        {
                id: 328,
                title: "TINY",
                date: "6-20-22",
                comics: [
                        { src: '/img/2022-06-20_COMIC_TINY_1of1.webp', alt: 'TINY - Paul Thompson' },
                ],
        },
        {
                id: 329,
                title: "SANDCASTLES",
                date: "6-21-22",
                comics: [
                        { src: '/img/2022-06-21_COMIC_SANDCASTLES_1of1.webp', alt: 'SANDCASTLES - Paul Thompson' },
                ],
        },
        {
                id: 330,
                title: "SHORT STOP",
                date: "6-22-22",
                comics: [
                        { src: '/img/2022-06-22_COMIC_SHORT-STOP_1of1.webp', alt: 'SHORT STOP - Paul Thompson' },
                ],
        },
        {
                id: 331,
                title: "COMFORT",
                date: "6-23-22",
                comics: [
                        { src: '/img/2022-06-23_COMIC_COMFORT_1of1.webp', alt: 'COMFORT - Paul Thompson' },
                ],
        },
        {
                id: 332,
                title: "AYE AYE",
                date: "6-24-22",
                comics: [
                        { src: '/video/2022-06-24_COMIC_AYE-AYE_1of1.mp4', type: 'video', alt: 'AYE AYE - Paul Thompson' },
                ],
        },
        {
                id: 333,
                title: "JUMPERS",
                date: "6-25-22",
                comics: [
                        { src: '/video/2022-06-25_COMIC_JUMPERS_1of1.mp4', type: 'video', alt: 'JUMPERS - Paul Thompson' },
                ],
        },
        {
                id: 334,
                title: "LULLABY",
                date: "6-26-22",
                comics: [
                        { src: '/video/2022-06-26_COMIC_LULLABY_1of1.mp4', type: 'video', alt: 'LULLABY - Paul Thompson' },
                ],
        },
        {
                id: 335,
                title: "TO-DO",
                date: "6-27-22",
                comics: [
                        { src: '/img/2022-06-27_COMIC_TO-DO_1of1.webp', alt: 'TO-DO - Paul Thompson' },
                ],
        },
        {
                id: 336,
                title: "CONSUMER",
                date: "6-28-22",
                comics: [
                        { src: '/img/2022-06-28_COMIC_CONSUMER_1of1.webp', alt: 'CONSUMER - Paul Thompson' },
                ],
        },
        {
                id: 337,
                title: "PAPER",
                date: "6-29-22",
                comics: [
                        { src: '/video/2022-06-29_COMIC_PAPER_1of1.mp4', type: 'video', alt: 'PAPER - Paul Thompson' },
                ],
        },
        {
                id: 338,
                title: "GOALIE",
                date: "6-30-22",
                comics: [
                        { src: '/img/2022-06-30_COMIC_GOALIE_1of1.webp', alt: 'GOALIE - Paul Thompson' },
                ],
        },
        {
                id: 339,
                title: "FIRED",
                date: "7-01-22",
                comics: [
                        { src: '/img/2022-07-01_COMIC_FIRED_1of1.webp', alt: 'FIRED - Paul Thompson' },
                    ],
        },
        {
                id: 340,
                title: "CRASHING",
                date: "7-02-22",
                comics: [
                        { src: '/img/2022-07-02_COMIC_CRASHING_1of1.webp', alt: 'CRASHING - Paul Thompson' },
                ],
        },
        {
                id: 341,
                title: "PEP TALK",
                date: "7-03-22",
                comics: [
                        { src: '/video/2022-07-03_COMIC_PEP-TALK_1of1.mp4', type: 'video', alt: 'PEP TALK - Paul Thompson' },
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

