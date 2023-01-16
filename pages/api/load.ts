import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const Load = (req : NextApiRequest, res : NextApiResponse) => {
    const sourceFolder = `pictures`

    const dir = path.resolve('./public', sourceFolder)

    const filenames = fs.readdirSync(dir)

    // filenames = filenames.filter(file => file)


    const images = filenames.map(name => (path.join('/', sourceFolder, name)))

    const filtered = images.filter(file => file.includes('.jpg'))

    res.statusCode = 200
    res.status(200).json(filtered)
}

export default Load

// type Data = {
//     pic: Blob,
//     text: string
// }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     res.status(200).json({ 
//         pic: 'sdsd',
//         text: 'dsds' })
// }