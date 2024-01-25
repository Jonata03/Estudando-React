import React from 'react'
const UserDetails = ({nome,idade,profissao}) => {
  
  return (
    <div>
        <h3>______________________________</h3>
        <h2>nome: {nome}</h2>
        <h2>idade: {idade}</h2>
        <h2>profissao: {profissao}</h2>
        {idade >= 18? (<h2>pode</h2>) : (<h2>nao pode</h2>)}
    </div>
  )
}

export default UserDetails