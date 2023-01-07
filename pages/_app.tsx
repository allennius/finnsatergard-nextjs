import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "./components/topbar/topNavbar.css"

import TopNavBar from './components/topbar/TopNavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <TopNavBar /> */}
      <Component {...pageProps} />
    </>

  )
}
