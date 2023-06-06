import React from "react";
import ScrollToTop from "react-scroll-to-top";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./pages/Layout";
// import ownImage from "./assets/own.png";
import "react-whatsapp-chat-widget/index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
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
            <ScrollToTop
                smooth
                style={{
                    backgroundColor: "#1E1649",
                    borderRadius: "50%",
                    boxShadow: "none",
                    right: 30,
                    bottom: 100,
                    // border:"1px solid #00C0FF"
                }}
                color="#00C0FF"
                viewBox="0 0 160 256"
            />
            <WhatsAppWidget
                headerIcon="https://i.ibb.co/rMcPPyz/boy-1.png"
                companyName="Md Shakil Hossain"
                chatMessage="Hello! 👋🏼 welcome. How can I assist you?"
                phoneNo="+8801728178063"
                autoOpenTimer={0}
                iconColor="#00C0FF"
                chatPersonName="Md Shakil Hossain"
                position="right"
                style={{ border: "none" }}
            />
        </div>
    );
}

export default App;
