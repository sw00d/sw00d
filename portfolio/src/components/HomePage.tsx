import { motion } from 'framer-motion';
import Header, { animationY } from './Header';
import PlaticaCaseStudy from './case-studies/Platica';
import MepopCaseStudy from './case-studies/Mepop';
import GitStreakTracker from './case-studies/GitStreakTracker';
import PropConnectCaseStudy from './case-studies/PropConnect';

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
                <div className='flex flex-col gap-24 pt-10'>
                    <PropConnectCaseStudy />
                    <MepopCaseStudy />
                    <GitStreakTracker />
                    <PlaticaCaseStudy />
                </div>

            </motion.div>

        </motion.div>

    )
}