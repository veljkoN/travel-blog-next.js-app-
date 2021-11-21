import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../db/db-config';
import { getDestinations } from '../../../helpers/db-util';
//import { connectDatabase, getAllDocuments } from '../../../helpers/db-util'

const  handler =  async ( req: NextApiRequest, res: NextApiResponse) => {
  let client;

  /*try {
      client = await connectDatabase()
  } catch (error) {
      res.status(500).json({ message:'Connecting to database failed!'})
      return   //ako ima greska na serveru, onda se kod ovde zavrsava
  }
  //console.log(client)
  if ( req.method === 'GET' ) { 
    try {
        const documents = await getAllDocuments(client,'destinations',{_id:-1})
        res.status(200).json({ destinations: documents })
    } catch (error) {
        res.status(500).json({ message: 'Getting destinations failed.'})
        //return;  ovde ne stavljam return da bih uhvatio client.close() u slucaju greske
    }
  }
  if ( req.method === 'POST') {
    res.status(201).json({ message:'Place created'})
  }
   client.close()
  //res.status(200).json({ name: 'John Doe' })*/

  try {
    const documents = await getDestinations(db) 
    res.status(200).json({ destinations: documents })
  } catch (error) {
    console.log(error)
  }
}

export default handler
