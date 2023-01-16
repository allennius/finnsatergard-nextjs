import Image from 'next/image'
import Layout from './components/Layout'


export default function Produkter() {

  // img directory
  const imgUrl = '/pictures/'

    return (
        <Layout title='Produkter'>    

            <div className='flex-1 bg-gradient-to-t from-neutral-700 to-white '  >

                {/* header */}
                <div className='mx-auto my-16 text-center text-4xl'>
                    <h2>Våra Produkter</h2>
                </div>

                {/* content / container for produkter */}
                <div>

                    <ul className='p-12 '>

                        {/* produktrows */}
                        {[
                            ['this is a mushrooom', `${imgUrl}mushroom.jpg`],
                            ['this is a sheep Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem', `${imgUrl}sheep.jpg`],
                            ['this is a black sheep', `${imgUrl}sheepblack.jpg`],
                            ['this is a sheep hill', `${imgUrl}sheephill.jpg`],
                            ['this is flowers', `${imgUrl}flowersyellow.jpg`],
                            ['Ultra mega sheep view', `${imgUrl}sheephill.jpg`],
                        ].map(([desciption, url], index) => (
                            
                            <li key={index} className={`flex flex-row flex-nowrap mb-2 rounded-lg bg-inherit border-b-[0.5px] ${index % 2 ? '' : ''}`}>
                                
                                {/* textbox */}
                                <div className='text-left my-auto text-sm p-1 w-2/3 auto-cols-max overflow-auto'>
                                    <p>{desciption}</p>
                                </div>

                                {/* picture */}
                                <div className='ml-auto my-auto'>
                                    <Image  
                                        className='rounded-lg'
                                        src={`${url}`}
                                        alt='picture'
                                        height={100}
                                        width={100}
                                    />
                                </div>

                            </li>

                        ))}

                    </ul>
                </div>

            </div>
        </Layout>
    )
}