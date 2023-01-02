import React from 'react';
import './App.css';
import userManager from './utilities/identityOidc'
import { Provider } from 'react-redux';
import store from 'redux/store'
import AuthProvider from './utilities/authProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import SigninOidc from 'components/SigninOidc';
import SignoutOidc from 'components/SignoutOidc';

export default function App() {
  const oidcProps = {
    store: store,
    userManager: userManager
  }

  return (
    <Provider store={store}>
      <AuthProvider {...oidcProps}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin-oidc" element={<SigninOidc />} />
            <Route path="/signout-oidc" element={<SignoutOidc />} />
            <Route path='*' element={<Layout />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
