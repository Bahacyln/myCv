import React from 'react'
import styles from "./styles.module.css"
import skillsBox from '../skillsBox';

function OzgecmisItem({object={},array=[],itemType}) {
  if(itemType=="experience" || itemType=="education"){
    return (<div className={styles.boxItem}>
          <div className="flex mb-10 size-full">
            <div className="flex-1 pl-12 flex flex-col items-start justify-center gap-1 p-5">
              <div className="text-lg font-extrabold text-blue-600">{object.period}</div>
              <div className="text-lg font-thin text-gray-600">{itemType=="experience"?object.position:object.universityName}</div>
              <div className="text-sm text-gray-700">{itemType=="experience"?object.companyName:object.degreeLevel}</div>
              <div className="text-sm text-gray-700 mt-3">{itemType=="experience"?object.companyLocation:object.universityLocation}</div>
            </div>
            <div className="flex-1 flex flex-col justify-end p-5 tracking-normal whitespace-pre-wrap">
              {object.description.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </div>
          </div>
      </div>);
  }
  else if(itemType="skills"){
    return skillsBox(array);
  }
}

export default OzgecmisItem;