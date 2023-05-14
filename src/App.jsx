import React from "react";
import Home from "./components/homepage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.scss';
import {useState} from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Home />
  );
}

export default App;