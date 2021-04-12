import React from 'react';
import ReactDOM from 'react-dom';



import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import PacienteList from './components/Pacientes/PacienteList';
import PacienteForm from './components/Pacientes/PacienteForm';
import InicioApp from './components/Inicio/InicioApp';
import Navbar from './components/Navbar/Navbar';

import './index.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConsultaForm from './components/Consultas/ConsultaForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    
    <div className="container p-4">
      <Switch>
        <Route exact path="/" component ={InicioApp}/>
        <Route path="/listPac" component ={PacienteList}/>
        <Route path="/newPac" component ={PacienteForm}/>
        <Route path="/updatePac/:id" component ={PacienteForm}/>
        <Route path="/newConsulta" component ={ConsultaForm}/>
      </Switch>
      <ToastContainer/>
    </div>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
