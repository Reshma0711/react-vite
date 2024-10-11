import {Routes,Route } from "react-router-dom"
import HomeScreen from "../screens/homescreen"
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/settings-screen";
import NavBar from "../components/navbar/navbar";
import InvalidScreen from "../screens/invalid-page";
import CategoryScreen from "../screens/category-screen";
import JewelleryScreen from "../screens/jewellery-screen";







const NavigationStack=()=>{
    return (
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
                <Route path="jewellery" element={<JewelleryScreen/>} />
              </Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </>
    );
}


export default NavigationStack