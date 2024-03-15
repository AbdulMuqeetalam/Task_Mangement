import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import List from './List';
import Addtask from './Components/Addtask';
import Edit from './Components/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<List />} ></Route>
        <Route path='/task' element ={<Addtask />} ></Route>
        <Route path='/edit/:id' element ={<Edit />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
