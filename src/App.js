import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExcercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="MERNDemo/" element={<ExcerciseList/>} />
          <Route path="MERNDemo/edit/:id" element={<EditExercises/>} />
          <Route path="MERNDemo/create" element={<CreateExcercise/>} />
          <Route path="MERNDemo/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
