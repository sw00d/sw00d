import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import clsx from 'clsx';
import { useTheme } from '@/context/themeContext';


const reverseAnimationX = {
    hide: { x: 24, opacity: 0 }, // start from the shown state
    show: { x: 0, opacity: 1 }   // end at the hidden state
};

const animationX = {
    hide: { x: -24, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
    },
};

export const animationY = {
    hide: { y: 24, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
};


const Header = () => {
    const { toggleTheme } = useTheme();

    const [isMouseLeft, setIsMouseLeft] = useState(false);
    const imageRef = useRef(null); // Reference to the image container
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageRef.current) return;

            const { clientX } = e;
            const { left, width } = imageRef.current.getBoundingClientRect();
            // Check if the mouse is to the left of the center of the image
            setIsMouseLeft(clientX < left + width / 2);
        };

        // Attach the mouse move event listener to the window
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (

        <div className='flex gap-4 md:gap-16 flex-col md:flex-row'>
            <div className='flex gap-8'>

                <motion.div
                    ref={imageRef} // Attach the ref to the image container
                    variants={animationX}
                    className={clsx(
                        'w-[100px] h-[100px] p-1',
                        'md:w-[200px] md:h-[200px] md:p-3',
                        'lg:w-[200px] lg:h-[200px] lg:p-3 flex relative bg-[#dbdbdb] overflow-hidden rounded-full justify-center items-center',

                        // Box Shadow
                        'dark:shadow-custom-light shadow-custom-dark',
                    )}
                >
                    <Image
                        src="/sam.png"
                        alt="Sam's Pixel Avatar"
                        width={300}
                        priority
                        height={300}
                        className={clsx({ 'transform scale-x-[-1]': isMouseLeft })}
                    />
                </motion.div>

                <div className='pt-3'>
                    <TitleIntro className="md:hidden" />
                    <h3 className="dark:text-gray-200 md:hidden">Fullstack Engineer</h3>
                </div>

            </div>

            <div>

                <TitleIntro className="hidden md:flex " />

                <motion.div variants={reverseAnimationX} className='mt-2 md:mt-14 flex flex-col gap-4 md:gap-2'>
                    <h3 className="md:text-xl dark:text-gray-200 hidden md:flex">💻 &nbsp; I'm a Full Stack Engineer. I like building things.</h3>
                    <h3 className="md:text-xl dark:text-gray-200">
                        <button
                            onClick={toggleTheme}
                            // scale down on click
                            className="transform hover:scale-110 active:scale-90 transition-transform duration-100"
                        >
                            🌞
                        </button>
                        &nbsp; By day, I'm the lead frontend developer at <a href="https://ckcollab.com/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">CKC</a> 👈🏻 (oh I built this)
                    </h3>

                    <h3 className="md:text-xl dark:text-gray-200">
                        <button
                            onClick={toggleTheme}
                            // scale down on click
                            className="transform hover:scale-110 active:scale-90 transition-transform duration-100"
                        >
                            🌙
                        </button>
                        &nbsp; By night, I love taking things from an idea to a real application</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Header;

const TitleIntro = ({ className }: { className: string }) => {
    const title = useTypewriter('Hi, I\'m Sam', 100);

    return (
        <h1
            className={clsx(
                className,
                "text-3xl",
                "md:text-5xl font-bold dark:text-white flex gap-4"
            )}
        >
            {title}
            <div className='delayed-fade-in'>
                <div className='wave-animation w-[40px] '>
                    👋
                </div>
            </div>
        </h1>
    )
}


const useTypewriter = (text: string, typingSpeed: number = 70) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (!text) return;

        const timer = setTimeout(() => {
            setTypedText((currentText) => text.substring(0, currentText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, typedText, typingSpeed]);

    return typedText;
};