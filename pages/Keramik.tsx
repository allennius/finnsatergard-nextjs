import Layout from "./components/Layout";
import Image from "next/image";


export default function Keramik() {


    // img directory
  const imgUrl = '/pictures/'

    return (

        <Layout title='Keramik'>

            {/* page container */}
            <div className="flex-1 text-white">

                {/* header */}
                <div className="my-16 text-center text-4xl ">
                    <h1>Keramik</h1>
                </div>

                {/* content */}
                <div className="">

                    {/* content header */}
                    <div className=" px-4 mx-auto text-center">
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>


                    </div>

                    {/* content */}
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
                                
                                <li key={index} className={`flex flex-row flex-nowrap mb-2 rounded-lg bg-inherit border-b-[0.5px] ${index % 2 ? 'flex-row-reverse ' : ''}`}>
                                    
                                    {/* textbox */}
                                    <div className={`my-auto text-sm px-2 w-2/3 auto-cols-max overflow-auto ${index%2 ? 'text-right' : 'text-left'}`}>
                                        <p>{desciption}</p>
                                    </div>

                                    {/* picture */}
                                    <div className={`my-auto ${index%2 ? 'mr-auto' : 'ml-auto'}`}>
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
            </div>
        </Layout>
    )
}