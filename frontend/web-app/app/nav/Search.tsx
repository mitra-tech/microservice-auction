'use client'
import { useParamsStore } from '@/hooks/useParamsStore';
import { stat } from 'fs';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

 export default function Search() {

    const setParams = useParamsStore(state => state.setParams);

    const setSearchValue = useParamsStore(state => state.setSearchValue);
    const searchValue = useParamsStore(state => state.searchValue);

    function onChange(e: any) {
        setSearchValue(e.target.value);
    }
    function search() {
        setParams({searchTerm: searchValue});
    }
  return (
    <div className='flex w-[50%] items-center bottom-2 rounded-full py-2 shadow-sm'>
        <input 
            onKeyDown={(e: any) => {
                if(e.key === "Enter") search();
            }}
            onChange={onChange}
            value={searchValue}
            type='text' 
            placeholder='Search cars by make, model or color' 
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
        <button onClick={search}>
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