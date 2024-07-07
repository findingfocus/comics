'use client'
import React, { useState, useEffect } from 'react';
import EmblaCarousel from "./EmblaCarousel";
import { comicCarousels, Comic } from "@/app/comics";

import PickerCarousel from './PickerCarousel'

const LOOP = false
export default function Home() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedCarousel, setSelectedCarousel] = useState<Comic[]>([]);
    const [randomCarousel, setRandomCarousel] = useState<Comic[]>([]);
    const [carouselTitle, setCarouselTitle] = useState<string | undefined>(undefined);


    // Select a random comic carousel on initial render
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * comicCarousels.length);
        setRandomCarousel(comicCarousels[randomIndex].comics);
        setCarouselTitle(`${comicCarousels[randomIndex].title}\n${comicCarousels[randomIndex].date}`);
    }, []);



    useEffect(() => {
        function loadCarouselFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const comicId = urlParams.get('comic');
            if (comicId) {
                const carousel = comicCarousels.find(c => c.id.toString() === comicId);
                if (carousel) {
                    setSelectedCarousel(carousel.comics);
                    setCarouselTitle(`${carousel.title}\n${carousel.date}`);
                    setSelectedDate(carousel.date); // This line is crucial if the carousel display is tied to the selectedDate state.
                }
            }
        }

        loadCarouselFromURL();
        // Since loadCarouselFromURL is defined inside the effect, you don't need to list it as a dependency
    }, []); // Empty dependency array means this effect runs once on mount



    // Update selectedCarousel when selectedDate changes
    useEffect(() => {
        if (selectedDate) {
            const carousel = comicCarousels.find(carousel => carousel.date === selectedDate);
            if (carousel) {
                setSelectedCarousel(carousel.comics);
                setCarouselTitle(`${carousel.title}\n${carousel.date}`);
            }
        }
    }, [selectedDate]);

    return (
        <>
            {/*<div className={"flex flex-col items-center justify-center"}>*/}
            {/*    <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>*/}
            {/*        Refresh for random comics!*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <div>
                {carouselTitle && (
                    <>
                        <h2 className={"pt-4 text-3xl font-semibold text-center"}>
                            {carouselTitle.split('\n')[0]}
                        </h2>
                        <p className={"text-2xl text-center py-3"}>
                            {carouselTitle.split('\n')[1]}
                        </p>
                    </>
                )}
                <EmblaCarousel slides={selectedDate ? selectedCarousel : randomCarousel}/>
            </div>

            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>
                    Select a date to see comics!
                </h1>

                {/*<div>*/}
                {/*    {comicCarousels.map((carousel, index) => (*/}
                {/*        <div key={index}>*/}
                {/*            <button onClick={() => setSelectedDate(carousel.date)}>*/}
                {/*                <div className={"pt-4 text-2xl font-semibold text-center"}>*/}
                {/*                    {carousel.date}*/}
                {/*                </div>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>

            <PickerCarousel
                loop={true}
                comics={comicCarousels}
                onSelectComic={(titleAndDate: any) => {
                    const [title, date] = titleAndDate.split('\n');
                    setCarouselTitle(titleAndDate)
                    setSelectedDate(date)
            }}
            />

        </>
    )
}