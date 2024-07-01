import React from 'react'
import { BiSolidSquareRounded } from 'react-icons/bi'
function MainTitle({title}) {
  return (
        <div className="flex items-center gap-1 mt-10 mb-0">
            <BiSolidSquareRounded className="iconColor text-2xl" />
            <div className='text-4xl font-bold tracking-wide'>
                {title}
            </div>
        </div>  )
}

export default MainTitle