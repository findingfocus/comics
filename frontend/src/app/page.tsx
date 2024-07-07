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
    const [currentCarouselId, setCurrentCarouselId] = useState<number | null>(null)

    // Select a random comic carousel on initial render
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * comicCarousels.length);
        // Logic to find and display the carousel by ID
        // This might involve scrolling to the carousel, highlighting it, etc.
        setRandomCarousel(comicCarousels[randomIndex].comics);
        setCarouselTitle(`${comicCarousels[randomIndex].title}\n${comicCarousels[randomIndex].date}`);
        setCurrentCarouselId(comicCarousels[randomIndex].id);
    }, []);

    function generateComicURL(comicId: string): string {
        return `${window.location.origin}${window.location.pathname}?comic=${comicId}`;
    }

    async function copyComicURLToClipboard(comicId: string) {
        const url = generateComicURL(comicId);

        // First, try using the Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(url);
                alert('URL copied to clipboard!');
                return;
            } catch (err) {
                console.error('Failed to copy URL with Clipboard API:', err);
            }
        }

        // Fallback method for iOS and other browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px'; // Position off-screen
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Fallback: Failed to copy URL', err);
            alert('Failed to copy URL.');
        }

        document.body.removeChild(textArea);
    }

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
                setCurrentCarouselId(carousel.id);
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

            <button className={"bg-slate-900 hover:bg-blue-950 text-white px-4 py-2 rounded mt-4 mx-auto block"}
                    onClick={() => currentCarouselId !== null && copyComicURLToClipboard(currentCarouselId.toString())}>Share current comic
            </button>

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