import './App.css';
import Home from "./Components/Home"
import CarDetails from "./Components/CarDetails"
import {Routes,Route} from "react-router-dom"
import User from './Components/User';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element = {<Home />} />
        <Route path="/cardetails/:carname"  element = {<CarDetails />} />
        <Route path="/cardetails/:carname"  element = {<CarDetails />} />
        <Route path="/cardetails/:carname"  element = {<CarDetails />} />
        <Route path="/cardetails/:carname"  element = {<CarDetails />} />
        <Route path="/useraccount"  element = {<User />} />
      </Routes>
    </div>
  );
}

export default App;
