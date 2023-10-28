import React from 'react'

const AddItem = ({SetNewTodo,addItem}) => {
const handleAdd = ()=>{
    addItem()
    SetNewTodo('')
}
  return (
    <div className='m-auto flex justify-center my-4 outline-none'>
      <input autoFocus type="text" placeholder='Add Todo' onChange={(e)=>SetNewTodo(e.target.value)} className='border-2 p-2 rounded border-black outline-none'/>
      <button className='border-2 ml-[-3px] rounded border-black px-2 hover:text-red-600' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddItem
