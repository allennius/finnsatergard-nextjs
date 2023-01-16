export default function Page({ data } : {data:any}) {

    return (

        <div className="text-red-400">

            {data.map((url : any) => (


                <p key={url} className="">{url}</p>
            ))}
        </div>
    )
}

export async function getStaticProps() {


    // call api
    const res = await fetch(`${process.env.API_HOST}load`)
    const data = await res.json()
    console.log(data)

    // return data to props at build time
    return { props: {data}}
}