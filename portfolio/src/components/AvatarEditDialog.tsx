import React, { FormEvent, useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';


interface AvatarEditDialogProps {
    hideDialog: () => void;
    isOpen: boolean;
}


export function AvatarEditDialog({ hideDialog, isOpen }: AvatarEditDialogProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);


    useEffect(() => {
        if (!isOpen) {
            setSuccess(false)
            setError(false)
        }
    }, [isOpen]);


    const handleValidation = () => {
        // todo: add validation
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        let isValidForm = handleValidation();
        const res = await fetch("/api/email", {
            body: JSON.stringify({
                name,
                email,
                message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const resp = await res.json();
        const { error } = resp
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);


        if (error) {
            setError(true)
            setSuccess(false);
            return;
        } else {
            setError(false)
            setSuccess(true);
            setEmail('');
            setMessage('');
            setName('');
        }
    };

    return (

        <Dialog open={isOpen} onClose={hideDialog} className="fade-in relative z-30">
            {/* backdrop */}
            <div className="fixed inset-0 z-50 bg-black/60" aria-hidden="true" />

            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="content-wrapper w-full">
                    <Dialog.Panel
                        className={clsx(
                            'mx-auto rounded-2xl bg-[#191C2A] p-6 sm:p-8 sm:py-12 shadow-lg overflow-auto max-h-[90vh]',
                            'lg:max-w-3xl relative'
                        )}
                    >
                        <button
                            type="button"
                            onClick={hideDialog}
                            className="absolute top-4 right-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div
                            className='w-full flex justify-center relative'
                        >
                            <PixelArt pixelData={pixelData} />
                            <Image
                                src="/sam.png"
                                alt="Sam's Pixel Avatar"
                                className='absolute z-0'
                                width={400}
                                priority
                                height={400}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
}


const PixelArt = ({ pixelData }) => {
    const getRgbOfEventClick = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        const { data } = e.currentTarget.getContext('2d').getImageData(offsetX, offsetY, 1, 1);
        const [r, g, b] = data;
        console.log(`R: ${r}, G: ${g}, B: ${b}`);
    }
    return (
        <div
            style={{ fontSize: 0 }}
            className='relative z-10'
            onClick={getRgbOfEventClick}
        >
            {pixelData.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((color, columnIndex) => (
                        <Pixel key={columnIndex} color={color} />
                    ))}
                </div>
            ))}
        </div>
    );
};

const Pixel = ({ color }) => {
    const style = {
        width: '9px',
        height: '9px',
        backgroundColor: color,
        display: 'inline-block',
        outline: '1px solid black'
    };

    return <div style={style} />;
};

// fill an array with 44 rows and 44 columns
const pixelData = Array.from({ length: 44 }, () => Array.from({ length: 44 }, () => 'transparent'));
