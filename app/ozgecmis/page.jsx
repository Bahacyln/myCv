import React from 'react'
import styles from "./styles.module.css"
import OzgecmisItem from '@/components/ozgecmisItem'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import deneyimArray from '@/data/deneyimData'
import universityArray from '@/data/egitimData'
import skillsArray from '@/data/meslekiBecerilerData'

function Ozgecmis() {
  return (
    <div className={styles.ozgecmisBody}>
      <div className={styles.mainTitle}><MdOutlineDeveloperMode className={styles.logoInput}/>CV</div>
      <div className={styles.titleAndDownloadBtn}>
        <div className={styles.title}>Deneyim</div>
        <button className={styles.cvDownloadBtn} >CV İNDİR</button>
      </div>
      <div className={styles.ozgecmisContainers}>
        {deneyimArray.map((item,index)=>{
          return <OzgecmisItem key={index} object={item} itemType={"experience"}/>
        })}
      </div>

      <div className={styles.titleAndDownloadBtn}>
        <div className={styles.title}>Eğitim</div>
      </div>
      <div className={styles.ozgecmisContainers}>
        {universityArray.map((item,index)=>{
          return <OzgecmisItem key={index} object={item} itemType={"education"}/>
        })}
      </div>
      <div className={styles.titleAndDownloadBtn}>
      </div>
      <div className={styles.ozgecmisContainers}>
        <OzgecmisItem array={skillsArray} itemType={"skills"}/>
      </div>
    </div>
  )
}

export default Ozgecmis