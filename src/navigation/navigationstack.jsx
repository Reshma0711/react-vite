import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/settings-screen";
import NavBar from "../components/navbar/navbar";
import InvalidScreen from "../screens/invalid-page";
import CategoryScreen from "../screens/category-screen";
import JewelleryScreen from "../screens/jewellery-screen";
import Productscreen from "../screens/products-screen";
import ProductDetails from "../screens/products-details";
import { createContext, useContext, useReducer, useState } from "react";
import { counterreducer, initialState } from "./counterHelper";

// Create context for user details
export const Userdetails = createContext();

export const GlobalCounter=createContext();

const NavigationStack = () => {

  const [isDark,setIsDark]=useState(true);
   
   const [currentstate,dispatch]=useReducer(counterreducer,initialState)

  const themeHandler=()=>{
      setIsDark(!isDark)
  }

  return (
    <GlobalCounter.Provider value={
    {  currentstate:currentstate,
      dispatch:dispatch
    }
    }>

       
    <Userdetails.Provider value={{
       username:"Reshma",
      theme:isDark,
      salary:"50000",
      themeHandler:themeHandler}}>
      <>
        {true ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/settings" element={<SettingScreen />} />
              <Route path="/*" element={<InvalidScreen />} />
              <Route path="/categories" element={<CategoryScreen />}>
                <Route path="jewellery" element={<JewelleryScreen />} />
              </Route>
              <Route path="/products" element={<Productscreen />} />
              <Route path="/products/:productid" element={<ProductDetails />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </>
    </Userdetails.Provider>
    </GlobalCounter.Provider>

  );
};

export default NavigationStack;
