import Link from 'next/link'
import React from 'react'

const TitleMenu = ({social, setSocial, reviewTotal, discussionTotal}) => {
  return (
    <div className='w-full flex items-baseline '>
      <h3 className="inline-block mr-12.5 text-black font-semibold text-[22.4px] mb-5 m-[0_0_4px] leading-none ">Social</h3>
      <ul className="w-full text-black">
        <li onClick={()=>setSocial("Reviews")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${social === 'Reviews' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Reviews <span className="inline-flex items-center opacity-60 font-semibold ">{reviewTotal}</span></Link>
        </li>

        <li onClick={()=>setSocial("Discussions")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${social === 'Discussions' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Discussions <span className="inline-flex items-center opacity-60 font-semibold ">{discussionTotal}</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default TitleMenu
