import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Image1 } from './components/Images';
import Header from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
    <Header/>
    <Cards/>
    </React.Fragment>
  )
}

export default App

const Cards =() => {
  return(
    <>
      <div class="card" style={{width: "20rem"}}>
  <img src={Image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  );
}