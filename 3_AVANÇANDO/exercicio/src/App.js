import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id:1,nome: "George", idade: 17, profissao: "Desenvolvedor"},
    {id:2,nome: "Clarissa", idade: 26, profissao: "Infermeiro"},
    {id:3,nome: "João", idade: 23, profissao: "Estudante"},
  ]
  return (
    <div className="App">
      <h1>Pessoas Cadastradas</h1>
      {users.map((user) => (
        <UserDetails
        key={user.id}
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}/>
      ))}
    </div>
  );
}
export default App;
