import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../../shared/navigation/NavBar'
const Layout = ( props ) => {
    return (
        <React.Fragment>
            <NavBar />
            <React.Fragment>
                { props.children }
            </React.Fragment>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
