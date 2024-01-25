import './App.css';
import Car from './components/Car'
function App() {
  const cars = [
    {id:1,cor: "amarela",placa: "000-abc",km: 123},
    {id:2,cor: "preto",placa: "123-def",km:321},
    {id:3,cor: "prata",placa: "321-caf",km: 312},
  ]
  return (
    <div className="App">
      <h1 className='title_cars'>Exercicio de css</h1>
      {cars.map((cars)=>(
        <Car
        key={cars.id}
        cor={cars.cor}
        placa={cars.placa}
        km={cars.km}/>
      ))}
      
    </div>
  );
}

export default App;
