import React from 'react'

const basics = (e) => {
    e.preventDefault();
  return (
    <div>
        <h1>BASIC</h1>
        <form>
            <label htmlFor='text'>NAME</label>
            <input type='text' id='text'></input>
            <button>submit</button>
        </form>
    </div>
  )
}

export default basics