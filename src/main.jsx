import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigationStack from './navigation/navigationstack.jsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>

   

    <BrowserRouter>
    
      <NavigationStack />
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
