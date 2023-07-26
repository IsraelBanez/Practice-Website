import logo from './logo.svg';
import {NavBarHeader2, NewItemsCollection} from "./ui-components"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarHeader2 width= "100%"/>
      <header className="App-header">
        <h1>Web App</h1>
        <NewItemsCollection />
      </header>
    </div>
  );
}

export default App;
