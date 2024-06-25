import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
        Made With by&nbsp;
        <Link target='_blank' className={styles.footerLink} href="https://github.com/Bahacyln">
            Nazım Baha Ceylan
        </Link>
    </footer>  )
}

export default Footer