import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainView from "./Components/Views/MainView";
import ViewProvider from "./Components/Views/Providers";

function App() {
  return ViewProvider(<MainView />);
}

export default App;
