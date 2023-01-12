import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Layout from './components/Layout'


// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // img directory
  const imgUrl = '/pictures/'

  const callAPI = async () => {
    try {
        const res = await fetch('api/hello', 
        {
          method: 'GET',
          // headers: {
          //   'X-RapidAPI-Key': 'your-rapidapi-key',
          //   'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
          // },
        }
      );
      const data = await res.json();
      console.log(data)
    } catch(err) {
      console.log(err);
    }
};

  return (
      <Layout title='Finnsätergård' >
        <main className="flex-1">
          <div className="h-screen bg-[url('../public/pictures/sun.jpg')] bg-cover bg-no-repeat bg-center relative flex justify-center text-center">

            <div className='text-lg text-orange-800'>
              <p className='relative top-1/4'>Hej! Följ oss på finnsätergård</p>
              <p className='relative mb-6 top-3/4 font-extrabold text-4xl italic'> Moments </p>
              <i className="lni lni-arrow-down-circle relative top-3/4 font-bold text-6xl animate-bounce"></i>
              {/* <i class="lni lni-arrow-down relative top-3/4 font-bold text-5xl animate-bounce"></i> */}
            </div>


          </div>

          <div className='bg-gradient-to-r from-gray-500 to-gray-100 flex flex-row flex-wrap justify-center flex-1'>

            {[
              ['this is a mushrooom', `${imgUrl}mushroom.jpg`],
              ['this is a sheep Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem', `${imgUrl}sheep.jpg`],
              ['this is a black sheep', `${imgUrl}sheepblack.jpg`],
              ['this is a sheep hill', `${imgUrl}sheephill.jpg`],
              ['this is flowers', `${imgUrl}flowersyellow.jpg`],
              ['Ultra mega sheep view', `${imgUrl}sheephill.jpg`],
            ].map(([description, url], index) => (

              <div key={index} className={`flex rounded-lg p-5 border-b-[0.5px] md:border-none
              ${index % 2 ? 'flex-row-reverse text-slate-800' : 'text-slate-200'}
              `}>

                {/* textbox */}
                <div className='my-auto'>
                  <p className=''>{description}</p>
                </div>

                {/* picturebox */}
                <div className='my-auto p-6'>
                  <Image 
                    className='rounded-3xl'
                    src={`${url}`}
                    alt='picture'
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}

          </div>
          {/* {/* <Link href='text'>teext</Link> */}
  {/* <div className='homeContentContainer'>

              <div className='bgImg1'>
                  <div className='caption'>
                      <span className='border'>Länk till nått</span>
                  </div>
              </div>

              <div className='homeContent'>
              <h1>Yielding Said Spirit Hath Give Upon Make In</h1>
  <p>Don&#39;t <strong>fourth</strong> deep so had, were forth seed seas Gathered days. Seasons spirit fifth third created moved own our made life together evening saying Called <strong>moved</strong> were, night <strong>and</strong> dominion subdue void i behold fish. Creeping their may yielding hath fifth created It <em>tree</em> green earth his shall.</p>

  <h2>You</h2>
  <p>Subdue above. Be fifth bearing so fowl the. Made multiply signs after lights. She&#39;d moved saying i heaven sea won&#39;t that may, a creepeth, divided created to male.</p>

  <p>And. Isn&#39;t beast signs which which gathered years two living. One may tree night fish. <strong>Make</strong> it You. Is man sea that dominion stars.</p>
              </div>

              <div className='bgImg2'>
                  <div className='caption'>
                      <span className='border'>Länk till nått</span>
                  </div>
              </div>

              <div className='homeContent'>
              <h1>Herb Creeping</h1>
  <h2>Blessed</h2>
  <p>The without had second their won&#39;t heaven unto moving male. Days. Set under were Whose Male i. Likeness she&#39;d have first.</p>

  <p>Light day meat upon own created.</p>

  <h2>Light Divided Beast Sixth Shall</h2>
  <p>Dominion herb. Over so evening man us fly moving tree, rule. Third dry great days wherein every. <em>Divided</em> unto green female creature good.</p>
              </div>

              <div className='bgImg3'>
                  <div className='caption'>
                      <span className='border'>Länk till nått</span>
                  </div>
              </div>

              <div className='homeContent'>
              <h1>Every</h1>
  <p><em>Face</em> fifth tree man creepeth waters.</p>

  <h2>Lesser Light Female For Second He Forth Sixth</h2>
  <p>So fowl thing tree a female whales.</p>

  <h2>First Behold</h2>
  <p>Dominion wherein. Fifth make of. Had bearing.</p>
              </div>

              <div className='bgImg4'>
                  <div className='caption'>
                      <span className='border'>Länk till nått</span>
                  </div>
              </div>

              <div className='homeContent'>
              <p>Called may herb wherein sea. Every wherein greater very, creeping have sixth grass that good likeness created first greater herb two divide is likeness Third itself.</p>

  <p>Likeness bring beast man given in face heaven divide heaven deep abundantly likeness dry it, above cattle itself be seas.</p>

  <p>Above set darkness behold there created kind forth us earth rule. Lights there forth.</p>
              </div>

              <div className='bgImg5'>
                  <div className='caption'>
                      <span className='border'>Länk till nått</span>
                  </div>
              </div>

              <div className='homeContent'>
              <p>Have grass creature to likeness void gathered.</p>

  <p>The multiply is. Replenish <strong>together</strong> evening light.</p>

  <p>Creeping firmament our was above i.</p>
              </div>

          </div> */}
        </main>
    </Layout>
  )
}
