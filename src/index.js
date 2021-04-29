import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose } from "redux"
import rootReducer from './store/reducers/rootReducer';
import {Provider } from "react-redux"
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore"
import { ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase"
import firebaseConfig from "./config/firebaseConfig"
import firebase from "firebase/app"


//se añade al store un middleware que va a ser quien se comunique de manera asincrona con la BBDD en nuestro caso
//permite incluir un parametro más en las Actions 
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),


);
//en el metodo de arriba se indica a redux la bbdd a la que debe conectarse para realizar las consultas
const rrfProps= {
  firebase,
  config: {firebaseConfig},
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(

  <Provider store={store}> 
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
        
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
