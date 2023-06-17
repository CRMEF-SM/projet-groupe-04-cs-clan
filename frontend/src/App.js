import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'; 
import HeaderApprenant from './Components/HeaderApprenant';
import NomApprenant from './Components/NomApprenant';

function App() {
  return (
    <div className="App">
      <HeaderApprenant/>
      <NomApprenant/>
    </div>
  );
}

export default App;
