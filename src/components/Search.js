import React from 'react'

const Search = props => {
  // console.log(props)
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e)=> props.handleSearch(e)} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
