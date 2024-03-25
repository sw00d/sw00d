import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GitStreakTracker = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cellHeight, setCellHeight] = useState(0);
    const [gridMatrix, setGridMatrix] = useState([] as any[][]);

    const selectBlock = (col: number, row: number) => {
        const newGridMatrix = gridMatrix.map((column, j) => {
            return column.map((block, i) => {
                if (j === col && i === row) {
                    return {
                        ...block,
                        selected: !block.selected
                    }
                } else {
                    return block
                }
            })
        })
        setGridMatrix(newGridMatrix)
    }
    useEffect(() => {

        const rows = Array(7).fill(0);
        const columns = Array(70).fill(0);

        const getSelected = (i: number, j: number) => {
            // we want randomized selected cells unless its the last three blocks
            if (
                i === rows.length - 1 && j === columns.length - 1 ||
                i === rows.length - 2 && j === columns.length - 1 ||
                i === rows.length - 3 && j === columns.length - 1 ||
                i === rows.length - 4 && j === columns.length - 1
            ) {
                // first 4 are always selected
                return true;
            } else {
                return Math.random() > .5;
            }
        }

        setGridMatrix(columns.map((_, j) => {
            return rows.map((_, i) => {
                return {
                    x: i,
                    y: j,
                    selected: getSelected(i, j)
                }
            })
        }))
    }, [])

    const streakCount = useMemo(() => {
        // streakCount is the number of blocks in a row that are selected starting with the last block
        let count = 0;

        // loop backwards through columns
        for (let i = gridMatrix.length - 1; i >= 0; i--) {
            // loop backwards through rows
            for (let j = gridMatrix[i].length - 1; j >= 0; j--) {
                if (gridMatrix[i][j].selected) {
                    count++;
                } else {
                    return count
                }
            }
        }

        return count
    }, [gridMatrix]);

    const getBgColor = (col: number, row: number) => {
        const totalBlock = gridMatrix.length * gridMatrix[0].length;
        const block = gridMatrix[col][row];
        const blockNumber = col * gridMatrix[0].length + row;

        return totalBlock - streakCount <= blockNumber ? 'bg-[#bc3e3e]' : block.selected ? 'bg-[green]' : ''
    }

    useEffect(() => {
        // gsap related
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.gst-text-content',
            { x: -40, opacity: 0, },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.git-streak-container',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Cell size related
        const updateSize = () => {
            if (containerRef.current) {
                setCellHeight(containerRef.current.clientHeight / (7 + .4)); // + .2 to make bottom border hidden
            }
        };

        updateSize(); // Initial size update

        const resizeObserver = new ResizeObserver(() => {
            updateSize();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []); // Empty array means this effect runs once on mount and never again

    return (
        <div
            ref={containerRef}
            className={clsx(
                'rounded-xl relative',
                'overflow-hidden git-streak-container'
            )}
        >
            {/* Background */}
            <div
                className='absolute top-0 right-0 w-full h-full flex justify-end opacity-60'
            >
                {
                    gridMatrix.map((column, j) => {
                        return (
                            <div key={j}>
                                {
                                    column.map((_, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={clsx(
                                                    `m-[2px] cursor-pointer ${getBgColor(j, i)} hover:scale-105`,
                                                    'border rounded dark:border-white light:border-black dark:border-opacity-10',
                                                    'transition-all duration-200 ease-in-out',
                                                )}
                                                style={{
                                                    height: `${cellHeight}px`,
                                                    width: `${cellHeight}px`
                                                }}
                                                onClick={() => selectBlock(j, i)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div
                className={clsx(
                    'relative z-[10] py-14 px-4 sm:p-10 lg:pl-10 lg:py-12 lg:pr-0 w-full lg:w-2/3 gst-text-content text-left',
                    'bg-gradient-to-r dark:from-darkBg from-[#fff] to-transparent dark:to-transparent',
                )}
            >
                <div
                    className='flex lg:items-center gap-2 flex-col lg:flex-row md:whitespace-nowrap'
                >

                    <h3
                        className="text-2xl md:text-4xl font-semibold dark:text-gray-200 mb-2 lg:border-r lg:border-white pr-2"
                    >
                        <a
                            href="https://git-streak-tracker.herokuapp.com"
                            className="transition dark:hover:text-gray-400"
                            target="_blank"
                            rel='noreferrer noopener'
                        >
                            Git Streak Tracker
                        </a>
                    </h3>

                    <div className='hidden lg:flex'>
                        Git Contribution Tracker
                    </div>
                </div>

                <div
                    className='mt-3 md:mt-5 text-sm font-light'
                >
                    Built with a buddy of mine, we used this as an exploratory Swift project which actually turned into a usefule tool that I use daily. This IOS app tracks your git contributions while also offering two different widgets that you can fix on your home screen as a reminder to make a contribution that day. It&apos;s a gamified way to make sure you code at least a little bit every day.
                </div>
            </div>

        </div>
    )
}

export default GitStreakTracker