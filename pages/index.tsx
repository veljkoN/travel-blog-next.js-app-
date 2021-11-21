import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import 'react-datepicker/dist/react-datepicker.css';
import PlaceList, { DestinationListProps } from '../components/destinations/DestinationList'
import Footer from '../components/footer/Footer'
import LinkContainer from '../components/aside/LinkContainer'
import CentralBox from '../components/centralBox/CentralBox'
import DatePickerBox from '../components/datePicker/DatePickerBox'
//import { getAllDocuments } from '../helpers/db-util'
import axios, { AxiosResponse } from 'axios'
import { getAllDestionations } from '../helpers/api-util'

export type DestinationType = {
  id:number
  place:string 
  description:string 
  image:string
  visited:string
  continent: string
}

interface HomeProps {
  destinations: DestinationType[]
}

const Home: NextPage<HomeProps> = ( props ) => {
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date())

  const onChangeDate = (data:any) => {
    setSelectedDate(data)
  }
 
 
  return (
    <div>
      <Head>
        <title>Travel Story - Home</title>
        <meta name="description" content="Travel story from travel nomads and world wide postcard" />
      </Head>
      <div className={styles.root}>
        <DatePickerBox onChangeDate={ onChangeDate } selectedDate={ selectedDate } setSelectedDate={setSelectedDate} />
        <main className={styles.mainContainer}>
          <PlaceList placeData = { props.destinations } />
        </main>
        <CentralBox />
      </div>
    </div>
  )
}

export default Home

export const  getStaticProps = async () => {
  //const respData = await  getAllDestionations()
  let resp:any;
  try {
    resp = await axios.get(`http://localhost:3000/api/destination`)
  } catch ( err ) {
    console.log(err)
  }
  return {
    props:{
      destinations: resp.data.destinations
    }
  }
}
