import React from 'react';
import Quiz from './Components/Quiz';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Result from './Components/Result';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result"  element={<Result/>} />

      </Routes>
    </>
  )
}

export default App
