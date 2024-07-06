import React from 'react'
import { IosPickerItem } from './EmblaCarouselPickerItem'
import { comicCarousels} from "./comics";

const PickerCarousel = (props) => {
    const { loop } = props

    return (
        <div className="emblaPicker pb-12">
            <IosPickerItem
                slideCount={12}
                perspective="center"
                loop={loop}
                label=""
                comics={comicCarousels}
            />
        </div>
    )
}

export default PickerCarousel
