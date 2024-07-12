import React, {useEffect, useState} from 'react'
import { IosPickerItem } from './EmblaCarouselPickerItem'
import { comicCarousels} from "./comics";
import { ComicCarousel } from "./comics";
interface PickerCarouselProps {
    loop: boolean;
    comics: ComicCarousel[];
    onSelectComic: (titleAndDate: any) => void;
    selectedDate: string | null;
}


const PickerCarousel: React.FC<PickerCarouselProps> = ({ loop, comics, onSelectComic, selectedDate }) => {
    const [initialComicIndex, setInitialComicIndex] = useState<number | null>(null);


    useEffect(() => {
        if (selectedDate) {
            const index = comicCarousels.findIndex(carousel => carousel.date === selectedDate);
            setInitialComicIndex(index);
        }
    }, [selectedDate]);

    useEffect(() => {
        // Assuming `comicCarousels` is an array of comics
        const randomIndex = Math.floor(Math.random() * comicCarousels.length);
        setInitialComicIndex(randomIndex);
        // Set the initial comic based on randomIndex if needed
    }, []);

    return (
        <div className="emblaPicker pb-12">
            <IosPickerItem
                slideCount={comicCarousels.length}
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
