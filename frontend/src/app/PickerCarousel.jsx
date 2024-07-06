import React from 'react'
import { IosPickerItem } from './EmblaCarouselPickerItem'

const PickerCarousel = (props) => {
    const { loop } = props

    return (
        <div className="emblaPicker">
            <IosPickerItem
                slideCount={24}
                perspective="center"
                loop={loop}
                label="hours"
            />
        </div>
    )
}

export default PickerCarousel
