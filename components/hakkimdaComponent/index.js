"use client"
import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function HakkimdaComponent() {
  const router = useRouter();

  const handleButtonClick = (pageName) => {
    router.push(`/${pageName}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLeftSide}>
        <div className={styles.containerLeftContent}>
          <Image
            src="/images/person-vector-illustration.png"
            alt=''
            width={170}
            height={170}
            className={styles.personImage}
          />
          <div className={styles.personInfos}>
          <div className={styles.personNameSurname}>
            Nazım Baha
          </div>
          <div className={styles.personNameSurname}>
            Ceylan
          </div>
          <hr className={styles.customHr}></hr>
          <div className={styles.personTitle}>
            Developer
          </div> 
          </div>         
        </div>
        <div className={styles.containerLeftFooter}>
          <Link className={styles.iconLink} target='blank' href="https://github.com/Bahacyln">
            <FaGithub/>
          </Link>
          <Link className={styles.iconLink} target='blank' href="https://www.linkedin.com/in/naz%C4%B1m-baha-ceylan-783069230/">
            <FaLinkedin/>
          </Link>
        </div>
      </div>
      <div className={styles.containerRightSide}>
        <div className={styles.textMerhaba}>
          Merhaba
        </div>
        <div className={styles.exampleQuestion}>
          Ben kimim? & Ne yapıyorum?
        </div>
        <div className={styles.containerRightSideButtons}>
          <button className={styles.pageButtonOzgecmis} onClick={()=>handleButtonClick('ozgecmis')} >Özgeçmiş</button>
          <button className={styles.pageButtonProjelerim} onClick={()=>handleButtonClick('projelerim')} >Projelerim</button>
        </div>
        <div className={styles.textDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
      </div>
    </div>
          )
}

export default HakkimdaComponent