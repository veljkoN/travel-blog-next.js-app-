import React from 'react'
import { DestinationType } from '../../pages'
import PlaceItem from './DestinationItem'
import styles from './DestinationList.module.scss'

export interface DestinationListProps {
    placeData:DestinationType[]
}

const PlaceList:React.FC<DestinationListProps> = ({ placeData }) => {
  return (
      <section className={styles.grid}> 
      {
        placeData && placeData.map( data => 
          <PlaceItem 
            key={ data.id } 
            data={ data } 
          /> )
      }
    </section>
  )
}

export default PlaceList
