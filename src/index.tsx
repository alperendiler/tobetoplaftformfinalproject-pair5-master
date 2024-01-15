"use client"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import { LayoutProvider } from "./layout/context/layoutcontext";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "./styles/layout/layout.scss";
import "./styles/demo/Demos.scss";

interface root {
  children: React.ReactNode;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <html lang="en" suppressHydrationWarning>
  <head>
      <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
  </head>
  <body>
      <PrimeReactProvider>
          <LayoutProvider><App/></LayoutProvider>
      </PrimeReactProvider>
  </body>
</html>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
