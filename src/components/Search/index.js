import React, { useState } from 'react'
import './Search.css'

function Search({search}) {
  const [searchText, setSearchText] = useState("react")
  const onSearch = (keyword) => {
    search(keyword)
  }
  return (
    <div className='search__form'>
      <input className='search__input dark__modify' placeholder='search' type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button className='btn__search dark__modify' onClick={()=>onSearch(searchText)}>search</button>
    </div>
  )
}

export default Search
