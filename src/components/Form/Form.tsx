import React, { FormEvent } from 'react'
import Input from '../Input/Input'
export interface FormType{
    inpValue:string;
    setValue:(e:string) => void;
    formSubmit:(e:FormEvent) => void
}
export interface InputType{
    inpValue:string;
    setValue:(e:string) => void;
}
function Form({inpValue,setValue,formSubmit}:FormType) {
  return (
    <form action='' onSubmit={(e) => formSubmit(e)}>
      <Input inpValue={inpValue} setValue={setValue} />
    </form>
  )
}

export default Form
