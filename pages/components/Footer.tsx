import Link from 'next/link'

export default function Footer() {


    return (

        <footer className="h-50 sm:h44 bg-slate-900 text-white">

            <div className="flex flex-row justify-around p-4 flex-wrap gap-8 md:flex-nowrap md:gap-18">
                {/* Links in footer */}
                <div className='flex flex-col flex-wrap sm:w-1/2 md:w-1/4'>
                    <h4 className="mb-4 font-semibold relative

                    before:content-[''] before:absolute before:bg-orange-400 before:w-5 
                    before:h-px before:left-0 before:-bottom-1
                    ">
                    Finnsätergård</h4>

                    <ul className='text-sm text-gray-400'>
                        {[
                            ['Home', '/'],
                            ['Farmen', '../tabs/Farmen'],
                            ['#', '#'],
                            ['##', '#']
                        ].map(([title, url]) => (
                            <li className='pt-1' key={title}><Link href={url}
                                className='hover:pl-1 hover:rounded-sm'
                            >{title}</Link></li>
                        ))}
                    </ul>
                </div>
                
                {/* kontakt in footer */}
                <div className='flex flex-col flex-wrap w-1/4'>
                    <h4 className="mb-4 font-semibold relative

                    before:content-[''] before:absolute before:bg-orange-400 before:w-5 
                    before:h-px before:left-0 before:-bottom-1
                    ">
                    Kontakt</h4>

                    <ul className='text-sm text-gray-400'>
                        <li className='pt-1'><Link href="/"
                            className='hover:pl-1 hover:rounded-sm'
                        >Kontaktformulär</Link></li>
                        <li className='pt-1 hover:pl-1 hover:rounded-sm'>Tel: 083-2849414124 </li>
                        <li className='pt-1'><Link href="mailto:example@finnsatergard.se"
                            className='hover:pl-1 hover:rounded-sm'
                        ><span>Email:</span> <span className='text-xs text-italic'>example@finnsatergard.se</span></Link></li>
                    </ul>
                </div>

                {/* newsletter footer */}
                <div className='hidden sm:flex flex-col flex-wrap sm:w-1/2 md:w-1/5'>
                    <h4 className="mb-4 font-semibold relative

                    before:content-[''] before:absolute before:bg-orange-400 before:w-5 
                    before:h-px before:left-0 before:-bottom-1
                    ">
                    Nyhetsbrev</h4>

                    <input 
                    type="text" 
                    placeholder="Email Adress"
                    className='placeholder:italic placeholder:text-slate-600 block p-1 rounded-md border border-orange-400
                    bg-slate-300 w-56
                    '
                    
                    ></input>
                    <button className='bg-slate-300 border-orange-400 border text-slate-600 rounded-md w-16 mt-2 ml-40'>Submit</button>
                </div>

                {/* social links footer */}
                <div className='flex flex-col w-1/4 md:w-1/5 md:relative md:left-20'>

                    <h4 className="mb-4 font-semibold relative

                    before:content-[''] before:absolute before:bg-orange-400 before:w-5 
                    before:h-px before:left-0 before:-bottom-1
                    ">
                    Social</h4>
                    <div className='flex gap-2'>
                        <Link href='https://www.instagram.com/finnsatergard/' className='bg-[#E1306C] md:bg-light-gray hover:bg-[#E1306C] h-8 w-8 text-base rounded-full'>
                            <i className='lni lni-instagram-original mt-2 ml-2'></i></Link>

                        <Link href='https://m.facebook.com/finnsater/' className='bg-[#4267B2] md:bg-light-gray hover:bg-[#4267B2] h-8 w-8 text-base rounded-full'>
                            <i className='lni lni-facebook-filled mt-2 ml-2'></i></Link>
                    </div>
                </div>

            </div>



        </footer>
    )
} 