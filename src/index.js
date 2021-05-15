import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware } from "redux"
import rootReducer from './store/reducers/rootReducer';
import {Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createLogger }  from "redux-logger"



//se añade al store un middleware que va a ser quien se comunique de manera asincrona con la BBDD en nuestro caso
//permite incluir un parametro más en las Actions 
const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware)


);
//en el metodo de arriba se indica a redux la bbdd a la que debe conectarse para realizar las consultas


ReactDOM.render(

  <Provider store={store}> 
   
      <App />
    
        
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
