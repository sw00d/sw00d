import React, { useState } from 'react';
import Head from 'next/head';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import 'tailwindcss/tailwind.css';
import { useDarkMode } from '@/context/darkModeContext';
import Layout from '@/components/layout/Layout';
import { MountainScene } from '@/components/home/MountainScene';
import Image from 'next/image';

const IndexPage: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Head>
        <title>Samuel Wood</title>
      </Head>
      <main>
        <div className="bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl transition">
          <div className="flex items-center justify-between p-4 absolute top-0 left-0 z-20">
            <button
              onClick={toggleDarkMode}
              className="rounded-lg border border-gray-300 dark:border-gray-600  p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-white" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
              {" "} Currently: {!isDarkMode ? 'Light' : 'Dark'}
          </div>
          <MountainScene>
            <div className="min-h-screen">
            </div>
          </MountainScene>
        </div>
      </main>
    </div>
  );
};


export default function Index() {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}
