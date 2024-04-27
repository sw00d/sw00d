import Image from 'next/image';
import githubLogo from '../../assets/github-mark.svg';
import link from '../../assets/link.png';
import { clsx } from 'clsx';
import Tooltip from '../Tooltip';

const CaseStudyLinks = ({
    githubLink,
    projectLink
}) => {
    return (
        <div className='mt-8 flex align-center gap-4'>
            <Tooltip text="Github">
                <a
                    className='flex items-center link-container'
                    href={githubLink}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <div
                        className='w-9 h-9 bg-highlight p-1 rounded-lg active:scale-90 transition'
                    >
                        <Image
                            src={githubLogo}
                            alt='Github Logo'
                            className='w-full h-full pointer-events-none'
                        />
                    </div>
                </a>
            </Tooltip>

            <Tooltip text="View Project">

                <a
                    className='flex items-center link-container'
                    href={projectLink}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <div
                        className='w-9 h-9 bg-highlight p-1 rounded-lg active:scale-90 transition'
                    >
                        <Image
                            src={link}
                            alt='Github Logo'
                            className='w-full h-full scale-90 pointer-events-none'
                        />
                    </div>

                </a>

            </Tooltip>
        </div>
    );
}

export default CaseStudyLinks