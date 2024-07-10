'use client'
import React, { useState, useEffect } from 'react';
import EmblaCarousel from "./EmblaCarousel";
import { comicCarousels, Comic } from "@/app/comics";

import PickerCarousel from './PickerCarousel'

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedCarousel, setSelectedCarousel] = useState<Comic[]>([]);
    const [randomCarousel, setRandomCarousel] = useState<Comic[]>([]);
    const [carouselTitle, setCarouselTitle] = useState<string | undefined>(undefined);
    const [currentCarouselId, setCurrentCarouselId] = useState<number | null>(null)
    const [copyButtonText, setCopyButtonText] = useState<string>('Share current comic'); // Step 1: Button text state


    const updateURLToDefault = () => {
        const defaultURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
        if (window.location.origin.startsWith('https') || window.location.hostname === 'localhost') {
            try {
                window.history.pushState({path: defaultURL}, '', defaultURL);
            } catch (error) {
                console.error('Failed to update URL to default:', error);
            }
        } else {
            console.warn('Operation requires a secure context (HTTPS) or running locally');
        }
    };


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
                setCopyButtonText('Link copied to clipboard!'); // Step 2: Update button text on success
                setTimeout(() => setCopyButtonText('Share current comic'), 3000); // Step 3: Reset button text after 3 seconds
                return;
                // alert('URL copied to clipboard!');
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
            setCopyButtonText('Link copied to clipboard!'); // Step 2: Update button text on success
            setTimeout(() => setCopyButtonText('Share current comic'), 3000); // Step 3: Reset button text after 3 seconds
            // alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Fallback: Failed to copy URL', err);
            alert('Failed to copy URL.');
        }
        document.body.removeChild(textArea);
    }

    useEffect(() => {
        // Set the button text to its default state when the carousel changes
        setCopyButtonText('Share current comic');
    }, [currentCarouselId]);

    useEffect(() => {
        function loadCarouselFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const comicId = urlParams.get('comic');
            if (comicId) {
                const carousel = comicCarousels.find(c => c.id.toString() === comicId);
                if (carousel) {
                    setSelectedCarousel(carousel.comics);
                    setCarouselTitle(`${carousel.title}\n${carousel.date}`);
                    setSelectedDate(carousel.date);
                }
            }
        }

        loadCarouselFromURL();
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

            <button className={"bg-slate-900 hover:bg-blue-950 text-white px-4 py-2 rounded-xl mt-6 mx-auto block"}
                    onClick={() => currentCarouselId !== null && copyComicURLToClipboard(currentCarouselId.toString())}>{copyButtonText}
            </button>

            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-8"}>
                    Select a comic!
                </h1>
            </div>

            <div className={"-translate-y-20"}>
                <PickerCarousel
                    loop={true}
                    comics={comicCarousels}
                    onSelectComic={(titleAndDate: any) => {
                        const [title, date] = titleAndDate.split('\n');
                        setCarouselTitle(titleAndDate)
                        setSelectedDate(date)
                        updateURLToDefault()
                    }}
                />
            </div>
            <footer className={"text-center py-6 -translate-y-4"}>Original art by Paul Thompson<br/><a href={"https://findingfocus.dev"} className={"hover:text-cyan-600"}>findingfocus.dev</a></footer>
        </>
    )
}