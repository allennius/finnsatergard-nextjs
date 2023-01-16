import { useState } from 'react'

import Layout from "./components/Layout"
import Image from 'next/image'
import { handleWebpackExternalForEdgeRuntime } from 'next/dist/build/webpack/plugins/middleware-plugin'


export default function Djuren() {

    // imgfolder url
    const imgUrl = '/pictures/'

    // image url and check if open
    const [bigImageUrl, setBigImageUrl] = useState(``)
    const [isOpen, setIsOpen] = useState(false)

    const enlarge = (picture : any) => {
        console.log(picture.dataset.url)
        setBigImageUrl(picture.dataset.url)
        setIsOpen(!isOpen)
    }

    return (

        <Layout title='djuren'>
            

            {/* container */}
            <div className="flex-1  bg-slate-100">

                {/* header */}
                <div className="text-center py-12 text-4xl">
                    <h1>Djuren</h1>
                </div>

                {/* content */}
                <div>

                    {/* content text */}
                    <div className="px-8 mb-4">
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>

<p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>

<p>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                        
                    </div>

                    {/* content images */}
                    <div className="flex flex-row flex-wrap justify-center">

                        {[
                            [`${imgUrl}cow.jpg`],
                            [`${imgUrl}grandma.jpg`],
                            [`${imgUrl}sheep.jpg`],
                            [`${imgUrl}sheepblack.jpg`],
                            [`${imgUrl}mushroom.jpg`],
                            [`${imgUrl}sheepview.jpg`],
                        ].map((url, index) => (

                            <div
                                onClick={(e) => enlarge(e.target)} 
                                key={index} 
                                className="w-32 h-32 block relative mx-1 mb-2">

                                <Image 
                                    data-url={`${url}`}
                                    className="rounded-lg"
                                    src={`${url}`}
                                    alt='picture'
                                    fill     
                                    quality={75}
                                    sizes='(max-width: 768px) 40vw,
                                            (max-width: 1200px) 70vw,
                                            70vw'      
                                />
                            </div>

                            
                        ))}

                        {/* enlarged image */}
                        <div 
                            onClick={() => (setIsOpen(!isOpen))}
                            className={`${isOpen ? 'block' : 'hidden'}
                            relative -top-60 mx-auto md:-top-32
                        `}>

                            <Image 
                                src={`${bigImageUrl}`}
                                alt='picture'
                                height={1000}
                                width={1000}
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