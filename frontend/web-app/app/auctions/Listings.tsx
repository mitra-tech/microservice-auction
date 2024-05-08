import React from 'react';
import AuctionCard from './AuctionCard';
import { Auction, PageResult } from '@/types/Index';
import AppPagination from '../components/AppPagination';


// Fetchs data from serch service
async function getData() : Promise<PageResult<Auction>>{
    const res = await fetch('http://localhost:6001/search?pageSize=4');

    if(!res.ok) throw new Error('Failed to ferch data!');
    
    return res.json();
  }


export default async function Listings() {
    const data = await getData();

  return (
    <>
    <div className='grid grid-cols-4 gap-6'>
        {data && data.results.map((auction) => (
            <AuctionCard auction={auction} key={auction.id}/>
        ))}
    </div>
    <div className='flex justify-center mt-4'>
      <AppPagination currentPage={1} pageCount={data.pageCount}/>
    </div>
    </>
  )
}
