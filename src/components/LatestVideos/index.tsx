"use client";
import React, { MouseEvent, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image';
import "./style.css"
import Link from 'next/link';

const LatestVideos = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        // mode: "free",
        loop: false,
        breakpoints: {
            "(min-width: 300px)": {
              slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 767px)": {
              slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 992px)": {
              slides: { perView: 4, spacing: 10 },
            }, 
        },
        slides: {
          perView: 4,
          spacing: 15,
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
      })
  return (
    <div className='allVideos'>

        <h4>Latest <b>Videos</b></h4>
        {loaded && instanceRef.current && (
          <div className='nextPrevs'>
            <Arrow
              left
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}

              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                instanceRef.current?.next()
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}

        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <Link href={"/"}><Image src={"/assets/img/maxresdefault.png"} alt='' width={250} height="140" /></Link>
               
            </div>
            <div className="keen-slider__slide number-slide2">
                 <Link href={"/"}><Image src={"/assets/img/maxresdefault2.png"} alt='' width={250} height="140" /></Link>
            </div>
            <div className="keen-slider__slide number-slide3">
                 <Link href={"/"}><Image src={"/assets/img/maxresdefault3.png"} alt='' width={250} height="140" /></Link>
            </div>
            <div className="keen-slider__slide number-slide4">
                 <Link href={"/"}><Image src={"/assets/img/maxresdefault4.png"} alt='' width={250} height="140" /></Link>
            </div>
            <div className="keen-slider__slide number-slide5">
                 <Link href={"/"}><Image src={"/assets/img/maxresdefault2.png"} alt='' width={250} height="140" /></Link>
            </div>
            <div className="keen-slider__slide number-slide6">
                 <Link href={"/"}><Image src={"/assets/img/maxresdefault3.png"} alt='' width={250} height="140" /></Link>
            </div>
        </div>
        <p>nd try to won !</p>

    </div>
  )
}
function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
  }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <button type='button' onClick={props.onClick}> 
            <svg 
                className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {props.left && (
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                )}
                {!props.left && (
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                )}
            </svg>
        </button>
    )
  }
  
export default LatestVideos
