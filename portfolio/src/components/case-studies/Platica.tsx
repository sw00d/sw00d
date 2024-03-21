import clsx from "clsx"
import worldMap from '../../assets/world-map.png'
import speechBubble from '../../assets/speech-bubble.webp'
import Image from "next/image"
import { useEffect, useState } from "react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PlaticaCaseStudy = () => {
    const [speechBubbleLocations, setSpeechBubbles] = useState(bubbleLocations)
    const [bubbleAnimated, setBubbleAnimated] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setSpeechBubbles((prev) => {
                const newBubbles = [...prev]

                //always makes sure at least 2 bubbles are shown
                const randomIndex = Math.floor(Math.random() * prev.length)
                const randomIndex2 = Math.floor(Math.random() * prev.length)
                newBubbles[randomIndex].isShown = true
                newBubbles[randomIndex2].isShown = true
                return newBubbles
            })

        }, 5000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.speech-bubble',
            { scale: 0 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: '.platica-case-study',
                    start: 'top center', // Trigger animation when the top of '.speech-bubble' hits the center of the viewport
                    end: 'bottom top', // Animation will complete when the bottom of '.speech-bubble' exits the top of the viewport
                    toggleActions: 'play none play reverse',
                },
            }
        );
    }, []);

    const duration = 300
    const handleBubbleClick = () => {
        if (bubbleAnimated) return

        setBubbleAnimated(true)
        setTimeout(() => {
            setBubbleAnimated(false)
        }, duration);

    }
    return (
        <div
            className={clsx(
                'dark:bg-darkSurface bg-lightSurface rounded-xl relative platica-case-study',
                'md:p-10'
            )}
        >
            <Image
                src={worldMap}
                alt="World Map"
                className='absolute top-0 left-0 object-cover w-full h-full rounded-xl'
            />
            <div
                className={clsx(
                    'speech-bubble absolute z-0 opacity-1',
                    'w-[290px] h-[290px] origin-bottom-left',
                    // 'transition-all duration-500 ease-in-out scale-1',
                )}
                style={{
                    top: -100,
                    right: 0
                }}
                onClick={handleBubbleClick}
            >
                <Image
                    src={speechBubble}
                    alt='Speech Bubble'
                    fill
                    className={clsx(
                        `transition-all cursor-pointer duration-${duration} ease-in-out origin-bottom-left z-10`,
                        bubbleAnimated ? 'scale-90' : '',
                    )}
                />
            </div>
            {/* {
                speechBubbleLocations.map((location, index) => (
                    <div
                        key={index}
                        className={clsx(
                            'absolute z-0',
                            'w-5 h-5',
                            'transition-all duration-500 ease-in-out',
                            location.isShown ? 'scale-1' : 'scale-0'
                            // styles.speechBubble,
                        )}
                        style={{
                            top: location.y,
                            left: location.x
                        }}
                    >
                        <Image
                            src={speechBubble}
                            alt='Speech Bubble'
                            fill
                        />
                    </div>
                ))
            } */}
            <div
                className='relative z-10'
            >

                <div
                    className='flex items-center gap-2'
                >
                    <h3 className="text-4xl font-semibold dark:text-gray-200 mb-2">
                        <a
                            href="https://www.platica.xyz/"
                            className="transition dark:hover:text-gray-400"
                        >
                            Plática
                        </a>
                    </h3>

                    {/* White divider */}
                    <div className="w-[1px] h-10 bg-white" />

                    Real time, conversational translation
                </div>

                <div
                    className='w-1/2 mt-5 text-sm font-light'
                >
                    Powered by GPT-4, Platica is a platform that enhances the communication by integrating real time communication into public chatrooms. While this MVP is still primitive, it showcases the utility of the technology and is used by everybody from ESL instructors, to lovers who don’t share a common tongue. We plan to make this project more robust in the near future, putting together a native app and expanding to our current site’s functionality.
                </div>
            </div>

        </div>
    )
}

export default PlaticaCaseStudy


const bubbleLocations = [
    {
        isShown: false,
        x: 500,
        y: 50,
    },
    {
        isShown: false,
        x: 589.0086669921875,
        y: 158.4774169921875,
    },
    {
        isShown: false,
        x: 435.0086669921875,
        y: 263.4774169921875,
    },
    {
        isShown: false,
        x: 769.0086669921875,
        y: 20.4774169921875,
    },
    {
        isShown: false,
        x: 614.0086669921875,
        y: 64.4774169921875,
    },
    {
        isShown: false,
        x: 394.0086669921875,
        y: 86.4774169921875,
    },
    {
        isShown: false,
        // top left
        x: 106.0086669921875,
        y: 15.4774169921875,
    },
    {
        isShown: false,
        x: 201.0086669921875,
        y: 252.4774169921875,
    },
    {
        isShown: false,
        x: 675.0086669921875,
        y: 93.4774169921875,
    },
    {
        isShown: false,
        x: 717.0086669921875,
        y: 240.4774169921875,
    },
]