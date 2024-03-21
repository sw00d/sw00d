import { motion } from 'framer-motion';
import Header, { animationY } from './Header';
import PlaticaCaseStudy from './case-studies/Platica';
import MepopCaseStudy from './case-studies/Mepop';

export default function Home() {
    return (
        <motion.div
            initial="hide"
            animate="show"
            transition={{ staggerChildren: 0.125, delayChildren: 1.8 }}
        >

            <Header />
            <motion.div variants={animationY} className='mt-10 md:mt-20 content-wrapper'>
                <hr className='md:hidden' />
                <h2 className="text-3xl font-medium my-4 dark:text-gray-300">Some Personal Ventures:</h2>

                <MepopCaseStudy />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <PlaticaCaseStudy />


                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://propconnect.io" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">PropConnect</a></h3>
                <b className="dark:text-gray-400">Vue3 & Django App for Property Management</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Streamlines maintenance issue management for Property Managers.</li>
                    <li>Integrates with Twilio and OpenAI, facilitating tenants to send repair requests via text.</li>
                    <li>Automates vendor matching and schedules appointments efficiently 📅</li>
                </ul>
                <a href="https://propconnect.io" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Visit Site</a>

                {/* <hr className="my-4 dark:border-gray-700" />

                <h3 className="text-xl font-semibold dark:text-gray-200"><a href="https://www.mepopreports.com" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Mepop Reporting</a></h3>
                <b className="dark:text-gray-400">React & Firebase Reporting Tool</b>
                <ul className="list-disc pl-5 my-2 dark:text-gray-200">
                    <li>Tracks profits, market trends, and personalized seller statistics.</li>
                    <li>Serves hundreds of Depop sellers 📈</li>
                </ul>
                <a href="https://www.mepopreports.com" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">Visit Site</a> */}

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