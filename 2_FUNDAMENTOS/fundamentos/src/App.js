//componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpessions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenger from './components/Challenger.jsx';

// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpessions />
      <Events />
      <Challenger />
    </div>
  ); 
}

export default App;
