import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const NavBar = () => {
    return (
        <nav className={ styles.nav }>
            <input className={ styles.navToggle } id="navToggle" type="checkbox"/>
            <div className={ styles.logo }><Link href="/"><span>Travel<strong>STORY</strong></span></Link></div>
            <ul className={ styles.links }>
                <li><Link href="/">All Places</Link></li>
                <li><Link href="/destination/create-new">Create new</Link></li>
                <li><Link href="#about">Last posted</Link></li>
                <li><Link href="#work">Top Destination</Link></li>
                
            </ul>
            <label htmlFor="navToggle"  className={ styles.iconBurger }>
                <div className={ styles.line }></div>
                <div className={ styles.line }></div>
                <div className={ styles.line }></div>
            </label>
        </nav>
       
    )
}

export default NavBar
