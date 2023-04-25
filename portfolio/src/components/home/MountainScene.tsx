import Image from 'next/image';
import * as React from 'react';
import Mountains from '@/assets/Mountains_landscape.svg'
import { GrassDark } from './scene/GrassDark';

export interface IMountainSceneProps {
    children: React.ReactNode
}
// const GrassDark = ({ fill = '#333' }) => (
//     <path
//       fill={fill}
//       d="M20,40c-5.5-5.5-13.5-5.5-19,0c-1.6,1.6-3.1,3.4-4.4,5.4c-0.4-0.2-0.8-0.4-1.2-0.6c-6.3-3-9.3-10.8-7.1-17.1
//       c2.2-6.2,9.2-9.8,15.4-7.6c3.6,1.3,6.6,4,8.4,7.5c-0.5-2.7-2.1-5.2-4.5-6.9c-4.1-2.8-9.4-1.4-12.3,2.7c-3,4.1-3.4,9.7-0.9,14.2
//       c2.6,4.6,7.3,7.3,12.3,6.8c3.1-0.3,5.8-1.8,7.9-4c-0.4,1.8-1.4,3.4-2.8,4.6c-2.5,2.1-5.9,3-9.1,2.5c-3.2-0.5-6.1-2.3-8-4.9
//       c-2-2.6-3-5.9-2.6-9.2c0.4-3.2,2.2-6.1,4.8-8c3.5-2.5,8-2.3,11.3,0.6C25.5,26.5,25.5,34.5,20,40z M15.8,28.9c-2.2,2.2-2.2,5.7,0,7.9
//       c1.1,1.1,2.5,1.7,3.9,1.7c1.4,0,2.8-0.6,3.9-1.7c2.2-2.2,2.2-5.7,0-7.9C21.5,26.7,18,26.7,15.8,28.9z M23.4,23.4
//       c-2.2,2.2-2.2,5.7,0,7.9c1.1,1.1,2.5,1.7,3.9,1.7c1.4,0,2.8-0.6,3.9-1.7c2.2-2.2,2.2-5.7,0-7.9C29.1,21.2,25.6,21.2,23.4,23.4z"
//     />
//   );

export function MountainScene({ children }: IMountainSceneProps) {
    return (
        <div className="z-0">
            <div className="relative z-10">

                {children}
            </div>
            <svg
                version="1.1"
                id="svg2"
                width="1122.52"
                height="793.70667"
                viewBox="0 0 1122.52 793.70667"
                className='absolute top-0 left-0 z-0'
            >
                <GrassDark />
            </svg>
            {/* <Image src={Mountains} fill /> */}
        </div>
    );
}
