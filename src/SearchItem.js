import React from 'react'

const SearchItem = ({Setsearch}) => {
  return (
    <div className='m-auto flex justify-center my-4 outline-none'>
    <input  type="text" placeholder='Search' onChange={(e)=>Setsearch(e.target.value)} className='border-2 p-2 rounded border-black outline-none'/>
    
  </div>
  )
}

export default SearchItem
