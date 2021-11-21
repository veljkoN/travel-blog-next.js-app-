import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../db/db-config';
import { addNewDestination } from '../../../helpers/db-util';

const  handler =  async ( req: NextApiRequest, res: NextApiResponse) => {
    let client;
    if ( req.method === 'POST') {
        let result;
        try {
            result = await addNewDestination(db, req.body)
            console.log(result)
            res.status(201).json({ message:'Place created'})
        } catch ( err ) {
            res.status(500).json({message:'Inserting destination faild'})
        }
       
    }
    //client.close()*/
}

export default handler
