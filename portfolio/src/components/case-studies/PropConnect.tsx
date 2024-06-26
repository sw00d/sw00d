import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"
import CaseStudyLinks from "../CaseStudyLinks"
import CaseStudyTech from "../CaseStudyTech"

const PropConnectCaseStudy = () => {

    return (
        <div
            className={clsx(
                'dark:shadow-caseStudyDark shadow-caseStudyLight dark:bg-darkSurface bg-lightSurface dark:bg-opacity-10 bg-opacity-10',
                'rounded-xl relative',
            )}
        >

            <div
                className='relative z-10 flex-1 text-left'

            >
                <div className='flex h-full gap-4'>
                    <div className='w-full lg:w-2/3 flex flex-col relative z-10 py-14 px-4 sm:p-10'>
                        <div
                            className={clsx(
                                'flex lg:items-center gap-2 flex-col lg:flex-row md:whitespace-nowrap',
                                'lg:w-1/2 xl:w-2/3',
                            )}
                        >
                            <h3 className="text-2xl md:text-4xl font-semibold dark:text-gray-200 mb-2 lg:border-r lg:border-darkBg dark:border-lightBg pr-2">
                                <a
                                    href="https://propconnect.io/"
                                    target="_blank"
                                    rel='noreferrer noopener'
                                    className="transition dark:hover:text-gray-400"
                                >
                                    PropConnect
                                </a>
                            </h3>

                            <div className='hidden lg:flex'>
                                Automated Maintenance Coordinator
                            </div>
                        </div>
                        <CaseStudyLinks
                            githubLink='https://github.com/sw00d/PropConnect'
                            projectLink='https://propconnect.io/'
                        />

                        <div
                            className='mt-5 text-sm font-light'
                        >
                            My friend (a property manager by trade) inspired me to build this tool that automates the back and forth between tenants and landlords that any property manager has to deal with. Using GPT-4 and Twilio, tenants can text in their maintenance requests and the system will categorize the issue, get all the critical details, and assign a vendor to fix the issue. From there, it puts the tenant and vendor in contact with each other directly. This bypasses the property manager for the most tedious work.
                        </div>


                        <div className='mt-4'>
                            <CaseStudyTech
                                tech={[
                                    'vue',
                                    'django',
                                    'docker'
                                ]}
                            />
                        </div>
                    </div>

                    <PropConnectAnimation />
                </div>
            </div>

        </div>
    )
}

export default PropConnectCaseStudy


const PropConnectAnimation = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [messages] = useState<{ type: 'left' | 'right', rows: number }[]>(initialMessages)

    const messagesEndRef = useRef<HTMLDivElement[]>([]);
    const [messagesInView, setMessagesInView] = useState<number[]>([]);

    useEffect(() => {
        const ref = scrollRef.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    ref?.scrollTo(0, 0)
                }
            });
        });

        observer.observe(ref as Element);

        return () => {
            observer.unobserve(ref as Element);
        };
    }, [scrollRef]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // entry.target is in the viewport
                    setMessagesInView((prev) => {
                        if (!prev.includes(Number(entry.target.id.split('-')[1]))) {
                            return [...prev, Number(entry.target.id.split('-')[1])].sort((a, b) => a - b)
                        }
                        return prev
                    })
                } else {
                    // entry.target is not in the viewport
                    setMessagesInView((prev) => {
                        return prev.filter((id) => id !== Number(entry.target.id.split('-')[1])).sort((a, b) => a - b)
                    })
                }
            });
        });

        const ref = messagesEndRef.current
        messages.forEach((_, i) => {
            if (ref[i]) {
                observer.observe(ref[i]);
            }
        });

        return () => {
            messages.forEach((_, i) => {
                if (ref[i]) {
                    observer.unobserve(ref[i]);
                }
            });
        };
    }, [messages]);

    const heightOfNextMessage = useMemo(() => {
        const ref = messagesEndRef.current
        const nextMessage = messagesInView[messagesInView.length - 1] + 1
        if (ref[nextMessage]) {
            return ref[nextMessage].offsetHeight + 16 // 18 is the gap between messages
        } else {
            return 0
        }
    }, [messagesInView])

    useEffect(() => {
        const ref = scrollRef.current
        const interval = setInterval(() => {
            if (ref) {
                if (messagesInView.length === messages.length) {
                    ref.style.scrollBehavior = 'auto'
                    ref.scrollTop = 8
                } else {
                    ref.style.scrollBehavior = 'smooth'
                    ref.scrollTop += heightOfNextMessage
                }
                // }
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [messagesInView, heightOfNextMessage])

    useEffect(() => {
        const ref = scrollRef.current
        if (ref) {
            // initialize 6px from top
            ref.scrollTop += 6
        }
    }, [scrollRef.current])

    return (
        <div
            ref={scrollRef}
            className={clsx(
                'flex-1 md:h-[356px] max-h-[100%] overflow-hidden absolute w-full opacity-30 z-0',
                'lg:opacity-100 lg:relative scroll-smooth'
            )}
        >
            <div
                className='flex-1 w-full flex justify-end flex-col px-4 py-4 gap-4 self-end'
            >

                {
                    messages.map((message, i) => (
                        <div
                            ref={(el) => (messagesEndRef.current[i] = el as HTMLDivElement)}
                            id={`message-${i}`}
                            key={i}
                            className={clsx(
                                'px-3 py-1 text-xs rounded-lg w-[80%] shadow',
                                message.type === 'right' ? 'bg-[#278EFF] self-end' : '',
                                message.type === 'left' ? 'bg-[#E9E9EB] dark:bg-[#26252A]  self-start' : ''
                            )}
                        >
                            {/* text lines */}
                            {
                                Array(message.rows).fill(0).map((_, i) => (
                                    <div
                                        key={i}
                                        className={clsx(
                                            'h-[1px] bg-[#26252A] opacity-10 my-2',
                                            message.rows > 1 && i === message.rows - 1 ? 'w-[70%]' : '',
                                            message.type === 'left' ? 'dark:bg-[#E9E9EB] bg-[#26252A]' : '',
                                            message.type === 'right' ? 'bg-[#fff]' : ''
                                        )}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const initialMessages: { type: 'left' | 'right', rows: number }[] = [
    {
        type: 'left',
        rows: 1
    },
    {
        type: 'right',
        rows: 2
    },
    {
        type: 'right',
        rows: 4
    },
    {
        type: 'left',
        rows: 2
    },
    {
        type: 'right',
        rows: 1
    },
    {
        type: 'left',
        rows: 3
    },
    ///
    {
        type: 'left',
        rows: 1
    },
    {
        type: 'right',
        rows: 2
    },
    {
        type: 'right',
        rows: 4
    },
    {
        type: 'left',
        rows: 2
    },
    {
        type: 'right',
        rows: 1
    },
    {
        type: 'left',
        rows: 3
    },
]