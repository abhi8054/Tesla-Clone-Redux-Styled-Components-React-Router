import './App.css';
import Home from "./Components/Home"
import CarDetails from "./Components/CarDetails"
import {Routes,Route} from "react-router-dom"
import User from './Components/User';
import ErrorPage from './Components/ErrorPage';
import NotBuildYet from './Components/NotBuildYet';


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
        <Route path="/notbuild"  element = {<NotBuildYet />} />
        <Route path="*"  element = {<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
