import axios from 'axios'
import React, { useRef } from 'react'
import styles from './CreateNew.module.scss'

type currentInputType = {
    value:string
}

type refInputType = {
    current: any
}

const CreateDestination = () => {
    const placeRef = useRef <HTMLInputElement>( null )
    const continentRef = useRef <HTMLInputElement>( null )
    const dateRef = useRef <HTMLInputElement>( null )
    const descRef = useRef <HTMLTextAreaElement>( null )
 
    const addNewDestination = async ( e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( 
            placeRef && placeRef.current &&
            continentRef && continentRef.current &&
            dateRef && dateRef.current &&
            descRef && descRef.current
            ) {
            const obj = {
                place:placeRef.current.value,
                continent:continentRef.current.value,
                date :dateRef.current.value,
                description:descRef.current.value,
                image:''
            }
            try {
                const response = await axios.post(`/api/destination/create-new`, obj)
                console.log(response.data.message)
            } catch ( err ) {
                console.log(err)
            }
            placeRef.current.value = ""
            continentRef.current.value = ""
            dateRef.current.value = ""
            descRef.current.value = ""
        }
        
       
    }
    return (
        <div className={ styles.createForm }>
            <div className={ styles.container }>
            <div className={ styles.formBox }>
                <div className={ styles.left }></div>
                <div className={ styles.right }>
                    <h4 className={ styles.createBoxHeader }>Create new destination</h4>
                    <form onSubmit={ addNewDestination }>
                        <input type="text" ref={ placeRef } className={ styles.field } placeholder="Your Place" />
                        <input type="text" ref={ continentRef } className={ styles.field } placeholder="Choose continent" />
                        <input type="text" ref={ dateRef } className={ styles.field } placeholder="Date of visiting" />
                        <textarea placeholder="Description text" ref={ descRef } className={ `${ styles.field } ${ styles.textArea }` }></textarea>
                        <button className={ styles.btn } type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CreateDestination
