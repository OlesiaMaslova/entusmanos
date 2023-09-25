import React from 'react';
import { Route, useHistory} from 'react-router-dom';
import './App.css';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    
      
    </div>
  );
}

export default App;
