import clsx from "clsx"
import bgPattern from '../../assets/mepop-bg.webp'
import { use, useCallback, useEffect, useRef, useState } from "react"
import styles from './animations.module.css'

const MepopCaseStudy = () => {
    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger);
        // gsap.to('.background-image', {
        //     scrollTrigger: {
        //         trigger: '.background-image',
        //         scrub: true, // Makes the animation smooth and links it directly to scroll position
        //         start: 'top bottom', // Start the animation when the top of the image hits the bottom of the viewport
        //         end: 'bottom top' // End the animation when the bottom of the image hits the top of the viewport
        //     },
        //     y: -105, // Adjust the value to control the amount of vertical shift
        // });
    }, [])

    return (
        <div
            className={clsx(
                'dark:bg-darkSurface bg-lightSurface rounded-xl relative mt-[500px]',
                'md:p-10 overflow-hidden h-[330px]'
            )}
            style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="flex gap-10 items-center">

                <div className='flex-1'>
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
                        className='mt-5 text-sm font-light'
                    >
                        Mepop revolutionizes sales tracking for Depop's 11 million users, offering an intuitive tool to analyze profits from CSV files, bypassing the lack of a Depop API. It provides personalized insights for you individual shop -- which items sells best, on which days, to which demographic. Born from personal need and market demand, it simplifies financial oversight for sellers. Created over 5 years ago, I'm fully hands off of this project, and it still continues to serve its ever-growing userbase.
                    </div>
                </div>
                <div
                    className={clsx(
                        'w-[340px] h-[220px] bg-highlight bg-opacity-10 flex-1 relative overflow-hidden',
                        'border-b-2 border-highlight border-l-2 border-highlight rounded-bl rounded-tr rounded',

                    )}
                >
                    <div
                        className={clsx(
                            'absolute w-full bottom-0 left-[20px]',
                            styles['x-axis-animation']
                        )}
                    >
                        {
                            Array(50).fill(0).map((_, i) => (
                                // x axis lines
                                <div
                                    key={i}
                                    className='w-[1px] h-[8px] bg-highlight absolute'
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
                            'absolute h-full bottom-0 left-[8px]',
                            // styles['y-axis-animation']
                        )}
                    >
                        {
                            Array(50).fill(0).map((_, i) => (
                                // x axis lines
                                <div
                                    key={i}
                                    className='h-[1px] w-[8px] bg-highlight absolute'
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

        </div>
    )
}

export default MepopCaseStudy



const LineChartAnimation = () => {
    const getPointX = (i: number) => 300 - i * 10
    const [points, setPoints] = useState(() => {
        // Initialize points along the Y-axis
        return Array.from({ length: 40 }, (_, i) => ({ x: getPointX(i), y: 125 }));
    });

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

    const setHeadPositionition = (e) => {
        // set x and y of headPos based on the div position
        const rect = e.target.getBoundingClientRect();
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

                <svg width="100%" height="219">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#f1c40f', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <polyline
                        points={points.map(p => `${p.x},${p.y}`).join(' ')}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                    />
                    <circle cx={points[0].x} cy={points[0].y} r="2" fill="white" />
                </svg>
            </div>
        </>
    );
};

