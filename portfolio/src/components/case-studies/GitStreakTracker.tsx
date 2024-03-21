import clsx from "clsx"
import bgPattern from '../../assets/mepop-bg.webp'
import Image from "next/image"
import { useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const GitStreakTracker = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.background-image', {
            scrollTrigger: {
                trigger: '.background-image',
                scrub: true, // Makes the animation smooth and links it directly to scroll position
                start: 'top bottom', // Start the animation when the top of the image hits the bottom of the viewport
                end: 'bottom top' // End the animation when the bottom of the image hits the top of the viewport
            },
            y: -105, // Adjust the value to control the amount of vertical shift
        });
    }, [])

    return (
        <div
            className={clsx(
                'dark:bg-darkSurface bg-lightSurface rounded-xl relative mt-[500px]',
                'md:p-10 overflow-hidden h-[330px]'
            )}
        >

            <Image
                src={bgPattern}
                alt="Background Pattern"
                className='absolute top-0 left-0 w-[135%] h-[135%] rounded-xl background-image'
            />

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
                            Mepop
                        </a>
                    </h3>

                    {/* White divider */}
                    <div className="w-[1px] h-10 bg-white" />

                    Analytics for Depop Sellers
                </div>

                <div
                    className='w-1/2 mt-5 text-sm font-light'
                >
                    Mepop revolutionizes sales tracking for Depop's 11 million users, offering an intuitive tool to analyze profits from CSV files, bypassing the lack of a Depop API. It provides personalized insights for you individual shop -- which items sells best, on which days, to which demographic. Born from personal need and market demand, it simplifies financial oversight for sellers. Created over 5 years ago, I'm fully hands off of this project, and it still continues to serve its ever-growing userbase.
                </div>
            </div>

        </div>
    )
}

export default GitStreakTracker

