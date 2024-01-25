import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title.js';

function App() {
  const n = 15;
  const [name] = useState("Matheus")

  const redTitle = false;
  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>

      {/* css de componente */}
      <MyComponent />
      <p>testando o vazamento de css</p>
      {/* inline CSS */}
      <p style={{color:"blue", padding:"25px",borderTop:"2px solid red"}}>estilizado de forma inline</p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}> CSS dinamico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}> CSS dinamico</h2>
      <h2 style={name === "Matheus" ? ({color: "black"}) : null}> CSS dinamico</h2>

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title" }>titulo tera classe dinamica</h2>

      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
