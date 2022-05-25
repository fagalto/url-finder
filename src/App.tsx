import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainView from "./Components/Views/MainView";
import ViewProvider from "./Components/Views/Providers";


/*
Main View for App. Views are almost only statefull components, rest is presentational
New views can be aesily created basing on existing views
*/
function App() {
  return ViewProvider(<MainView />);
}

export default App;
