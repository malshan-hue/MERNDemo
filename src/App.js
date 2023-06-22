import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,  Route} from 'react-router-dom';


import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/exercises-list.component";
import EditExcercise from "./components/edit-exercises.component";
import CreateExcercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<ExcerciseList/>} />
          <Route path="/edit/:id" element={<EditExcercise/>} />
          <Route path="/create" element={<CreateExcercise/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
