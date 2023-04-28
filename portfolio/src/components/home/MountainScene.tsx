import * as React from 'react';
import Scene from './scene/Scene';
import Mountains from "@/assets/Mountains_landscape.svg";
import Image from 'next/image';
export interface IMountainSceneProps {
    children: React.ReactNode
}

export function MountainScene({ children }: IMountainSceneProps) {
    return (
        <div className="z-0 ">
            <div className="relative z-10">
                {children}
            </div>
            <div className="absolute top-0 w-full h-full z-0">
                <div className="fixed w-full h-full flex  items-center flex-col">
                    <h1 className="text-5xl text-black dark:text-white transition">
                        Samuel Wood
                    </h1>
                    <h2 className="text-2xl mt-4 text-slate-500 dark:text-slate-400 transition">
                        Frontend Developer
                    </h2>
                </div>
                <Scene
                    className="absolute left-[-390px]"
                />
            </div>
            <div className="h-[900px] bg-[#00274A] relative z-10">
                Test
            </div>
            {/* <Image src={Mountains} fill /> */}
        </div>
    );
}
