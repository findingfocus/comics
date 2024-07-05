'use client'
import React, { useState } from 'react';
import EmblaCarousel from "./EmblaCarousel";
import { comicCarousels, comicList} from "@/app/comics";

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    // Filter to find the carousel for the selected date
    const selectedCarousel = comicCarousels.find(carousel => carousel.date === selectedDate);

    // Select a random comic carousel
    const randomCarouselIndex = Math.floor(Math.random() * comicCarousels.length);
    const randomCarousel = comicCarousels[randomCarouselIndex].comics;

    // Select a random comic
    const randomComicIndex = Math.floor(Math.random() * comicList.length);
    const randomComic = [comicList[randomComicIndex]]; // Wrap in array for EmblaCarousel

    return (
        <>
            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>
                    Refresh for random comics!
                </h1>
            </div>
            <div className={""}>
                <EmblaCarousel slides={randomCarousel}/>
            </div>

            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>
                    Select a date to see comics!
                </h1>
                <div>
                    {comicCarousels.map((carousel, index) => (
                        <button key={index} onClick={() => setSelectedDate(carousel.date)}>
                            {carousel.date}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                {selectedCarousel && <EmblaCarousel slides={selectedCarousel.comics}/>}
            </div>
        </>
    )
}