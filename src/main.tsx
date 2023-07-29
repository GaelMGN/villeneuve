import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import { Accueil } from './components/Accueil';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Produits } from './components/ProductPage/Products';

//  redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cart from './reducers/cart';
import { Cart } from './components/CartPage/Cart';

const store = configureStore({
  reducer: { cart },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Accueil />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/produits/:product' element={<Produits />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
