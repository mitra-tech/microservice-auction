import React from 'react'; 

type Props = {
    pageSize: number
    setPageSize: (size: number) => void;
}
const pageSizeButtons = [4, 8, 12];

export default function Filters({pageSize, setPageSize}: Props) {
  return (
    <div className='flex justify-between items-center mb-4'>
        <div>
            <span className='uppercase text-sm text-gray-400 mr-2'> </span>
        </div>
    </div>
  )
}
