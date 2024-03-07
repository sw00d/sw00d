import Head from 'next/head'
import HomePageComponent from '@/components/HomePage'
import clsx from 'clsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Wood - FullStack Engineer</title>
        <meta name="description" content="Hi I'm Sam! I build things!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                document.documentElement.classList.add('dark');
            `,
          }}
        />
      </Head>
      <main
        className={clsx(
          'min-h-[100vh] px-4 py-8 md:py-[5rem] flex justify-center flex-col items-center',
          'bg-lightBg text-darkBg dark:bg-darkBg dark:text-lightBg transition-colors duration-300'
        )}
      >
        <HomePageComponent />
      </main>
    </>
  )
}
