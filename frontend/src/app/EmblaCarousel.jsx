'use client'
import React, { useEffect, useState } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const restartVideoOnSelect = () => {
    const videos = document.querySelectorAll('.embla__slide__video');
    videos.forEach(video => video.pause());

    const selectedIndex = emblaApi.selectedScrollSnap();
    const selectedSlide = slides[selectedIndex];
    if (selectedSlide && selectedSlide.type === 'video') {
      const video = document.querySelector(`.embla__slide:nth-child(${selectedIndex + 1}) .embla__slide__video`);
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0, false);
      emblaApi.on('select', restartVideoOnSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off('select', restartVideoOnSelect);
      }
    };
  }, [emblaApi, slides]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     // Scroll to the first slide without animation
  //     emblaApi.scrollTo(0, false);
  //
  //     // Reset to the first slide on reInit
  //     const onReInit = () => emblaApi.scrollTo(0, false);
  //     emblaApi.on('reInit', onReInit);
  //
  //     // Cleanup: Remove event listener on component unmount
  //     return () => emblaApi.off('reInit', onReInit);
  //   }
  // }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide.type === 'video' ? (
                  <video src={slide.src} className="embla__slide__video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%'}}></video>
              ) : (
              <img src={slide.src} alt={slide.alt} className="embla__slide__img"/>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls" style={{ marginLeft: '1rem' }}>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots" style={{ marginRight: '1rem' }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
