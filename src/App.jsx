/* eslint-disable react-refresh/only-export-components */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Products from './Component/Products'
import Contact from './Component/Contact'
import About from './Component/About'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'
import axios from 'axios'
import OrderDetails from './Component/OrderDetails'
import MyOrders from './Component/MyOrders'
import { createContext, useReducer, useEffect, useState } from 'react'


export let DataContext = createContext(null)
function App() {
    let [axiosData, setAxiosData] = useState([])
    let [count, setCount] = useState(0)
  
   useEffect(() => {
      
        axios.get("https://dummyjson.com/products")
        .then((response) => {
          setAxiosData(response.data.products)
        }).catch((err) => {
            console.error(err)
        });
    },[])
  function reducer(state, action){
    switch (action.type) {
      case "ADD_CART":
          { let result = axiosData.filter((value) => value.id === action.payload)
          return [...state, ...result] }
      case "REMOVE_CART":{
          let result = state.filter((value) => value.id !==action.payload)
          return ([...result])
      }
      default:
        break;
    }
  }

  let initialData = []
    
  let [selectProduct, setSelectProduct] = useReducer(reducer, initialData)

  function anotherReducer(state, action){
      switch (action.type) {
        case "USER_DETAILS":
          return{
            ...state,
             user :{
              ...state.user,
              ...action.payload.user
            } 
          }
      
        default:
          break;
      }
  }

  let initialValue = {
    user : {
        name:"",
         email:"",
         address:"",
          contact:""
    }
  }
  let [orderData, setOrderData] = useReducer(anotherReducer, initialValue)
  return (
    <>
    <DataContext.Provider value={{axiosData, setAxiosData, selectProduct, setSelectProduct, orderData, setOrderData, count, setCount}}>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/myorders' element={<MyOrders/>}></Route>
            <Route path='/orderdetails' element={<OrderDetails/>}></Route>
          </Routes>
        </BrowserRouter>
    </DataContext.Provider>
    </>
  )
}

export default App

