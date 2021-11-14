import logo from './logo.svg';
import './App.css';
import {Add,Subt,Mult,Div} from "./components/calculation";

function App() {
  return (
    <div className="App">
      <ul>
        <li>Addition of two numbers:{Add(40,80)}</li>
        <li>Subtraction of two numbers:{Subt(150,40)} </li>
        <li>Multiplication of two numbers:{Mult(19,19)}</li>
        <li>Division of two numbers:{Div(20,3)}</li>
      </ul>
    </div>
  );
}

export default App;
