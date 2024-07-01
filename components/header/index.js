import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
import { MdOutlineDeveloperMode } from "react-icons/md";
import MainTitle from '../mainTitle';

function Header() {
  return (
    <div className={styles.headerBody}>
      <div className={styles.headerInfos}>
            <Link href="/" className={styles.headerLogo}>
                <MdOutlineDeveloperMode className={styles.logoInput}/>
            </Link>
            <div className={styles.headerTitle}>
                <div className={styles.personalName}>
                    Nazım Baha Ceylan
                </div>
                <div className={styles.headerPersonSlash}>
                    /
                </div>
                <div className={styles.personalTitle}>
                    Developer
                </div>
            </div>
        </div>
        <div className={styles.headerButtons}>
            <Link href="/hakkimda" className={styles.headerButton}>
                Hakkımda
            </Link>
            <Link href="/ozgecmis" className={styles.headerButton}>
                Özgeçmiş
            </Link>
            <Link href="/projelerim" className={styles.headerButton}>
                Projelerim
            </Link>
            <Link href="/iletisim" className={styles.headerButton}>
                İletişim
            </Link>
            
        </div>
    </div>
  )
}

export default Header