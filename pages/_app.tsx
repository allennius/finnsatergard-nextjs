import type { AppProps } from 'next/app'
import '../styles/global.css'


// import "./components/navbar/topbar/topNavbar.css"
// import "./components/navbar/footer/footer.css"
// import TopNavBar from './components/navbar/topbar/TopNavBar'
// import Footer from './components/navbar/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <TopNavBar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>

  )
}
