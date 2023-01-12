import { useEffect } from "react"
import Link from 'next/link'


const closeNavbarOnClick = () => {

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', function() {
            document.querySelector('.topNav')?.classList.remove('responsive')
            toggleHamburger()

        })
    })

}

const toggleHamburger = () => {

        // 3 lines in hamburgerButton
        const line1 = document.querySelector('.bar1')
        const line2 = document.querySelector('.bar2')
        const line3 = document.querySelector('.bar3')

        if (document.querySelector('.topNav')?.classList.contains('responsive') ) {

            if (!line1?.classList.contains('change')) {

                line1?.classList.toggle('change')
                line2?.classList.toggle('change')
                line3?.classList.toggle('change')

            }
        } else {
            
            if (line1?.classList.contains('change')) {

                line1?.classList.toggle('change')
                line2?.classList.toggle('change')
                line3?.classList.toggle('change')
            }
        }



        // 3 lines in hamburgerButton
        // document.querySelector('.menuButtonContainer').childNodes[0].classList.toggle('change')   
        // document.querySelector('.menuButtonContainer').childNodes[1].classList.toggle('change')   
        // document.querySelector('.menuButtonContainer').childNodes[2].classList.toggle('change')   
}


const toggleMenuButton = () => {

    // toggle Navbar
    document.querySelector('.topNav')?.classList.toggle('responsive')

    toggleHamburger()

} 

export default function Topbar() {

    useEffect(() => {
    
        closeNavbarOnClick()
    
    })


    return (
        <div className="topNav bg-light-gray z-10 opacity-[.9] h-12
        overflow-hidden fixed flex top-0 w-full 
        transition-all duration-1000 ease-in-out
        shadow shadow-light-gray
        navbar navbar-expand">
            {/* <div className="navHead">
                <Link className="navLink" to="/"> <span> Finnsätergård</span></Link>
            </div> */}
            <ul className="navList">
                <div className="navHead">
                    <Link className="navLink" href="/"> <span> Finnsätergård</span></Link>
                </div>
                <li className="navItem">
                    <Link className="navLink" href="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" href="/tabs/Farmen">Farmen</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" href="/">Kossa</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" href="/">Får</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" href="/">##</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" href="/">##</Link>
                </li>
            </ul>
            <div className="menuButtonContainer" onClick={() => toggleMenuButton()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}
