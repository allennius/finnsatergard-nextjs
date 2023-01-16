import Layout from "./components/Layout"
import Image from 'next/image'


export default function Moments() {


    // img folder
    const imgUrl = '/pictures/'

    return (

        <Layout title='Moments'>
            
            {/* container */}
            <div className="flex-1 bg-slate-100">

                {/* header */}
                <div className="text-center py-12 text-4xl">
                    <h1>Momentos</h1>
                </div>

                {/* content */}
                <div className="mb-12">

                    {/* images */}
                    <div className="flex flex-row flex-wrap justify-center gap-6">

                    {[
                        ['this is a mushrooom', `${imgUrl}mushroom.jpg`],
                        ['this is a sheep Maecenas tempus, tellus eget cm', `${imgUrl}sheep.jpg`],
                        ['this is a black sheep', `${imgUrl}sheepblack.jpg`],
                        ['this is a sheep hill', `${imgUrl}sheephill.jpg`],
                        ['this is flowers', `${imgUrl}flowersyellow.jpg`],
                        ['Ultra mega sheep view', `${imgUrl}sheephill.jpg`],
                        ['this is a mushrooom', `${imgUrl}mushroom.jpg`],
                        ['this is a sheep Maecenas tempus, tellus eget cm', `${imgUrl}sheep.jpg`],
                        ['this is a black sheep', `${imgUrl}sheepblack.jpg`],
                        ['this is a sheep hill', `${imgUrl}sheephill.jpg`],
                        ['this is flowers', `${imgUrl}flowersyellow.jpg`],
                        ['Ultra mega sheep view', `${imgUrl}sheephill.jpg`],
                        ['this is a mushrooom', `${imgUrl}mushroom.jpg`],
                        ['this is a sheep Maecenas tempus, tellus eget cm', `${imgUrl}sheep.jpg`],
                        ['this is a black sheep', `${imgUrl}sheepblack.jpg`],
                        ['this is a sheep hill', `${imgUrl}sheephill.jpg`],
                        ['this is flowers', `${imgUrl}flowersyellow.jpg`],
                        ['Ultra mega sheep view', `${imgUrl}sheephill.jpg`],
                    ].map(([description, url], index) => (

                        <div
                            key={index} 
                            className={`w-40 h-32 block relative mx-1 mb-2`}>

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
                            <div className="relative top-32 truncate">
                                <p>{description}</p>
                            </div>
                        </div>

                        
                    ))}
                    </div>
                </div>

            </div>
        </Layout>
    )
}