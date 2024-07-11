import React, {useEffect, useState} from 'react'
import { IosPickerItem } from './EmblaCarouselPickerItem'
import {ComicCarousel, comicCarousels} from "./comics";

interface PickerCarouselProps {
    loop: boolean;
    comics: ComicCarousel[];
    onSelectComic: (titleAndDate: string) => void;
    selectedDate: string | null;
}

const PickerCarousel = ({ loop, comics, onSelectComic, selectedDate } : PickerCarouselProps)=> {
    const [initialComicIndex, setInitialComicIndex] = useState<number | null>(null);

    useEffect(() => {
        if (selectedDate) {
            const index = comics.findIndex(carousel => carousel.date === selectedDate);
            setInitialComicIndex(index);
        }
    }, [selectedDate, comics]);

    useEffect(() => {
        // Assuming `comicCarousels` is an array of comics
        const randomIndex = Math.floor(Math.random() * comics.length);
        setInitialComicIndex(randomIndex);
        // Set the initial comic based on randomIndex if needed
    }, [comics]);

    return (
        <div className="emblaPicker pb-12">
            <IosPickerItem
                slideCount={12}
                perspective="center"
                loop={loop}
                label=""
                comics={comicCarousels}
                onSelectComic={onSelectComic}
                initialIndex={initialComicIndex} // Pass the initial index to IosPicker
            />
        </div>
    )
}

export default PickerCarousel
