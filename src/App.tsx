import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import { Metadata } from 'next';
import Layout from './layout/layout';


export const metadata: Metadata = {
  title: 'PrimeReact Sakai',
  description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: 'device-width' },
  openGraph: {
      type: 'website',
      title: 'PrimeReact SAKAI-REACT',
      url: 'https://sakai.primereact.org/',
      description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
      images: ['https://www.primefaces.org/static/social/sakai-react.png'],
      ttl: 604800
  },
  icons: {
      icon: '/favicon.ico'
  }
};

function App() {
  return (
    <>
    <Layout>
    <Login/>

    </Layout>
 
  
  </>
  );
}

export default App;
