import React from 'react'
import "./MyComponent.css"
const MyComponent = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>paragrafo do meu componente</p>
        <p className='my-css'>testando vazamento</p>
    </div>
  )
}

export default MyComponent