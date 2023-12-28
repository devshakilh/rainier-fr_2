import React from "react";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./pages/Layout";
// import ownImage from "./assets/own.png";
import "react-whatsapp-chat-widget/index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./pages/Footer";



function App() {
    return (
        <>
            
            <div className="App pb-10">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Navigation />
                <div className=" container mx-auto">
                    <Layout />
                </div>
                <Footer/>
                <ScrollToTop
                    smooth
                    style={{
                        boxShadow: "0px 5px 10px 0px rgba(0, 255, 255, 0.7 ",
                        borderRadius: "50%",

                        right: 30,
                        bottom: 100,
                        // border:"1px solid #00C0FF"
                    }}
                    color="#00C0FF"
                    viewBox="0 0 160 256"
                />
               
            </div>
        </>
    );
}

export default App;
