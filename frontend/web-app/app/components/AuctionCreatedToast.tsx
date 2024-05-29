import { Auction } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    auction: Auction 
}

export default function AuctionCreatedToast({auction}: Props) {
  return (
    <Link href={`/auctions/details/${auction.id}`} className='flex flex-col text-center'>
        <div className='flex flex-roq items-center gap-2'>
            <Image src={auction.imageUrl} alt="image" height={80} width={80} className="rounded-lg w-auto h-auto" />
        </div>
        <span>New Auction! {auction.make} {auction.model} has been added!</span>
    </Link>
  )
}
