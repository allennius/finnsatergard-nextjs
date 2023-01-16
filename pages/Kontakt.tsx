import React, { useState } from "react"
import Layout from "./components/Layout"


export default function Kontakt() {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e : any) => {
        const name = e?.target.name
        const value = e?.target.value

        setInputs(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (

        <Layout title='kontakt'>

            {/* container */}
            <div className="flex-1 bg-gray-100">

                {/* header */}
                <div className="text-center py-14">
                    <h1>Kontakt</h1>

                     

                </div>

                {/* content */}
                <div>

                    {/* kontakt info */}
                    <div className="mx-auto text-center w-80 ">

                        <p>Kontakta oss på telefon eller mail nedan</p>
                        <p className="text-left py-14">tel: 09420-1294</p>    
                        <p> I mailet ange ämne (köttlåda, skinn, keramik osv.)</p>
                    </div>

                    {/* form */}
                    <div className="flex justify-center pt-14">
                        <form className="flex flex-col w-80"
                            onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500
                                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    type='text'
                                    name='name'
                                    placeholder=' '
                                    value={inputs.name || ''}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500
                                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                    peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0
                                    peer-focus:scale-75 peer-focus:-translate-y-6
                                ">Namn</label>
                            </div>

                            {/* Email */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500
                                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    type='text'
                                    name='email'
                                    placeholder=' '
                                    value={inputs.email || ''}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500
                                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                    peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0
                                    peer-focus:scale-75 peer-focus:-translate-y-6
                                ">Email</label>
                            </div>

                            {/* subject */}
                            <div className="relative z-0 w-full mb-6 group">
                                <select className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500
                                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" "
                                name="subject"
                                value={inputs.subject || ''}
                                onChange={handleChange}
                                required
                                >
                                    <option>Köttlåda</option>
                                    <option>Keramik</option>
                                    <option>Skinn</option>
                                    <option>Övrigt</option>
                                    
                                </select>
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500
                                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                    peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0
                                    peer-focus:scale-75 peer-focus:-translate-y-6
                                ">Subject</label> 
                                {/* <input className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-500
                                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    type='text'
                                    name='subject'
                                    placeholder=' '
                                    value={inputs.subject || ''}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-300
                                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                    peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0
                                    peer-focus:scale-75 peer-focus:-translate-y-6
                                ">subject</label> */}
                            </div>


                            {/* Message */}
                            <div className="relative z-0 w-full mb-6 group ">
                                <textarea className="block py-2.5 px-0 w-full h-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500
                                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleChange}
                                name='message'
                                value={inputs.message || ''}
                                required
                                >

                                </textarea>
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500
                                    duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0]
                                    peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0
                                    peer-focus:scale-75 peer-focus:-translate-y-6
                                ">Meddelande</label>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}