import Image from 'next/image';
import githubLogo from '../../assets/github-mark.svg';
import link from '../../assets/link.png';

const CaseStudyLinks = ({
    githubLink,
    projectLink
}: { githubLink: string, projectLink: string }) => {
    const btnContainerClasses = 'flex gap-1 flex-row-reverse bg-highlight rounded-md text-xs items-center pr-1 pl-2 active:scale-90 transition text-black'

    return (
        <div className='flex align-center gap-4'>
            <a
                className='flex items-center link-container'
                href={githubLink}
                target='_blank'
                rel='noreferrer noopener'
            >
                <div
                    className={btnContainerClasses}
                >
                    <div
                        className='w-6 h-6 bg-highlight p-1'
                    >
                        <Image
                            src={githubLogo}
                            alt='Github Logo'
                            className='w-full h-full pointer-events-none'
                        />
                    </div>
                    Github
                </div>
            </a>

            <a
                className='flex items-center link-container'
                href={projectLink}
                target='_blank'
                rel='noreferrer noopener'
            >
                <div
                    className={btnContainerClasses}
                >

                    <div
                        className='w-6 h-6 bg-highlight p-1 rounded-lg active:scale-90 transition'
                    >
                        <Image
                            src={link}
                            alt='Github Logo'
                            className='w-full h-full scale-90 pointer-events-none'
                        />
                    </div>
                    View Project
                </div>

            </a>
        </div>
    );
}

export default CaseStudyLinks