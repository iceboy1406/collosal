import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
