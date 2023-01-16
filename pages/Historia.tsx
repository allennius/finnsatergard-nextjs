import Image from 'next/image'
import React, { useState, ReactNode } from 'react'

import Layout from './components/Layout'




export default function Farmen() {
    
    // img directory
    const imgUrl = '/pictures/'

    // is enlarge image open and clicked img url
    const [isOpen, setIsOpen] = useState(false)
    const [bigImageUrl, setBigImageUrl] = useState(`${imgUrl}cow.jpg`)
    
    
    const enlarge = (picture : any) => {
        console.log(picture.dataset.url)
        setBigImageUrl(picture.dataset.url)
        setIsOpen(!isOpen)
    }


    return (
        <Layout title='Farmen' >

            {/* container */}
            <div className='bg-white flex flex-1 py-12 ' >

                {/* content */}
                <div className='flex-1'>

                    {/* header */}
                    <div className='text-center'>

                        <h2>Om Gården</h2>

                    </div>

                    {/* text */}
                    <div className='text-center m-auto mt-14 w-5/6'>

                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>

    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>

    <p>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>

    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>

    <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>

                    </div>



                {/* pictures */}
                <div className=' flex flex-row flex-wrap flex-1 mt-8 justify-center gap-[2px]'>
                    {[
                        [`${imgUrl}cow.jpg`],[`${imgUrl}grandma.jpg`],[`${imgUrl}sheep.jpg`],[`${imgUrl}sheepblack.jpg`],[`${imgUrl}mushroom.jpg`],[`${imgUrl}sheepview.jpg`]
                    ].map((url, index) => (

                        <div 
                            key={index} 
                            id={`${index}`} 
                            onClick={(e) => enlarge(e.target)}
                            className={`h-28 w-32 relative block`}>

                        <Image 
                            data-url={`${url}`}
                            src={`${url}`}
                            alt='Bild på kossa'
                            fill
                            quality={75}
                            sizes='(max-width: 768px) 40vw,
                                    (max-width: 1200px) 70vw,
                                    70vw'
                        />
                    </div>


                    ))}

                    {/* enlarge image when clicked on */}

                    <div className={`relative -top-60 self-center m-2 md:-top-32
                    ${isOpen ? 'block' : 'hidden'}`}
                    onClick={() => {setIsOpen(!isOpen)}}
                    >
                        <Image
                            src={`${bigImageUrl}`}
                            alt='picture'
                            width={1000}
                            height={1000}
                            quality={100}
                        />
                    <i className="lni lni-close  text-white text-lg font-extrabold absolute top-1 right-4 rounded 
                    animate-pulse hover:text-2xl"></i>
                    </div>

                </div>

                </div>


            </div>
        
        </Layout>
    )
}