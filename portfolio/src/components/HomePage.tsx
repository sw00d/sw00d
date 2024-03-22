import { motion } from 'framer-motion';
import Header, { animationY } from './Header';
import PlaticaCaseStudy from './case-studies/Platica';
import MepopCaseStudy from './case-studies/Mepop';
import GitStreakTracker from './case-studies/GitStreakTracker';

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
                <div className='flex flex-col gap-16 pt-10'>
                    <PlaticaCaseStudy />
                    <MepopCaseStudy />
                    <GitStreakTracker />
                </div>


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


            </motion.div>

        </motion.div>

    )
}