import React from 'react'
import { ListType } from '../Todo/Todo';
import { AiTwotoneDelete } from 'react-icons/ai';

function TodoList({todoList,onHandleDelete}:{todoList:ListType[],onHandleDelete:(id:number) => void}) {
  return (
    <ol className='list-decimal pt-10'>
        {todoList.map((e) => {
            return <li key={e.id} className='flex justify-center gap-10'><p>{e.todo}</p> <button onClick={() => onHandleDelete(e.id)}><AiTwotoneDelete /></button>  </li>
        })}
    </ol>
  )
}

export default TodoList;