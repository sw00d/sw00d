import clsx from "clsx"
import worldMap from '../../assets/world-map.png'
import speechBubble from '../../assets/speech-bubble.webp'
import Image from "next/image"
import { useEffect, useState } from "react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PlaticaCaseStudy = () => {
    const [bubbleAnimated, setBubbleAnimated] = useState(false)

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.fromTo('.speech-bubble',
    //         { scale: 0 },
    //         {
    //             scale: 1,
    //             duration: .2,
    //             scrollTrigger: {
    //                 trigger: '.platica-case-study',
    //                 start: 'top center', // Trigger animation when the top of '.speech-bubble' hits the center of the viewport
    //                 end: 'bottom top', // Animation will complete when the bottom of '.speech-bubble' exits the top of the viewport
    //                 toggleActions: 'play none play reverse',
    //             },
    //         }
    //     );
    // }, []);

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
                'dark:shadow-caseStudyDark shadow-caseStudyLight dark:bg-darkSurface bg-lightSurface dark:bg-opacity-10 bg-opacity-10',
                'rounded-xl relative platica-case-study',
                'p-4 sm:p-10'
            )}
        >
            {/* <Image
                src={worldMap}
                alt="World Map"
                className='absolute top-0 left-0 object-cover w-full h-full rounded-xl'
            /> */}

            <div
                className={clsx(
                    'speech-bubble absolute z-0 opacity-1',
                    'w-[290px] h-[290px] origin-bottom-left',
                    'hidden lg:flex'
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

            <div
                className='relative z-10 flex-1 text-center sm:text-left lg:w-1/2 xl:w-2/3'

            >
                <div
                    className='flex lg:items-center gap-2 flex-col lg:flex-row md:whitespace-nowrap'
                >
                    <h3 className="text-2xl md:text-4xl font-semibold dark:text-gray-200 mb-2 lg:border-r lg:border-white pr-2">
                        <a
                            href="https://www.platica.xyz/"
                            className="transition dark:hover:text-gray-400"
                        >
                            Plática
                        </a>
                    </h3>

                    {/* White divider */}
                    <div className='hidden lg:flex'>

                        Real time, conversational translation
                    </div>
                </div>

                <div
                    className='mt-5 text-sm font-light'
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