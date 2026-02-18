import Link from 'next/link'
import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full flex justify-center mt-7.5 '>
      <nav className="flex [font-family:sans-serif] font-light leading-[16px] items-center justify-center ">
        <Link href="" className='cursor-default text-[#d8d8d8] flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>← Previous</Link>
        
        <Link href="" className='bg-[#e1e1e1] cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_8px_4px] font-light '>1</Link>

        <Link href="" className='cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>2</Link>

        <Link href="" className='cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>4</Link>
        
        <Link href="" className='cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>5</Link>

        <Link href="" className='cursor-default mr-[calc(4px*0)] text-black'>...</Link>

         <Link href="" className='cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>226681</Link>

         <Link href="" className='cursor-default mr-[calc(4px*0)] ml-2 text-black flex items-center justify-center rounded-lg p-[5px_4px-4px] font-light '>Next →</Link>

      </nav>
    </div>
  )
}

export default Pagination
