import * as React from "react"
import { TreeRight } from "./TreeRight"
import { useDarkMode } from "@/context/darkModeContext";
import { TreeLeft } from "./TreeLeft";
import { GrassDark } from "./GrassDark";
import { layer1Paths, layer2Paths, layer3Paths, layer4Paths, layer5Paths, layer6Paths, mountainPaths } from "./utils";

function drawPath(startX) {
    // random int between 80 and 130
    let offsetX = startX === 0 ? 0 : startX === 700 ? 0
        : Math.floor(Math.random() * (startX - 80 + 1)) + 80;
    const offsetY = Math.floor(Math.random() * (-10 - 20 + 1)) + 9;
    return `M${3.292875 + startX} ${offsetY + 522}.65l8.37625-76.53c1.55625 24.980625 1.190625 53.746875 8.23625 68.465375 2.5905-19.685625 3.63375-38.988125 2.444-57.660625 3.523125 16.610625 8.236875 32.851875 9.129375 50.324625 1.709625-12.95625 2.938125-25.835625 7.373125-39.28525-0.174625 15.101875-3.97125 28.919375 2.93375 36.481875 3.343125-11.810625 6.70875-23.618125 7.280-38.232 4.925625 14.3375 4.251875 31.453125 5.773125 47.548125 1.946875-15.77625 3.538125-59.791875 10.865625-73.811875-0.720625 28.873125-0.895625 51.886875 6.350625 63.583125 7.149375-8.949375 7.775625-26.566875 7.929375-43.113125 5.044375 14.304375 8.484375 30.611875 8.769375 50.57625 1.996875-16.66875 4.318125-33.35625 10.03875-50.019375-1.33125 20.454375-0.296875 36.373125 4.5225 45.054375 3.186875-12.87375 6.411875-25.7475 6.741875-38.625 4.258125 19.171875 3.013125 37.04625 3.868125 55.48875z`;
}


const Scene = (props) => {
    const baseScrollYPosition = 0
    const { isDarkMode } = useDarkMode();
    const [scrollPosition, setScrollPosition] = React.useState(baseScrollYPosition);
    const [screenHeight, setScreenHeight] = React.useState(0);

    // React.useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY + baseScrollYPosition);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     setScreenHeight(window.innerHeight);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
            viewBox="0 0 750 500"
            style={{
                display: 'block',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
            }}
        >
            <defs>
                <radialGradient
                    id="bg_grad"
                    cx="700"
                    cy="-200"
                    r="418.69"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ffffff"></stop>
                    <stop offset="0.5" stopColor="#7fc2ff"></stop>
                    <stop offset="1" stopColor="#4f7fc2"></stop>
                </radialGradient>
                <linearGradient
                    id="grad1"
                    x1="-154.32"
                    y1="243.27"
                    x2="-154.32"
                    y2="704.3"
                    gradientTransform="matrix(-1 0 0 1.36 231.36 -100.14)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.08" stopColor="#72B8D9"></stop>
                    <stop offset="0.99" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="grad2"
                    // x1="50%"
                    // y1="70%"
                    // x2="50%"
                    // y2="200%"
                    x1="-154.32"
                    x2="-154.32"
                    y1="403.27"
                    y2="704.3"

                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#0A6C9D"></stop>
                    <stop offset="0.98" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="grad3"
                    x1="50%"
                    y1="70%"
                    x2="50%"
                    y2="250%"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01" stopColor="#005388"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="grad4"
                    x1="50%"
                    y1="90%"
                    x2="49.5%"
                    y2="150%"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#013968"></stop>
                    {/* <stop offset="0.96" stopColor="#fff"></stop> */}
                </linearGradient>
            </defs>
            <path fill="url(#bg_grad)" d="M0 0H750V500H0z" opacity="0.8"></path>
            <g>
                <path
                    fill="url(#grad1)"
                    d="M0 327L7.5 318.3C15 309.7 30 292.3 45 294.3C60 296.3 75 317.7 90 323.2C105 328.7 120 318.3 135 319.2C150 320 165 332 180 324.7C195 317.3 210 290.7 225 279.2C240 267.7 255 271.3 270 279.3C285 287.3 300 299.7 315 298.2C330 296.7 345 281.3 360 271C375 260.7 390 255.3 405 257.3C420 259.3 435 268.7 450 268.3C465 268 480 258 495 252.8C510 247.7 525 247.3 540 263C555 278.7 570 310.3 585 311.3C600 312.3 615 282.7 630 283.3C645 284 660 315 675 323.8C690 332.7 705 319.3 720 302.8C735 286.3 750 266.7 765 260.3C780 254 795 261 810 274.3C825 287.7 840 307.3 855 315C870 322.7 885 318.3 892.5 316.2L900 314L900 601L892.5 601C885 601 870 601 855 601C840 601 825 601 810 601C795 601 780 601 765 601C750 601 735 601 720 601C705 601 690 601 675 601C660 601 645 601 630 601C615 601 600 601 585 601C570 601 555 601 540 601C525 601 510 601 495 601C480 601 465 601 450 601C435 601 420 601 405 601C390 601 375 601 360 601C345 601 330 601 315 601C300 601 285 601 270 601C255 601 240 601 225 601C210 601 195 601 180 601C165 601 150 601 135 601C120 601 105 601 90 601C75 601 60 601 45 601C30 601 15 601 7.5 601L0 601Z"
                    style={{ fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                    id="path34"
                />

                <path
                    fill="url(#grad2)"
                    d="M0 363L7.5 362.8C15 362.7 30 362.3 45 363.7C60 365 75 368 90 369.7C105 371.3 120 371.7 135 367C150 362.3 165 352.7 180 351.3C195 350 210 357 225 360.7C240 364.3 255 364.7 270 362.2C285 359.7 300 354.3 315 351.5C330 348.7 345 348.3 360 353.8C375 359.3 390 370.7 405 372.8C420 375 435 368 450 363C465 358 480 355 495 354C510 353 525 354 540 352.7C555 351.3 570 347.7 585 346.7C600 345.7 615 347.3 630 353.5C645 359.7 660 370.3 675 370C690 369.7 705 358.3 720 354.5C735 350.7 750 354.3 765 355.5C780 356.7 795 355.3 810 354.3C825 353.3 840 352.7 855 357.2C870 361.7 885 371.3 892.5 376.2L900 381L900 601L892.5 601C885 601 870 601 855 601C840 601 825 601 810 601C795 601 780 601 765 601C750 601 735 601 720 601C705 601 690 601 675 601C660 601 645 601 630 601C615 601 600 601 585 601C570 601 555 601 540 601C525 601 510 601 495 601C480 601 465 601 450 601C435 601 420 601 405 601C390 601 375 601 360 601C345 601 330 601 315 601C300 601 285 601 270 601C255 601 240 601 225 601C210 601 195 601 180 601C165 601 150 601 135 601C120 601 105 601 90 601C75 601 60 601 45 601C30 601 15 601 7.5 601L0 601Z"
                    style={{ fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                    id="path34"
                />
                <path
                    fill="url(#grad3)"
                    d="M0 507L21.43 494.5C42.86 482 85.71 457 128.57 438.7C171.43 420.3 214.29 408.7 257.14 410.3C300 412 342.86 427 385.71 435.7C428.57 444.3 471.43 446.7 514.29 459C557.14 471.3 600 493.7 621.43 504.8L642.86 516L642.86 601L621.43 601C600 601 557.14 601 514.29 601C471.43 601 428.57 601 385.71 601C342.86 601 300 601 257.14 601C214.29 601 171.43 601 128.57 601C85.71 601 42.86 601 21.43 601L0 601Z"

                    style={{ fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                    id="path34"
                />

                <path
                    fill="url(#grad4)"
                    d="M0 448L7.2 450.5C14.3 453 28.7 458 43 457.8C57.3 457.7 71.7 452.3 86 451.5C100.3 450.7 114.7 454.3 128.8 454.2C143 454 157 450 171.2 450.7C185.3 451.3 199.7 456.7 214 459.2C228.3 461.7 242.7 461.3 257 458.3C271.3 455.3 285.7 449.7 300 447C314.3 444.3 328.7 444.7 343 444.7C357.3 444.7 371.7 444.3 386 446.3C400.3 448.3 414.7 452.7 428.8 453.2C443 453.7 457 450.3 471.2 448.5C485.3 446.7 499.7 446.3 514 448.8C528.3 451.3 542.7 456.7 557 458.2C571.3 459.7 585.7 457.3 600 457.5C614.3 457.7 628.7 460.3 643 457.8C657.3 455.3 671.7 447.7 686 445C700.3 442.3 714.7 444.7 728.8 448.2C743 451.7 757 456.3 771.2 457.5C785.3 458.7 799.7 456.3 814 452.8C828.3 449.3 842.7 444.7 857 444.5C871.3 444.3 885.7 448.7 892.8 450.8L900 453L900 601L892.8 601C885.7 601 871.3 601 857 601C842.7 601 828.3 601 814 601C799.7 601 785.3 601 771.2 601C757 601 743 601 728.8 601C714.7 601 700.3 601 686 601C671.7 601 657.3 601 643 601C628.7 601 614.3 601 600 601C585.7 601 571.3 601 557 601C542.7 601 528.3 601 514 601C499.7 601 485.3 601 471.2 601C457 601 443 601 428.8 601C414.7 601 400.3 601 386 601C371.7 601 357.3 601 343 601C328.7 601 314.3 601 300 601C285.7 601 271.3 601 257 601C242.7 601 228.3 601 214 601C199.7 601 185.3 601 171.2 601C157 601 143 601 128.8 601C114.7 601 100.3 601 86 601C71.7 601 57.3 601 43 601C28.7 601 14.3 601 7.2 601L0 601Z"
                    style={{ fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                    id="path34"
                />

            </g>

            <TreeRight isDarkMode={isDarkMode} />
            {/* <TreeLeft /> */}
            <path d={drawPath(0)} />
            <path d={drawPath(100)} />
            <path d={drawPath(200)} />
            <path d={drawPath(300)} />
            <path d={drawPath(400)} />
            <path d={drawPath(500)} />
            <path d={drawPath(600)} />
            <path d={drawPath(700)} />


            {/* <path d={drawPath(0)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(100)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(200)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(300)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(400)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(500)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(600)} fill="rgba(255,255,255,1)"/> */}
            {/* <path d={drawPath(700)} fill="rgba(255,255,255,1)"/> */}

        </svg >

    )

}
export default Scene


