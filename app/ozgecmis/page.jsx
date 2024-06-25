import React from 'react'
import styles from "./styles.module.css"
import OzgecmisItem from '@/components/ozgecmisItem'
import { MdOutlineDeveloperMode } from 'react-icons/md'


function Ozgecmis() {
  return (
    <div className={styles.ozgecmisBody}>
      
      <div className={styles.mainTitle}><MdOutlineDeveloperMode className={styles.logoInput}/>CV</div>
      <div className={styles.titleAndDownloadBtn}>
        <div className={styles.title}>Deneyim</div>
        <button className={styles.cvDownloadBtn} >CV İNDİR</button>
      </div>
      <div className={styles.ozgecmisContainers}>
        <OzgecmisItem/>
        <OzgecmisItem/>
      </div>
    </div>
  )
}

export default Ozgecmis