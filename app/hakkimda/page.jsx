import React from 'react'
import styles from "./styles.module.css"
import HakkimdaComponent from '@/components/hakkimdaComponent'

function Hakkimda() {
  return (
    <main>
      <div className={styles.containerBody}>
        <HakkimdaComponent/>
      </div>
      <div className={styles.background}>
        <div className={styles.backgroundLeftSide}></div>
        <div className={styles.backgroundRightSide}></div>
      </div>
    </main>
  )
}

export default Hakkimda