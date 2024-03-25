import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"

const PropConnectCaseStudy = () => {
    useEffect(() => {
        console.log('moutnting');
    }, [])

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

                                    className="transition dark:hover:text-gray-400"
                                >
                                    PropConnect
                                </a>
                            </h3>

                            <div className='hidden lg:flex'>
                                Automated Maintenance Coordinator
                            </div>
                        </div>

                        <div
                            className='mt-5 text-sm font-light'
                        >
                            My friend (a property manager by trade) inspired me to build this tool that automates the back and forth between tenants and landlords that any property manager has to deal with. Using GPT-4 and Twilio, tenants can text in their maintenance requests and the system will categorize the issue, get all the critical details, and assign a vendor to fix the issue. From there, it puts the tenant and vendor in contact with each other directly. This bypasses the property manager for the most tedious work.
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    scrollRef.current?.scrollTo(0, 0)
                }
            });
        });

        observer.observe(scrollRef.current as Element);

        return () => {
            observer.unobserve(scrollRef.current as Element);
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

        messages.forEach((_, i) => {
            if (messagesEndRef.current[i]) {
                observer.observe(messagesEndRef.current[i]);
            }
        });

        return () => {
            messages.forEach((_, i) => {
                if (messagesEndRef.current[i]) {
                    observer.unobserve(messagesEndRef.current[i]);
                }
            });
        };
    }, [messages]);

    const heightOfNextMessage = useMemo(() => {
        const nextMessage = messagesInView[messagesInView.length - 1] + 1
        if (messagesEndRef.current[nextMessage]) {
            return messagesEndRef.current[nextMessage].offsetHeight + 16 // 18 is the gap between messages
        } else {
            return 0
        }
    }, [messagesInView])

    useEffect(() => {

        const interval = setInterval(() => {
            if (scrollRef.current) {
                if (messagesInView.length === messages.length) {
                    scrollRef.current.style.scrollBehavior = 'auto'
                    scrollRef.current.scrollTop = 8
                } else {
                    scrollRef.current.style.scrollBehavior = 'smooth'
                    scrollRef.current.scrollTop += heightOfNextMessage
                }
                // }
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [messagesInView, heightOfNextMessage])

    useEffect(() => {
        if (scrollRef.current) {
            // initialize 6px from top
            scrollRef.current.scrollTop += 6
        }
    }, [scrollRef.current])

    return (
        <div
            ref={scrollRef}
            className={clsx(
                'flex-1 md:h-[310px] max-h-[100%] overflow-hidden absolute w-full opacity-30 z-0',
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
                                message.type === 'right' ? 'bg-[#E9E9EB] dark:bg-[#26252A] self-end' : '',
                                message.type === 'left' ? 'bg-[#278EFF] self-start' : ''
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
                                            message.type === 'right' ? 'dark:bg-[#E9E9EB] bg-[#26252A]' : '',
                                            message.type === 'left' ? 'bg-[#fff]' : ''

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