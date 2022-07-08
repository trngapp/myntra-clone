//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/header.js"
import {Routes,Route} from "react-router-dom"
import Home from "./components/home"
import List from "./components/List/list"
import Product from "./components/Product/product"
import {FilterProvider} from "./context/filter"
import {TickProvider} from "./context/filter"
import {IdProvider} from "./context/Navigate"
import {ItemProvider} from "./context/Item"
function App() {
  return (
    <>
    <div>
  <FilterProvider>
    <TickProvider>
    <IdProvider>
      <ItemProvider>
      <Header/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/list" element={<List/>}/>
       <Route exact path="/product" element={<Product/>}/>
     </Routes>
     </ItemProvider>
     </IdProvider>

     </TickProvider>
     </FilterProvider>

    </div>
    </>
  );
};

export default App;
