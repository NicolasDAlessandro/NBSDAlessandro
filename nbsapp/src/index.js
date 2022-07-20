import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootswatch/dist/vapor/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDG_qjyCU_EVhcFTSLulIWg1zwpQWrhpmc",
  authDomain: "nbsstyle-e6d30.firebaseapp.com",
  projectId: "nbsstyle-e6d30",
  storageBucket: "nbsstyle-e6d30.appspot.com",
  messagingSenderId: "881993146257",
  appId: "1:881993146257:web:b3944db214139811920430",
  measurementId: "G-5QJPF41PR7"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
