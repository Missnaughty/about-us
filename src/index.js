import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

// provider提供检测功能
root.render(<Provider store = {store}><App/></Provider>)

