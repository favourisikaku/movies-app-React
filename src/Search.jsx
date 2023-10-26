import React from 'react'

const Search = ({  setMovies, searchMovies, setSearchMovies}) => {

  const onSubmitHandle = async (e) => {
    e.preventDefault()

    const searchAPI ='https://api.themoviedb.org/3/search/movie?&api_key=ef6c97b1e970d7e7cc8bfa3d35c69f26&query='

    const res = await fetch (searchAPI + searchMovies)
    const data = await res.json()
    setMovies(data.results)
    setSearchMovies('')
   }

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
            <input className='search'
              type="text"
              placeholder='Search Movies.....'
              value={searchMovies}
              onChange={(e) => setSearchMovies(e.target.value)} />          
          </form>
    </div>
  )
}

export default Search
