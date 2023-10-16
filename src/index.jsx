import React from "react";
import ReactDOM from "react-dom";
import MainPage from "../src/components/Pages/Mainpage";
import "./style.css";
import AlertManager from "./components/Organisms/AlertManager";
import { AlertHandlerProvider } from "../src/contexts/alert_handler";
ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
