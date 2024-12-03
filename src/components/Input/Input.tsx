import React from 'react'
import { InputType } from '../Form/Form'

function Input({inpValue,setValue}:InputType) {

  return (
    <>
     <input className='w-[400px] p-2 outline-none shadow-lg' type="text" name="" id="" placeholder='Enter Your List' value={inpValue} onChange={(e) => setValue(e.target.value)}/> 
    </>
  )
}

export default Input

