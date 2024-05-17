import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';

type Props = {
    lable: string
    type?: string
    showLabel?: boolean
} & UseControllerProps

export default function Input(props: Props) {

    const {fieldState, field} = useController({...props, defaultValue: ''})

  return (
    <div className='mb-3'>
        {props.showLabel && (
            <div className='mb-3 block'>
               <Label htmlFor={field.name} value={props.lable}/> 
            </div>
        )}
        <div className='mb-3 block'>
            <TextInput
                {...props}
                {...field}
                type={props.type || 'text'} 
                placeholder={props.lable}
                color={fieldState.error ? 'failure' : !fieldState.isDirty ? '' : 'seccess' }
                helperText={fieldState.error?.message}
            />
        </div>
    </div>
  )
}
