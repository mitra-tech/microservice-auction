'use client'

import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import { Auction, PageResult} from '@/types/Index';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/AuctionActions';
import Filters from './Filters';
import { useParamsStore } from '@/hooks/useParamsStore';
import { shallow } from 'zustand/shallow';
import queryString from 'query-string';
import EmptyFilter from '../components/EmptyFilter';


export default function Listings() {
  
  const [data, setData] = useState<PageResult<Auction>>();
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    filterBy: state.filterBy,
    seller: state.seller,
    winner: state.winner
  }), shallow);


  const setParams = useParamsStore(state => state.setParams);
 const url = queryString.stringify({url: '', query: params});

 function setPageNumber(pageNumber: number) {
  setParams({pageNumber})
 }


  useEffect(() => {
    getData(url).then(data => {
      setData(data)
    })
  }, [url]);

  if(!data) return <h3>Loading ...</h3>

  if(data.totalCount === 0) return <EmptyFilter showReset />

  return (
    <>
    <Filters />
    {data.totalCount === 0 ? (
      <EmptyFilter showReset />
    ) : (
        <>
          <div className='grid grid-cols-4 gap-6'>
            {data.results.map((auction) => (
                <AuctionCard auction={auction} key={auction.id}/>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
          <AppPagination currentPage={params.pageNumber} pageCount={data.pageCount} pageChanged={setPageNumber}/>
          </div>
        </>
      )}
    </>
  )
}
