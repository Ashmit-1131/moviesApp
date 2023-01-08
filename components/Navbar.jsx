import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link href={'/'}>
        Home
        </Link>
        <Link href={'/about'}>
        about
        </Link>
        <Link href={'/contact'}>
        contact
        </Link>
        <Link href={'/movies'}>
        Movies
        </Link>
    </div>
  )
}

export default Navbar