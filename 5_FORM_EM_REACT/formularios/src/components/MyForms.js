import "./MyForm.css"
import {useState} from 'react'
const MyForms = () => {
  /* 3 - Gerenciamento de dados */
  
  const [name, setName] = useState();
  const [email,setEmail] = useState();

  const handleName = (e) =>{
    setName(e.target.value);
  }
  /* console.log(name);
  console.log(email) */

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o form");
    console.log(name);
    console.log(email) 
  }
  return (
    <div>
      {/* 5- envio de form */}

      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
        </div>

        {/*2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - forma de pegar informaçao mais pratica */}
          <input type="email" name="email" placeholder='coloque seu e-mail' onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForms