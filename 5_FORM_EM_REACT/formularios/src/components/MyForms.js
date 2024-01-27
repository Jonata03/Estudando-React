import "./MyForm.css"
import { useState } from 'react'
const MyForms = ({ user }) => {
  /* 3 - Gerenciamento de dados */
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : "");
  
  const [bio, setBio] = useState(user? user.bio: "")
  
  const [role, setRole] = useState(user ? user.role : "")
  const handleName = (e) => {
    setName(e.target.value);
  }
  /* console.log(name);
  console.log(email) */

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o form");
    console.log(name,email,bio,role);
    {/* 7 - limpando formularios */ }

    setName("");
    setEmail("");
    setBio("")
  }
  return (
    <div>

      {/* 6 - Controlled inputs */}
      {/* 5- envio de form(adicinando o preventDefault) */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome"
            onChange={handleName} value={name} />
        </div>

        {/*2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - forma de pegar informaçao mais pratica */}
          <input type="email" name="email" placeholder='coloque seu e-mail'
            onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        {/* 8 - textArea */}
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do usuario" 
          onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value) } value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForms