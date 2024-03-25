import { motion } from 'framer-motion';
import Header, { animationY } from './Header';
import PlaticaCaseStudy from './case-studies/Platica';
import MepopCaseStudy from './case-studies/Mepop';
import GitStreakTracker from './case-studies/GitStreakTracker';
import PropConnectCaseStudy from './case-studies/PropConnect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';


export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        (gsap.utils.toArray('.case-study') as Element[]).forEach((caseStudy: Element) => {
            gsap.fromTo(caseStudy,
                { y: 50, opacity: 0, },
                {
                    scrollTrigger: {
                        trigger: caseStudy,
                        start: 'top bottom',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1
                });
        });
    }, []);

    return (
        <motion.div initial="hide" animate="show" transition={{ staggerChildren: 0.125, delayChildren: 1.8 }}>
            <Header />
            <motion.div variants={animationY} className='mt-10 md:mt-20 content-wrapper'>
                <hr className='md:hidden' />
                <div className='flex flex-col gap-24 pt-10 mb-16'>
                    <div className='case-study'><PlaticaCaseStudy /></div>
                    <div className='case-study'><PropConnectCaseStudy /></div>
                    <div className='case-study'><MepopCaseStudy /></div>
                    <div className='case-study'><GitStreakTracker /></div>
                </div>
            </motion.div>
        </motion.div>
    );
}