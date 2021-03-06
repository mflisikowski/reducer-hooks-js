import React from "react";
import ReactDOM from "react-dom";
import { toast } from 'react-toastify';
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { GlobalStateProvider } from "./store";
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: "top-right",
  autoClose: 3000,
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
