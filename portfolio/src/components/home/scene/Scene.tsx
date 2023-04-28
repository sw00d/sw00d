import * as React from "react"
import { TreeRight } from "./TreeRight"
import { useDarkMode } from "@/context/darkModeContext";
import { TreeLeft } from "./TreeLeft";
import { GrassDark } from "./GrassDark";
import { layer1Paths, layer2Paths, layer3Paths, layer4Paths, layer5Paths, layer6Paths, mountainPaths } from "./utils";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWave({ height = 601, yOffset, numSegments }) {
    const width = 1200;

    let path = `M0,${yOffset}`;

    const segmentWidth = width / numSegments;

    const randomYOffset = getRandomInt(yOffset + 20, yOffset + 20)
    let prevX = 0;
    let prevY = randomYOffset;

    for (let i = 1; i <= numSegments; i++) {
        const x = prevX + segmentWidth;
        const y = getRandomInt(yOffset - 100, yOffset + 100);

        const cp1x = prevX + segmentWidth / 3;
        const cp1y = prevY;
        const cp2x = x - segmentWidth / 3;
        const cp2y = y;
        console.log(height);

        path += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`;

        prevX = x;
        prevY = y;
    }

    path += ` L${width},${height} L0,${height} Z`;

    return path;
}

const refreshMoutains = () => ([
    {
        fill: "#72b8da",
        path: generateWave({
            yOffset: 280,
            numSegments: 3,
        }),
    },
    {
        fill: '#0b6d9d',
        path: generateWave({
            yOffset: 329,
            numSegments: 4,
        }),
    },
    {
        fill: '#005388',
        path: generateWave({
            yOffset: 369,
            numSegments: 5,
        }),
    },
    {
        fill: '#003B6C',
        path: generateWave({
            yOffset: 430,
            numSegments: 4,
        }),
    },
    {
        fill: '#00274A',
        path: 'M0,400 C300,520 900,401 1200,401 L1200,1000 L0,1000 Z'
    }
])

const Scene = (props) => {
    const baseScrollYPosition = 0
    const { isDarkMode } = useDarkMode();
    const [scrollPosition, setScrollPosition] = React.useState(baseScrollYPosition);
    const [mountains, setMountains] = React.useState<Array>(refreshMoutains());

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY + baseScrollYPosition);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => { setMountains(refreshMoutains) }, [isDarkMode]);

    return (
        <>
            <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 1200 1000" {...props}>

                <defs>
                    <linearGradient
                        id="daytime"
                        x1={0}
                        x2={1}
                        y1={0}
                        y2={0}
                        gradientTransform="scale(-423.24506 423.24506) rotate(90 -.592 -.378)"
                        gradientUnits="userSpaceOnUse"
                        spreadMethod="pad"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#fff",
                            }}
                        />
                        <stop
                            offset={0.559}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#7fc2ff",
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#4f7fc2",
                            }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="nighttime"
                        x1={0}
                        x2={1}
                        y1={0}
                        y2={0}
                        gradientTransform="scale(-423.24506 423.24506) rotate(90 -.592 -.378)"
                        gradientUnits="userSpaceOnUse"
                        spreadMethod="pad"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#1C8DDB",
                            }}
                        />
                        <stop
                            offset={0.759}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#02326A",
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopOpacity: 1,
                                stopColor: "#00234C",
                            }}
                        />
                    </linearGradient>
                    {
                        mountains.map(({ fill }, i) => {
                            return <linearGradient id={`mountain_${i}`} x1="0%" y1="0%" x2="0%" y2="100%" key={i}>
                                <stop offset="0%" style={{ stopColor: fill, stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: fill, stopOpacity: 1 }} />
                            </linearGradient>
                        })
                    }
                </defs>


                {
                    mountains.map(({ path }, i) => {
                        return (
                            <path
                                key={i}
                                d={path}
                                style={{
                                    fill: `url(#mountain_${i})`,
                                    fillOpacity: 1,
                                    fillRule: "nonzero",
                                    stroke: "none",
                                    // transition: '.2s linear',
                                    strokeLinecap: "round",
                                }}
                                transform={`matrix(1 0 0 1 95 ${scrollPosition * (i === 0 ? 0.2 : (i * -.2))})`}
                            />
                        )
                    })
                }

                <TreeRight isDarkMode={isDarkMode} />
                {/* <TreeLeft isDarkMode={isDarkMode} /> */}

                {/* <GrassDark isDarkMode={isDarkMode} /> */}

            </svg>

        </>

    )
}
export default Scene
// {/* Left Trees starts below */}

// {/* Tree Right Starts below */}

// {/* Dark grass starting below */}


