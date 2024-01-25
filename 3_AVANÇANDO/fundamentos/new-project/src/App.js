import Terra from "./assets/terra.jpg"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";


import './App.css';
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "lamborgnih", color: "verde", newCar: false, km: 32423},
    {id: 3, brand: "ford", color: "preto", newCar: false, km: 2123}
  ]

  function showMassage(){
    console.log("mostrou mesagem");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>avançando com react</h1>
      {/* imagem do public */}
      <div> <img src="/negro.jpg" alt="espaço" /></div>
      {/* imagem em assets */}
      <div><img src={Terra} alt="" /></div>
      <ManageData />^
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="joão"/>
      {/* destructuring */}
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand={"ford"} color={"vermelho"} km={0} newCar={true}/>
      <CarDetails brand={"macerati"} color={"branco"} km={2342} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km}
          newCar={car.newCar}/>
      ))}
      {/* fragments */}
      <Fragments propFragment="teste"/>

      {/* childreen */}
      <Container myValue={12}>
        <p>mostrou pra nos</p>
      </Container>
      <Container myValue="testando">
        <h3>testando Container</h3>
      </Container>

      {/* executar funçao */}
      <ExecuteFunction myFunction={showMassage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>

  );
}

export default App;
