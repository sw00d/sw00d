import { useDarkMode } from '@/context/darkModeContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DarkModeProvider } from '../context/darkModeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

