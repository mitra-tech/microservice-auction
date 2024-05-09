'use server'


import { Auction, PageResult } from "@/types/Index";


// Fetchs data from serch service
export async function getData(query: string) : Promise<PageResult<Auction>>{
    const res = await fetch(`http://localhost:6001/search${query}`);

    if(!res.ok) throw new Error('Failed to ferch data!');
    
    return res.json();
  }