'use client'
import { Button, TextInput } from 'flowbite-react';
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';

export default function AuctionForm() {

    const {control, handleSubmit, setFocus, formState: {isSubmitting, isValid, isDirty, errors}} = useForm({
        mode: 'onTouched'
    });

    useEffect(() => {
        setFocus('make')
    }, [setFocus] )

    function onSubmit(data: FieldValues) {
        console.log(data);
    }

  return (

    <form className='flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>

       <Input lable='Make' name='make' control={control} rules={{required: "Make is required!"}}/>
       <Input lable='Model' name='model' control={control} rules={{required: "Modle is required!"}}/>
       <Input lable='Color' name='color' control={control} rules={{required: "Color is required!"}}/>

        <div className='grid grid-cols-2 gap-3'>
            <Input lable='Year' name='year' control={control} type='number' rules={{required: "Year is required!"}}/>
            <Input lable='Mileage' name='mileage' control={control} type='number' rules={{required: "Mileage is required!"}}/>
        </div>

        <Input lable='Image URL' name='imageUrl' control={control} rules={{required: "Image URL is required!"}}/>

        <div className='grid grid-cols-2 gap-3'>
            <Input lable='Reserve Price (enter 0 if no reserve)' name='reservePrice' control={control} type='number' rules={{required: "Reserve Price is required!"}}/>
            <Input lable='Auction end date/time' name='auctionEnd' control={control} type='date' rules={{required: "Aiction end date is required!"}}/>
        </div>

        <div className='flex justify-between'>
            <Button outline color='gray'>Cancel</Button>
            <Button 
                isProcessing={isSubmitting} 
                outline 
                color='success'
                type='submit'>
                    Submit
            </Button>
        </div>

    </form>
  )
}
