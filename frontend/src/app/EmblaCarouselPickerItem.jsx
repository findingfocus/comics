import React, { useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {comicCarousels} from "@/app/comics";

const CIRCLE_DEGREES = 360
const WHEEL_ITEM_SIZE = 18
const WHEEL_ITEM_COUNT = 64
const WHEEL_ITEMS_IN_VIEW = 4

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW
export const WHEEL_RADIUS = Math.round(
    WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)
)

const isInView = (wheelLocation, slidePosition) =>
    Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES

const setSlideStyles = (emblaApi, index, loop, slideCount, totalRadius) => {
    const slideNode = emblaApi.slideNodes()[index]
    const wheelLocation = emblaApi.scrollProgress() * totalRadius
    const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius
    const positionLoopStart = positionDefault + totalRadius
    const positionLoopEnd = positionDefault - totalRadius

    let inView = false
    let angle = index * -WHEEL_ITEM_RADIUS

    if (isInView(wheelLocation, positionDefault)) {
        inView = true
    }

    if (loop && isInView(wheelLocation, positionLoopEnd)) {
        inView = true
        angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS
    }

    if (loop && isInView(wheelLocation, positionLoopStart)) {
        inView = true
        angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS
    }

    if (inView) {
        slideNode.style.opacity = '1'
        slideNode.style.transform = `translateY(-${
            index * 100
        }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`
    } else {
        slideNode.style.opacity = '0'
        slideNode.style.transform = 'none'
    }
}

export const setContainerStyles = (emblaApi, wheelRotation) => {
    emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`
}

export const IosPickerItem = (props) => {
    const { slideCount, perspective, label, loop = false, comics, initialIndex} = props
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop,
        axis: 'y',
        dragFree: true,
        containScroll: false,
        watchSlides: false
    })
    const rootNodeRef = useRef(null)
    const totalRadius = slideCount * WHEEL_ITEM_RADIUS
    const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS
    const slides = Array.from(Array(slideCount).keys())

    const inactivateEmblaTransform = useCallback((emblaApi) => {
        if (!emblaApi) return
        const { translate, slideLooper } = emblaApi.internalEngine()
        translate.clear()
        translate.toggleActive(false)
        slideLooper.loopPoints.forEach(({ translate }) => {
            translate.clear()
            translate.toggleActive(false)
        })
    }, [])

    const rotateWheel = useCallback(
        (emblaApi) => {
            const rotation = slideCount * WHEEL_ITEM_RADIUS - rotationOffset
            const wheelRotation = rotation * emblaApi.scrollProgress()
            setContainerStyles(emblaApi, wheelRotation)
            emblaApi.slideNodes().forEach((_, index) => {
                setSlideStyles(emblaApi, index, loop, slideCount, totalRadius)
            })
        },
        [slideCount, rotationOffset, totalRadius]
    )

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('pointerUp', (emblaApi) => {
            const { scrollTo, target, location } = emblaApi.internalEngine()
            const diffToTarget = target.get() - location.get()
            const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1
            const distance = diffToTarget * factor
            scrollTo.distance(distance, true)
        })

        emblaApi.on('scroll', rotateWheel)

        emblaApi.on('reInit', (emblaApi) => {
            inactivateEmblaTransform(emblaApi)
            rotateWheel(emblaApi)
        })

        inactivateEmblaTransform(emblaApi)
        rotateWheel(emblaApi)
    }, [emblaApi, inactivateEmblaTransform, rotateWheel])


    useEffect(() => {
        const onSelectScroll = () => {
            const closestIndex = emblaApi.selectedScrollSnap();
            const focusedComic = comics[closestIndex];
            if (focusedComic && typeof props.onSelectComic === 'function') {
                props.onSelectComic(`${focusedComic.title}\n${focusedComic.date}`);
            }
        };

        if (emblaApi) {
            emblaApi.on('scroll', onSelectScroll);
        }

        return () => {
            if (emblaApi) {
                emblaApi.off('scroll', onSelectScroll);
            }
        };
    }, [emblaApi, comics, props.onSelectComic]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const comicId = urlParams.get('comic'); // Extract the comicId from the URL

        let indexToScrollTo = initialIndex; // Default to initialIndex if no comicId is found or if the comicId doesn't match

        if (comicId) {
            const comicIndex = comics.findIndex(comic => comic.id.toString() === comicId);
            if (comicIndex !== -1) {
                indexToScrollTo = comicIndex; // Update indexToScrollTo if a matching comic is found
            }
        }

        if (emblaApi && indexToScrollTo !== null) {
            emblaApi.scrollTo(indexToScrollTo, false); // Scroll to the determined index without animation
        }
    }, [emblaApi, comics, initialIndex]);

    return (
        <div className="embla__ios-picker">
            <div className="embla__ios-picker__scene" ref={rootNodeRef}>
                <div
                    className={`embla__ios-picker__viewport embla__ios-picker__viewport--perspective-${perspective}`}
                    ref={emblaRef}
                >
                    <div className="embla__ios-picker__container">
                        {comics.map((comic, index) => (
                            <div className="embla__ios-picker__slide" key={comic.id}>
                                <span className="comic-date">{comic.date}</span>
                                <span className="comic-title">{comic.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="embla__ios-picker__label">{label}</div>
        </div>
    )
}
