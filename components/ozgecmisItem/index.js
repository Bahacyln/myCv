import React from 'react'
import styles from "./styles.module.css"

function OzgecmisItem() {
  return (
    <div className={styles.boxItem}>
      <div class="flex-1"  className={styles.boxLeftSide}>
        LEFT
      </div>
      <div class="flex-1" className={styles.boxRightSide}>
        RIGHT
      </div>
    </div>
  )
}

export default OzgecmisItem;