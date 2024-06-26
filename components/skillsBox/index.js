import React from 'react'
import styles from "./styles.module.css"
import { BiSolidSquareRounded } from "react-icons/bi";

function skillsBox(array=[]) {
    
  if(array[0]!=undefined){
    return (
          <div className="flex items-center w-[700px] mh-[320px] bg-white shadow-[0px_0px_25px_5px_rgba(134,134,134,0.391)] justify-around">
            <div className="flex mb-10 size-full">
              <div className="flex-1 pl-12 flex flex-col items-start justify-center gap-1 p-5">
                {array.map((item,index)=>{
                  return (
                    <div key={index} className="flex flex-col mt-7 w-full">
                      <div className="font-extrabold text-2xl p-2">
                        {item.category}
                      </div>
                      <div className="flex flex-row flex-wrap">
                        {item.items.map((elem,ind)=>(
                          <div key={ind} className='w-1/2 p-2 flex gap-1 items-center'>
                            <BiSolidSquareRounded className={styles.iconColor} />
                            <div className="text-sm">
                              {elem}
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>);
  }
  else
    return "";
}

export default skillsBox