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
                title: "STAY-SAFE",
                date: "11-25-20",
                comics: [
                        { src: '/img/2020-11-25_COMIC_STAY-SAFE_1of1.webp', alt: 'STAY-SAFE - Paul Thompson' },
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
                title: "MASK UP",
                date: "11-27-20",
                comics: [
                        { src: '/img/2020-11-27_COMIC_MASK-UP_1of1.webp', alt: 'MASK UP - Paul Thompson' },
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

