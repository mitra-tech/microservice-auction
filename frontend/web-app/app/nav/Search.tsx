import React from 'react'
import { FaSearch } from 'react-icons/fa'

 export default function 
() {
  return (
    <div className='flex w-[50%] items-center bottom-2 rounded-full py-2 shadow-sm'>
        <input 
            type='text' 
            placeholder='Searcj for cars by make,  model or color' 
            className='
            flex-grow 
            pl-5 
            bg-transparent 
            focus:outline-none 
            border-transparent
            focus:ring-0
            text-sm 
            text-gray-500
            
            '
        />
        <button>
            <FaSearch 
                size={34} 
                className='bg-red-400 
                text-white 
                rounded-full 
                p-2 
                cursor-pointer 
                mx-2'
            />
        </button>
    </div>
  )
}