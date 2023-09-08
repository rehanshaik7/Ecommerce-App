import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Components/Orders';
import OrderComplete from './Components/OrderComplete';


const promise = loadStripe("pk_test_51NfhcbSGm8aRkjc9VZ45NPBpwSTrEv7juPI2U9Ox4fTgOINJrzkLAY1HidXm94l2UTM8QotuWGgJ2iuDHT0oLSaN00rftTp7pk");


function App() {
 const [{},dispatch]=useStateValue();

   useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
    console.log('THE USER IS ',authUser);

    if(authUser){
          //login
          dispatch({
            type:'SET_USER',
            user:authUser
          })
    }else{
            //log out
            dispatch({
              type:'SET_USER',
              user:null
            })
    }
  })


   },[])

  return (
    <Router>
      <div className="app">
      
        <Routes>
        <Route path='/orders' element={[<Header/>,<Orders/>]}/>
          <Route path='/login' element={[<Login/>]}/>
          <Route path="/checkout" element={[ <Header />,<Checkout/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe={promise}> <Payment/></Elements>]}/>
          <Route path="/ordercomplete" element={[ <Header/>,<OrderComplete />]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
