import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accueil } from './components/Accueil';
import { Header } from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Produits } from './components/Produits';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Header />
      <Routes>
        <Route index element={<Accueil />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/produits' element={<Produits />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
