import React, {ReactNode} from 'react'
import Head from 'next/head'

// old sass-css
// import TopNavBar from './navbar/topbar/TopNavBar'
// import Footer from './navbar/footer/Footer'

// new tailwind
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Default title' }: Props) => {
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden m-0 p-0'>

            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            {children}

            <Footer />

        </div>

    )
}

export default Layout