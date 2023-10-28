import React from 'react'

const Content = ({todos,addItem,handleCheck,DeleteUser}) => {
  return (
    
      <ul className='flex flex-col '>
        {todos.map((todo) =>{
            return <li className='flex gap-2   mt-2 bg-slate-400 w-auto m-auto p-4 rounded'>
                <input checked={todo.checked} type='checkbox' className='w-[30px]' onChange={()=>handleCheck(todo.id, todo.checked)}/>
                <label className='flex-grow text-center' style={todo.checked? {textDecoration:'line-through'} : null}>{todo.Task}</label>
                <button className='hover:text-red-500' onClick={()=>DeleteUser(todo.id)}>x</button>
            </li>
        })}
      </ul>
   
  )
}
export default Content
