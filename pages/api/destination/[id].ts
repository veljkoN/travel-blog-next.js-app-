import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../db/db-config';
import { getDestinationById } from '../../../helpers/db-util';

const  handler =  async ( req: NextApiRequest, res: NextApiResponse) => {
  if ( req.method === 'GET') {
    try {
      const id: string | string[] = req.query.id
      if ( typeof id !== 'object') {
        const resp:any = await getDestinationById(db, id)
        const respData = resp.filter((data:any)=>data)
        res.status(200).json({ destination: respData })
      }
      
    } catch (error) {
      console.log(error)
    }
  }
}
  
export default handler