import React, {useEffect, useState} from 'react'
import { IosPickerItem } from './EmblaCarouselPickerItem'
import { comicCarousels} from "./comics";

const PickerCarousel = (props) => {
    const { loop } = props

    const [initialComicIndex, setInitialComicIndex] = useState(null);

    useEffect(() => {
        // Assuming `comicCarousels` is an array of comics
        const randomIndex = Math.floor(Math.random() * comicCarousels.length);
        setInitialComicIndex(randomIndex);
        // Set the initial comic based on randomIndex if needed
    }, []);

    return (
        <div className="emblaPicker pb-12">
            <IosPickerItem
                slideCount={12}
                perspective="center"
                loop={loop}
                label=""
                comics={comicCarousels}
                onSelectComic={props.onSelectComic}
                initialIndex={initialComicIndex} // Pass the initial index to IosPicker
            />
        </div>
    )
}

export default PickerCarousel
