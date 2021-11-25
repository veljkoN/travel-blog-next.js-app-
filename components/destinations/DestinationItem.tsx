import React from 'react'
import { DestinationType } from '../../pages'
import styles from './DestinationItem.module.scss'
import { DestinationListProps } from './DestinationList'
import Image from 'next/image'
import Link from 'next/link'

interface DestinationItemProps {
    data:DestinationType
}

const PlaceItem:React.FC<DestinationItemProps> = ({ data }) => {
    return (
        <div className={ styles.gridItem }>
            <div className={ styles.card }>
            <Image
                className={ styles.cardImg } 
                src={ `${data.image}` } 
                alt="Rome" 
                width={500}
                height={300}
                priority
                
                
            />
            <div className={styles.cardContent}>
                <h1 className={styles.cardHeader}>{ data.place }</h1>
                <p className={styles.cardText}>{ data.description } </p>
                <button className={styles.cardBtn}><Link href={`/destination/${ data.id }`}><a> Visit <span>&rarr;</span></a></Link></button>
            </div>
            </div>
        </div>
    )
}

export default PlaceItem
