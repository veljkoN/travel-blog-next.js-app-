import React from 'react'
import styles from './Footer.module.scss'
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </footer>
    )
}

export default Footer
