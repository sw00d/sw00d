import * as React from 'react';
import Scene from './scene/Scene';
import Mountains from "@/assets/Mountains_landscape.svg";
import Image from 'next/image';

export function MountainScene() {
    return (
        <div className="z-0 ">
            <div className='h-[100vh]'>
                <Scene />
                {/* <Image src={Mountains} fill /> */}
            </div>
            <div className="h-[900px] bg-[#00274A] relative z-10">
                Test
            </div>
            {/* <Image src={Mountains} fill /> */}
        </div>
    );
}
