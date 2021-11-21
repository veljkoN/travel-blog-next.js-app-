import React from 'react' 
import styles from './DestinationDetails.module.scss'
import { getDestinationById } from '../../helpers/db-util'
import { DestinationType } from '../index'
import { db } from '../../db/db-config';
import axios from 'axios'

interface DestinationDetailsInterface {
    destination:DestinationType
}

const DestinationDetails:React.FC<DestinationDetailsInterface> = ( props ) => {
    const { destination } = props
    if ( !destination ) {
        return <p>Loading...</p>
    }
   
    return (
        <div className={ styles.destinationDetailsBox }>
            <div className={ styles.card }>
            <img className={ styles.cardImg } src={ `.${destination.image}` } alt={ destination.place } />
                <div className={ styles.cardContent }>
                    <h1 className={ styles.cardHeader }>{ destination.place }</h1>
                    <p className={ styles.cardText }>{ destination.description } </p>
                </div>
            </div>
        </div>
    )

}

export default DestinationDetails

export const getStaticPaths = async () => {
    const resp:any = await axios.get(`http://localhost:3000/api/destination`)
    const dataParams = resp.data.destinations.map((dest: any ) => {
      return {
        params: { id: dest.id }
      }
    })
    return {
      paths: dataParams,
      fallback:'blocking'  //???
    }
}

export const getStaticProps = async ( context: {params:{ id:string}} ) => {
    const id = context.params.id
    const resp:any = await getDestinationById(db, id)
    const respData = resp.filter((data:any)=>data)
    return {
        props:{
            destination:respData[0],
            revalidate: 30
        }
    }
}
