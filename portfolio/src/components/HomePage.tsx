import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import clsx from 'clsx';
import { useTheme } from '@/context/themeContext';

export default function Home() {
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
        <div>

            <div className='flex gap-4 md:gap-16 flex-col md:flex-row'>
                <div className='flex gap-8'>

                    <div
                        ref={imageRef} // Attach the ref to the image container

                        className={clsx(
                            'w-[100px] h-[100px] p-1',
                            'md:w-[200px] md:h-[200px] md:p-3',
                            'lg:w-[200px] lg:h-[200px] lg:p-3 flex relative bg-[#dbdbdb] overflow-hidden rounded-full justify-center items-center',

                            // Apply the transform if isMouseLeft is true
                            { 'transform scale-x-[-1]': isMouseLeft }

                        )}
                    >
                        <Image
                            src="/sam.png"
                            alt="Sam's Pixel Avatar"
                            width={300}
                            priority
                            height={300}
                        // className='transform scale-x-[-1]'
                        />
                    </div>

                    <div className='pt-3'>
                        <TitleIntro className="md:hidden" />
                        <h3 className="dark:text-gray-200 md:hidden">Fullstack Engineer</h3>
                    </div>

                </div>

                <div>

                    <TitleIntro className="hidden md:flex " />

                    <div className='mt-2 md:mt-14 flex flex-col gap-4 md:gap-2'>
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
                    </div>
                </div>
            </div>


            <div className='mt-20'>

                <h2 className="text-3xl font-medium my-4 dark:text-gray-300">Some Personal Projects:</h2>

                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://www.platica.xyz/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Plática</a></h3>
                <b className="dark:text-gray-400">Cross-Language Communication Powered by OpenAI</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Experience real-time translation allowing enhanced communication between two people who share different native languages</li>
                    <li>Available now for users to try and communicate globally without constraints.</li>
                </ul>
                <a href="https://www.platica.xyz/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Try her out</a> (not mobile responsive yet 📵)

                <hr className="my-4 dark:border-gray-700" />

                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://propconnect.io" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">PropConnect</a></h3>
                <b className="dark:text-gray-400">Vue3 & Django App for Property Management</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Streamlines maintenance issue management for Property Managers.</li>
                    <li>Integrates with Twilio and OpenAI, facilitating tenants to send repair requests via text.</li>
                    <li>Automates vendor matching and schedules appointments efficiently 📅</li>
                </ul>
                <a href="https://propconnect.io" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Visit Site</a>

                <hr className="my-4 dark:border-gray-700" />

                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://www.mepopreports.com" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Mepop Reporting</a></h3>
                <b className="dark:text-gray-400">React & Firebase Reporting Tool</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Tracks profits, market trends, and personalized seller statistics.</li>
                    <li>Serves hundreds of Depop sellers 📈</li>
                </ul>
                <a href="https://www.mepopreports.com" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Visit Site</a>

                <hr className="my-4 dark:border-gray-700" />

                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://git-streak-tracker.herokuapp.com/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Git Streak Tracker</a></h3>
                <b className="dark:text-gray-400">Keep Track of Your GitHub Contributions</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Swift app built with a friend to encourage users to keep a streak of daily contributions</li>
                    <li>This has gone on my phone's home screen and is checked daily by me 📲</li>
                </ul>

                <a href="https://git-streak-tracker.herokuapp.com/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Cool web demo</a> (not mobile responsive 📵)<br />
                <a href="https://github.com/gibsonbailey/git-streak-tracker" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">View the Repository on GitHub</a><br />
                <a href="https://apps.apple.com/us/app/git-streak-tracker/id1663708723" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Download the iOS App</a>
            </div>

        </div>
    )
}


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
            <div className='wave-animation w-[40px]'>👋</div>
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
