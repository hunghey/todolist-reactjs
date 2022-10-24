import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidebar from './componets/Slidebar';
import Introduce from './pages/Introduce.jsx';
import ToDo from './pages/ToDo.jsx';

const App = () => {
  return (
      <BrowserRouter>
        <Slidebar>
          <Routes>
            <Route path="/" element={<Introduce />} />
            <Route path="/toDo" element={<ToDo />} />
          </Routes>
        </Slidebar>
      </BrowserRouter>
  );
};

export default App;