import React from 'react'
import styles from "./styles.module.css"
import { BiSolidSquareRounded } from "react-icons/bi";
import Image from 'next/image';


function ProjectsComponent({array=[]}) {
  return (
<div className={styles.projelerimBody}>
      <div className="flex items-center gap-1 mt-10 mb-0">
        <BiSolidSquareRounded className="iconColor text-2xl" />
        <div className='text-4xl font-bold tracking-wide'>
          Projeler
        </div>
      </div>
      <div className="max-w-2xl text-center tracking-wide text-base font-medium">
        Bu sayfada, üzerinde çalıştığım ve geliştirdiğim çeşitli projeleri bulabilirsiniz. Her bir proje, farklı teknolojiler ve çözümler kullanılarak geliştirilmiş olup, deneyimlerim ve yeteneklerim doğrultusunda şekillendirilmiştir.
      </div>

      <div className="flex gap-20 flex-col">

        {array.map((item,index)=>(
          <div key={index} className="flex size-full items-center w-[700px] min-h-80  bg-white shadow-[0px_0px_25px_5px_rgba(134,134,134,0.391)] justify-around">
            <div className="w-7/12 size-full flex flex-col py-10">
              <div className='flex'>
                <div className='bg-blue-600 w-3'></div>
                <div className="flex flex-col gap-1">
                  <div className='tracking-extrawide text-blue-600 font-extrabold text-xl px-5'>
                    {item.project_name}
                  </div>
                  <div className='tracking-extrawide font-bold text-ld px-5'>
                    {item.role_title}
                  </div>
                </div>
              </div>
              <div className='px-8 py-3'>
                {item.description}
              </div>
            </div>
            <div className="w-6/12 size-full flex flex-col bg-gray-300">
              <Image
                src={item.project_img_path}
                alt=''
                width={1000}
                height={1000}
              />
            </div>
          </div>

        ))}
      </div>
    </div>  )
}

export default ProjectsComponent