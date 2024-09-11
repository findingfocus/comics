'use client'
import React, { useState, useEffect } from 'react';
import EmblaCarousel from "./EmblaCarousel";
import { comicCarousels, Comic } from "@/app/comics";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import PickerCarousel from './PickerCarousel'
import debounce from "debounce";

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedCarousel, setSelectedCarousel] = useState<Comic[]>([]);
    const [randomCarousel, setRandomCarousel] = useState<Comic[]>([]);
    const [carouselTitle, setCarouselTitle] = useState<string | undefined>(undefined);
    const [currentCarouselId, setCurrentCarouselId] = useState<number | null>(null)
    const [copyButtonText, setCopyButtonText] = useState<string>('Share current comic'); // Step 1: Button text state

    const debouncedUpdateURLToDefault = debounce(() => {
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
    }, 500); // 500 milliseconds delay

    useEffect(() => {
        setTimeout(() => {
            // Construct the URL without query parameters
            const urlWithoutParams = window.location.protocol + "//" + window.location.host + window.location.pathname;
            // Update the URL without reloading the page
            window.history.pushState({path: urlWithoutParams}, '', urlWithoutParams);
        }, 500); // Delay time in milliseconds
    }, []); // Empty dependency array ensures this runs once on component mount

        // Select a random comic carousel on initial render
    useEffect(() => {
        function loadInitialComic() {
            if (selectedDate) {
                const carousel = comicCarousels.find(carousel => carousel.date === selectedDate);
                if (carousel) {
                    setSelectedCarousel(carousel.comics);
                    setCarouselTitle(`${carousel.title}\n${carousel.date}`);
                    setCurrentCarouselId(carousel.id);
                }
            } else {
                // Select a random comic only if selectedDate is not set
                const randomIndex = Math.floor(Math.random() * comicCarousels.length);
                const randomComic = comicCarousels[randomIndex];
                setSelectedDate(randomComic.date);
                setSelectedCarousel(randomComic.comics);
                setCarouselTitle(`${randomComic.title}\n${randomComic.date}`);
                setCurrentCarouselId(randomComic.id);
            }
        }

        loadInitialComic();
    }, []); // The empty dependency array ensures this effect runs once on component mount

    function generateComicURL(comicId: string): string {
        return `${window.location.origin}${window.location.pathname}?comic=${comicId}`;
    }

    async function copyComicURLToClipboard(comicId: string) {
        const url = generateComicURL(comicId);

        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(url);
                setCopyButtonText('Link copied to clipboard!'); // Step 2: Update button text on success
                setTimeout(() => setCopyButtonText('Share current comic'), 3000); // Step 3: Reset button text after 3 seconds
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
            setCopyButtonText('Link copied to clipboard!'); // Step 2: Update button text on success
            setTimeout(() => setCopyButtonText('Share current comic'), 3000); // Step 3: Reset button text after 3 seconds
        } catch (err) {
            console.error('Fallback: Failed to copy URL', err);
            alert('Failed to copy URL.');
        }
        document.body.removeChild(textArea);
    }

    useEffect(() => {
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
                setTimeout(() => {
                    if ('scrollBehavior' in document.documentElement.style) { // Checks if the browser supports smooth scroll
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else { // Fallback for browsers that do not support smooth scroll
                        window.scrollTo(0, 0);
                    }
                }, 800);
            }
        }
    }, [selectedDate]);


    const handleFeelingLuckyClick = () => {
        // Select a random comic
        const randomIndex = Math.floor(Math.random() * comicCarousels.length);
        const randomComic = comicCarousels[randomIndex];

        // Update state with selected comic's details
        setSelectedDate(randomComic.date);
        setSelectedCarousel(randomComic.comics);
        setCarouselTitle(`${randomComic.title}\n${randomComic.date}`);
        setCurrentCarouselId(randomComic.id);

        // Delay scrolling to the top to avoid conflicts
        setTimeout(() => {
            document.querySelector('.picker-container')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo(0, 0);
            }
        }, 1000);
    };


    function handlePrevClick() {
        const currentIndex = comicCarousels.findIndex(carousel => carousel.date === selectedDate);
        const newIndex = currentIndex - 1 < 0 ? comicCarousels.length - 1 : currentIndex - 1;
        const newCarousel = comicCarousels[newIndex];
        setSelectedDate(newCarousel.date);
        setSelectedCarousel(newCarousel.comics);
        setCarouselTitle(`${newCarousel.title}\n${newCarousel.date}`);
        setCurrentCarouselId(newCarousel.id);
    }

    function handleNextClick() {
        const currentIndex = comicCarousels.findIndex(carousel => carousel.date === selectedDate);
        const newIndex = (currentIndex + 1) % comicCarousels.length;
        const newCarousel = comicCarousels[newIndex];
        setSelectedDate(newCarousel.date);
        setSelectedCarousel(newCarousel.comics);
        setCarouselTitle(`${newCarousel.title}\n${newCarousel.date}`);
        setCurrentCarouselId(newCarousel.id);
    }

    return (
        <>
            <div className={"mx-auto"}>
                {carouselTitle && (
                    <div className="flex items-center justify-center space-x-4 max-w-xl md:max-w-3xl mx-auto">
                        <button
                            aria-label="Previous"
                            className="focus:outline-none"
                            onClick={handlePrevClick}
                        >
                            <FaAngleLeft className="text-6xl"/>
                        </button>
                        <div className="flex-grow text-center">
                            <h2 className="text-3xl font-semibold pt-4">
                            {carouselTitle.split('\n')[0]}
                            </h2>
                            <p className="text-2xl py-3">
                                {carouselTitle.split('\n')[1]}
                            </p>
                        </div>

                        <button
                            aria-label="Previous"
                            className="focus:outline-none"
                            onClick={handleNextClick}
                        >
                            <FaAngleRight className="text-6xl"/>
                        </button>
                    </div>
                )}
                <EmblaCarousel slides={selectedDate ? selectedCarousel : randomCarousel}/>
            </div>

            <button className={"cursor-pointer bg-slate-700 hover:bg-sky-800 text-white px-4 py-2 rounded-xl mt-6 mx-auto block"}
                    onClick={() => currentCarouselId !== null && copyComicURLToClipboard(currentCarouselId.toString())}>{copyButtonText}
            </button>

            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 pt-8 pb-16"}>
                    Select a comic!
                </h1>
            </div>

            <div className={"-translate-y-10"}>
                <PickerCarousel
                    loop={true}
                    comics={comicCarousels}
                    onSelectComic={(titleAndDate: any) => {
                        const [title, date] = titleAndDate.split('\n');
                        setCarouselTitle(titleAndDate)
                        setSelectedDate(date)
                        debouncedUpdateURLToDefault()
                    }}
                    selectedDate={selectedDate} // Pass selectedDate as a prop
                />
            </div>
            <div className={"-translate-y-8"}>
                <button
                    className={"cursor-pointer bg-slate-700 hover:bg-sky-800 text-white px-4 py-2 rounded-xl mt-6 mx-auto block -translate-y-12"}
                    onClick={handleFeelingLuckyClick}>
                    Feeling Lucky?
                </button>
            </div>
            <footer className={"text-center py-6 -translate-y-4"}>Original art by Paul Thompson<br/>
                <div className={"flex flex-row justify-center gap-4"}>
                    <a href={"https://findingfocus.dev"} className={"hover:text-cyan-500"} target="_blank" rel="noreferrer noopener">findingfocus.dev</a>
                    <a href={"https://findingfocus.xyz"} className={"hover:text-cyan-500"} target="_blank" rel="noreferrer noopener">findingfocus.xyz</a>
                    <a href={"https://www.github.com/findingfocus"} className={"hover:text-cyan-500"} target="_blank" rel="noreferrer noopener">github</a>
                </div>
            </footer>
        </>
    )
}