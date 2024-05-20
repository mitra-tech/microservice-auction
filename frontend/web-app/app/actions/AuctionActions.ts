'use server'
import { Auction, PageResult } from '@/types';
import { fetchWrapper } from "@/lib/fetchWrapper";
import { FieldValues } from "react-hook-form";


// Fetchs data from serch service
export async function getData(query: string) : Promise<PageResult<Auction>> {
      return await fetchWrapper.get(`search${query}`)
  }
 
  export async function updateAuctionTest() {
    const data = {
      mileage : Math.floor(Math.random() * 100000) + 1
    }

    return await fetchWrapper.put('auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', data)
   

  }

  export async function createAuction(data: FieldValues) {
    return await fetchWrapper.post('auction', data);
  }


  export async function getDetailedViewData(id: string) : Promise<Auction> {
    return await fetchWrapper.get(`auction/${id}`);
  }