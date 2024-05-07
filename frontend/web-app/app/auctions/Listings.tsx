import React from 'react';
import AuctionCard from './AuctionCard';


// Fetchs data from serch service
async function getData() {
    const res = await fetch('http://localhost:6001/search');
    if(!res.ok) throw new Error('Failed to ferch data!');
    return res.json();
  }


export default async function Listings() {
    const data = await getData();

  return (
    <div className='grid grid-cols-4 gap-6'>
        {data && data.results.map((auction : any) => (
            <AuctionCard auction={auction} key={auction.id}/>
        ))}
    </div>
  )
}
