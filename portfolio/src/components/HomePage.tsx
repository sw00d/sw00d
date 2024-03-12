import { motion } from 'framer-motion';
import Header, { animationY } from './Header';

export default function Home() {
    return (
        <motion.div
            initial="hide"
            animate="show"
            transition={{ staggerChildren: 0.125, delayChildren: 1.8 }}
        >
            {/* <svg width="70" height="95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 170"
                preserveAspectRatio="xMinYMin meet">

                <line x1="1" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                <line x1="101" y1="51" x2="101" y2="151" stroke="red" stroke-width="1" />
                <line x1="201" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />

                <g transform="translate(140, 20)">
                    <line x1="0" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                    <line x1="100" y1="100" x2="100" y2="0" stroke="red" stroke-width="1" />
                    <line x1="200" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                </g>

                <g transform="translate(0, 250)">
                    <line x1="0" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                    <line x1="100" y1="100" x2="100" y2="0" stroke="red" stroke-width="1" />
                    <line x1="200" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                </g>

                <g transform="translate(140, 230)">
                    <line x1="1" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                    <line x1="101" y1="51" x2="101" y2="151" stroke="red" stroke-width="1" />
                    <line x1="201" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                </g>
            </svg> */}

            {/* <svg width="140" height="95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 170"
                preserveAspectRatio="xMinYMin meet">

                <line x1="1" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                <line x1="101" y1="51" x2="101" y2="151" stroke="red" stroke-width="1" />
                <line x1="201" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />

                <g transform="translate(280, 20)">
                    <line x1="0" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                    <line x1="100" y1="100" x2="100" y2="0" stroke="red" stroke-width="1" />
                    <line x1="200" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                </g>

                <g transform="translate(0, 250)">
                    <line x1="0" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                    <line x1="100" y1="100" x2="100" y2="0" stroke="red" stroke-width="1" />
                    <line x1="200" y1="150" x2="100" y2="100" stroke="red" stroke-width="1" />
                </g>

                <g transform="translate(280, 230)">
                    <line x1="1" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                    <line x1="101" y1="51" x2="101" y2="151" stroke="red" stroke-width="1" />
                    <line x1="201" y1="1" x2="101" y2="51" stroke="red" stroke-width="1" />
                </g>
            </svg> */}


            <Header />
            <motion.div variants={animationY} className='mt-10 md:mt-20'>
                <hr className='md:hidden' />
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
                    <li>This has gone on my phone&apos;s home screen and is checked daily by me 📲</li>
                </ul>

                <a href="https://git-streak-tracker.herokuapp.com/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Cool web demo</a> (not mobile responsive 📵)<br />
                <a href="https://github.com/gibsonbailey/git-streak-tracker" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">View the Repository on GitHub</a><br />
                <a href="https://apps.apple.com/us/app/git-streak-tracker/id1663708723" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Download the iOS App</a>
            </motion.div>

        </motion.div>

    )
}