import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'animate.css' // animation package
import 'swiper/css'  // swiper package

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// icons
import "font-awesome/css/font-awesome.min.css"; 

// imports of router and pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home.jsx';
import Shop from './pages/shop/shop.jsx';
import AboutUs from './pages/about/aboutUs.jsx';
import ContactUs from './pages/contact/contactUs.jsx';
import SingleProduct from './pages/shop/singleProduct.jsx';
import Cart from './pages/shop/cart.jsx';

// creation of ruoter with routes
const router = createBrowserRouter([
  { path: "/doghouse/", element: <App/>,
    children: [
    { path: "/doghouse/", element: <Home /> },
    { path: "/doghouse/shop", element: <Shop /> },
    { path: "/doghouse/shop/:id", element: <SingleProduct/>},
    { path: "/doghouse/cart", element: <Cart />},
    { path: "/doghouse/about", element: <AboutUs />},
    { path: "/doghouse/contact", element: <ContactUs />}
    ] 
  },
]);

// applies router to the roo element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
