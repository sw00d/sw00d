import clsx from "clsx"
import bgPattern from '../../assets/mepop-bg.webp'
import { useCallback, useEffect, useRef, useState } from "react"
import styles from './animations.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";

const MepopCaseStudy = () => {
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
                'dark:shadow-caseStudyDark shadow-caseStudyLight dark:bg-darkSurface bg-lightSurface dark:bg-opacity-10 bg-opacity-10',
                'py-14 px-4 sm:p-10 overflow-hidden h-auto lg:h-[330px] rounded-xl relative'
            )}
        >
            <Image
                src={bgPattern}
                alt="Background Pattern"
                className='absolute top-0 left-0 w-[135%] h-[135%] rounded-xl background-image'
            />

            <div className="flex lg:flex-row flex-col gap-10 items-center">

                <div className='flex-1 text-left relative'>
                    <div
                        className='flex lg:items-center gap-2 flex-col lg:flex-row md:whitespace-nowrap'
                    >
                        <h3 className="text-2xl md:text-4xl font-semibold dark:text-gray-200 mb-2 lg:border-r lg:border-highlightSecondary dark:border-lightBg pr-2">
                            <a
                                href="https://www.mepop.com"
                                className="transition dark:hover:text-gray-400"
                            >
                                Mepop
                            </a>
                        </h3>

                        {/* White divider */}
                        <div className='hidden lg:flex'>

                            Analytics for Depop Sellers
                        </div>
                    </div>

                    <div
                        className='mt-5 text-sm font-light'
                    >
                        Mepop revolutionizes sales tracking for Depop's 11 million users, offering an intuitive tool to analyze profits from CSV files, bypassing the lack of a Depop API. It provides personalized insights for you individual shop -- which items sells best, on which days, to which demographic. Born from personal need and market demand, it simplifies financial oversight for sellers. Created over 5 years ago, I'm fully hands off of this project, and it still continues to serve its ever-growing userbase.
                    </div>
                </div>

                <div
                    className={clsx(
                        // mobile
                        'w-full h-full opacity-50 left-0 bottom-0 absolute',
                        // tablet and up
                        'lg:w-[340px] lg:h-[220px] lg:opacity-100 lg:relative',
                        // colors n stuff
                        'border-b-2 border-highlightSecondary dark:border-highlight lg:border-l-2 rounded-bl rounded-tr rounded',
                        'bg-highlightSecondary dark:bg-highlight dark:bg-opacity-10 bg-opacity-10 flex-1 overflow-hidden',
                    )}
                >
                    <div
                        className={clsx(
                            'absolute w-full bottom-0 left-[20px]',
                            styles['x-axis-animation']
                        )}
                    >
                        {
                            Array(60).fill(0).map((_, i) => (
                                // x axis lines
                                <div
                                    key={i}
                                    className='w-[1px] h-[8px] bg-highlightSecondary dark:bg-highlight absolute'
                                    style={{
                                        top: '-8px',
                                        left: `${i * 20}px`,
                                    }}
                                />
                            ))
                        }
                    </div>

                    <LineChartAnimation />

                    <div
                        className={clsx(
                            'absolute h-full bottom-0 left-[8px] hidden lg:flex',
                            // styles['y-axis-animation']
                        )}
                    >
                        {
                            Array(20).fill(0).map((_, i) => (
                                // x axis lines
                                <div
                                    key={i}
                                    className='h-[1px] w-[8px] bg-highlightSecondary dark:bg-highlight absolute'
                                    style={{
                                        top: `${i * 20}px`,
                                        left: '-8px',
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MepopCaseStudy



const LineChartAnimation = () => {
    const getPointX = (i: number) => 300 - i * 10
    const [points, setPoints] = useState(() => {
        // Initialize points along the Y-axis
        return Array.from({ length: 40 }, (_, i) => ({ x: getPointX(i), y: 125 }));
    });

    const { theme } = useTheme();

    const [isHovering, setIsHovering] = useState(false);
    const requestIdRef = useRef();

    const [headPos, setHeadPosition] = useState({ x: getPointX(0), y: 150 });

    const [targetHeadPos, setTargetHeadPos] = useState({ x: getPointX(0), y: 150 });

    const animateLine = useCallback(() => {
        requestAnimationFrame(() => {
            setPoints(prevPoints => {
                // Update points by moving each towards the point ahead, except for the first one
                const newPoints = prevPoints.map((point, i, arr) => {
                    if (i === 0) { // First point moves independently
                        return { x: getPointX(0), y: headPos.y - 10 }; // Oscillating head
                    }
                    // Other points follow the one ahead with some lag
                    const dx = arr[i - 1].x - point.x;
                    const dy = arr[i - 1].y - point.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const moveY = (dy / dist) * 2; // Speed of y movement
                    return {
                        x: getPointX(i),
                        y: point.y + moveY
                    };
                });
                return newPoints;
            });
        });
    }, [headPos])

    const setHeadPositionition = (e: React.MouseEvent<HTMLDivElement>) => {
        // set x and y of headPos based on the div position
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top;  //y position within the element.
        setHeadPosition({ x, y });
        setIsHovering(true);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            requestAnimationFrame(animateLine);
        }, 3); // Call animateLine every 10ms

        return () => {
            clearInterval(intervalId); // Clean up on component unmount
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
        };
    }, [animateLine]);



    const incrementHeadToTargetHead = useCallback(() => {
        setHeadPosition(prev => {
            const dx = targetHeadPos.x - prev.x;
            const dy = targetHeadPos.y - prev.y;
            if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                return targetHeadPos;
            }
            return {
                x: prev.x + dx / 40,
                y: prev.y + dy / 40,
            }
        });
    }, [targetHeadPos])

    useEffect(() => {
        if (!isHovering) {
            // if ishovering, increment headPos to targetHeadPos every 10ms until headPos is equal to targetHeadPos
            const intervalId = setInterval(() => {
                incrementHeadToTargetHead()
            }, 10);

            return () => {
                clearInterval(intervalId);
            }
        } else {
            const movementInterval = setInterval(() => {
                setHeadPosition(prev => ({
                    x: prev.x, // Keep the X position constant or apply slight horizontal movement if needed
                    y: prev.y + (Math.random() - 0.5) * 2 // Slight vertical movement to keep the line dynamic
                }));
            }, 50); // Adjust interval as needed for smoother or more noticeable movement

            return () => clearInterval(movementInterval);
        }
    }, [isHovering, targetHeadPos])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTargetHeadPos(prev => {
                return {
                    ...prev,
                    // if y is greater than 200, decrement by 100
                    // if y is less than 200, increment by 20
                    y: prev.y > 100 ? prev.y - 50 : prev.y + 25
                }
            })
        }, 500);

        return () => {
            clearInterval(intervalId);
        }
    }, [])


    return (
        <>
            <div
                className="w-full h-full relative"
            >

                {/* An overlay div so we're always hover this div and not the line */}
                <div
                    onMouseMove={setHeadPositionition}
                    onMouseLeave={() => setIsHovering(false)}
                    className='absolute w-full h-full left-0 top-0'
                />

                <svg width="100%" height="100%" className='-left-[100px] sm:left-0 absolute sm:static'>
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: theme === 'light' ? '#fff' : '#f1c40f', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: theme === 'light' ? '#FF5733' : '#fff', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <polyline
                        points={points.map(p => `${p.x},${p.y}`).join(' ')}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                    />

                    <circle cx={points[0].x} cy={points[0].y} r="2" fill={theme === 'dark' ? "white" : '#FF5733'} />
                </svg>
            </div>
        </>
    );
};

