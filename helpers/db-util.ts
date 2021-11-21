import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { DestinationType } from '../pages';

export async function getDestinations(db:any) {
  const destCol = collection(db, 'destinations');
  const destSnapshot = await getDocs(destCol);
  const destList = destSnapshot.docs.map(doc =>{ return  {id:doc.id,...doc.data()}});
  return destList;
}

export const addNewDestination  = async (db:any, dataObject:DestinationType) => {
  await addDoc(collection(db, "destinations"), dataObject);
}

export const getDestinationById = async (db:any, id:string) => {
  const destCol = collection(db, 'destinations');
  const destSnapshot = await getDocs(destCol);
  const destList = destSnapshot.docs.map(doc =>{ 
    if(doc.id === id) {
       return  {id:doc.id,...doc.data()}
      }
  })
  return destList;
}

