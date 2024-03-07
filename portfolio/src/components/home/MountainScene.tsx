import * as React from 'react';
import Scene from './scene/Scene';
import Mountains from "@/assets/Mountains_landscape.svg";
import grasstest from "@/assets/back layers/grasstest.svg";
import Image from 'next/image';
import Scene2 from './scene/Scene2';

export function MountainScene() {
    return (
        <div className="z-0 ">
            <div className='h-[100vh]'>
                {/* <Scene /> */}
                <Scene2 />
                {/* <Image src={Mountains} fill /> */}
                <Image src={grasstest} fill />
            </div>
            <div className="h-[900px] bg-[#00274A] relative z-10">
                Test
            </div>
            {/* <Image src={Mountains} fill /> */}
        </div>
    );
}
