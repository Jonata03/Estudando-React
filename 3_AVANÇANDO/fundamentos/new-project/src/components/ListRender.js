import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(["Mateus","Pedro", "Josias"]);

  const [users, setUsers] = useState([
    {id: 1, name: "matheus", age: 21},
    {id: 123213, name: "george", age: 30},
    {id: 32452, name: "steven", age: 50}
  ]);

  const deleteRandom = () =>{
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
    console.log(prevUsers)   
      return prevUsers.filter((user) => randomNumber !== user.id)

    })
  }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((users) =>(
            <li key = {users.id}>
              {users.name} - {users.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;