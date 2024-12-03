'use client';
import React, { FormEvent, useState } from 'react'
import Form from '../Form/Form'
import TodoList from '../TodoList/TodoList'
export interface ListType{
    id:number;
    todo:string;
}
function Todo() {
    //Handle Input
    const [inputValue,setinputValue] = useState<string>('');
    
    //Handle Todo list
    const [list,setList] = useState<ListType[]>([]);
    // spread operator working that way [1,2,3,4,5] => 1,2,3,4,5
    //generate unique ID
    const generateId:number = list.length>0 ? Math.max(...list.map((e) => e.id))+1: 1;
    
    const onHandleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(inputValue.trim() === ''){
            alert("Plz Fill the Input")
        }else{
            alert("Todo Created");
            console.log(generateId);
            // prev is leya likha ke ke jab hum input me value add kare or jab second value add kare
            // to prevs list add hu na ke remove hu jay agr hum ya par (prev) like to ak ke bad ak 
            // list  prin huge
            setList((prev) => [...prev,{id:generateId,todo:inputValue}]);
            setinputValue('');
        }
    };

    const onHandleDelete = (id:number) => {
      const filttodoList = list.filter((e) => {
        return e.id !== id;
      });
      setList(filttodoList);
    };
  return (
    <>
      <section className='font-mono flex justify-center items-center flex-col'>
        <Form inpValue={inputValue} setValue={setinputValue} formSubmit={onHandleSubmit}/>
        <TodoList todoList={list} onHandleDelete={onHandleDelete}/>
      </section>
    </>
  )
}

export default Todo
