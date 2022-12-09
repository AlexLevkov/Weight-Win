import React from 'react'

const Header = (props) => {
  return (
    <header><h1>Weight Win header</h1>
      <h2>{props.title}</h2>
    </header>
  )
}

export default Header