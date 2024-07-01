import React from 'react'
import styles from "./styles.module.css"
import ContactForm from '@/components/contactForm'
import { BiSolidSquareRounded } from 'react-icons/bi'
import MainTitle from '@/components/mainTitle'

function Iletisim() {
  return (
    <div className={styles.iletisimBody}>
      <MainTitle title={"İletişim"}></MainTitle>
      <ContactForm/>
    </div>
  )
}

export default Iletisim