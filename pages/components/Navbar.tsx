import Link from 'next/link'
import { useState } from 'react'


export default function Navbar() {

    // mobile nav or full
    const [open, setOpen] = useState(false)


    return (

        // navbar
        <div className={`bg-slate-900 text-gray-200 h-12 py-4
        flex flex-col top-0 shadow-md shadow-light-gray
        transition-height duration-1000 ease-in-out
            ${open ? 'h-80 md:h-12' : ''}
        `}>

            {/* nav List */}
            <ul className={`flex flex-row w-full content-start gap-6
                ${open ? 'flex-col md:flex-row gap-4' : ''}
            `}>
                {/* nav head */}
                <div className={` ${open ?
                     'pb-4 border-b-[0.5px] border-slate-200 border-solid animate-widthGrowing' 
                     : '' }`}>
                    <Link className='ml-4' href='/'><span>Finnsätergård</span></Link>
                </div>

                {/* nav Links */}
                {[
                    ['Home', '/'],
                    ['Gården', '/Historia'],
                    ['Produkter', `/Produkter`],
                    ['Keramik', '/Keramik'],
                    ['Djuren', 'Djuren'],
                    ['Moments', 'Moments'],
                    ['Kontakt', 'Kontakt'],
                ].map(([title, url]) => (

                    <li key={title} className={`md:inline
                    ${open ? 'inline ml-4 mb-[2px] animate-visibilityGrowing' : 'hidden'} `}>
                        <Link key={title} href={url} className='hover:bg-slate-700 hover:p-1 rounded-md'>{title}</Link>
                    </li>
                ))}

            </ul>
            
            {/* hamburger meny */}
            <div className={`md:hidden absolute right-6 top-1 cursor-pointer`} onClick={() => {setOpen(!open)}}>
                <div className={`w-6 h-[2px] bg-slate-200 mx-0 my-2
                transform transition duration-700 ease-in-out ${open ? 'rotate-45 translate-y-2.5' : ''}
                `}       
                ></div>
                <div className={`w-6 h-[2px] bg-slate-200 mx-0 my-2
                transition duration-700 ease-in-out ${open ? 'opacity-0' : ''}
                `}       
                ></div>
                <div className={`w-6 h-[2px] bg-slate-200 mx-0 my-2
                transform transition duration-700 ease-in-out ${open ? '-rotate-45 -translate-y-2.5' : ''}
                `}               
                ></div>

            </div>
        </div>
    )
}