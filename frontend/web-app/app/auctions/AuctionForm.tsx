'use client'
import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export default function AuctionForm() {

    const {register, handleSubmit, setFocus, formState: {isSubmitting, isValid, isDirty, errors}} = useForm();

    function onSubmit(data: FieldValues) {
        console.log(data);
    }



  return (
    <form className='flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3 block'>
            <TextInput
                {...register('make', {required: 'Make is required!'} )}
                placeholder='Make'
                color={ errors?.make && 'failure'}
                helperText={errors.make?.message?.toString()}
            />
        </div>
        <div className='mb-3 block'>
            <TextInput
                {...register('model', {required: 'Model is required!'} )}
                placeholder='Model'
                color={ errors?.model && 'failure'}
                helperText={errors.model?.message?.toString()}
            />
        </div>
        <div className='flex justify-between'>
            <Button outline color='gray'>Cancel</Button>
            <Button 
                isProcessing={isSubmitting} 
                outline 
                color='success'
                type='submit'
                >Submit
            </Button>

        </div>
    </form>
  )
}
