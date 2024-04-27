import clsx from "clsx"
import speechBubble from '../../assets/speech-bubble.webp'
import Image from "next/image"
import { useMemo, useState } from "react"
import Particles from "@tsparticles/react";
import { useTheme } from "@/context/themeContext";
import CaseStudyLinks from "../CaseStudyLinks";

const PlaticaCaseStudy = () => {
    const [bubbleAnimated, setBubbleAnimated] = useState(false)
    const { theme } = useTheme();

    const options = useMemo(() => {
        return getOptions(`${theme}`)
    }, [theme]);

    const duration = 200
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
                'rounded-xl relative',
                'py-14 px-4 sm:p-10'
            )}
        >
            <Particles
                options={options}
                className='absolute w-full h-full left-0 top-0'
            />

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
                className='relative z-10 flex-1 text-left lg:w-1/2 xl:w-2/3'

            >
                <div
                    className='flex lg:items-center gap-2 flex-col lg:flex-row md:whitespace-nowrap'
                >
                    <h3 className="text-2xl md:text-4xl font-semibold dark:text-gray-200 mb-2 lg:border-r lg:border-darkBg dark:border-lightBg pr-2">
                        <a
                            href="https://www.platica.xyz/"
                            className="transition dark:hover:text-gray-400 flex"
                            target="_blank"
                            rel='noreferrer noopener'
                        >
                            <span className='flex lg:hidden mr-2'>
                                💬
                            </span>
                            Plática
                        </a>
                    </h3>

                    <div className='hidden lg:flex'>
                        Real time, conversational translation
                    </div>
                </div>

                <div
                    className='mt-5 text-sm font-light'
                >
                    Powered by GPT-4, Platica is a platform that enhances the communication by integrating real time communication into public chatrooms. While this MVP is still primitive, it showcases the utility of the technology and is used by everybody from ESL instructors, to lovers who don’t share a common tongue. We plan to make this project more robust in the near future, putting together a native app and expanding to our current site’s functionality.
                </div>

                <CaseStudyLinks
                    githubLink='https://www.github.com/sw00d'
                    projectLink='https://www.platica.xyz/'
                />
            </div>

        </div>
    )
}

export default PlaticaCaseStudy


const getOptions = (type: 'light' | 'dark') => ({
    fullScreen: false,
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            repulse: {
                distance: 50,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "blue",
        },
        links: {
            color: type === 'dark' ? '#fff' : "#FF5733",
            distance: 150,
            enable: true,
            opacity: type === 'dark' ? .4 : 1,
            width: 1,
        },
        move: {
            enable: true,
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 300,
        },
    },
    detectRetina: true,
})