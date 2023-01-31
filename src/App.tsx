import React from 'react';
import './App.css';
import userManager from './utilities/identityOidc'
import { Provider, useDispatch } from 'react-redux';
import store from 'redux/store'
import AuthProvider from './utilities/authProvider'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import SigninOidc from 'components/SigninOidc';
import SignoutOidc from 'components/SignoutOidc';
import TourMgt from 'pages/TourMgt';
import Header from 'components/Header';
import { Button, Layout, Menu, MenuProps } from "antd";
import Tours from 'pages/TourMgt/Tours';
import TourCreating from 'pages/TourMgt/Tours/TourCreating';
import TourEditing from 'pages/TourMgt/Tours/TourEditing';
import TourDetail from 'pages/TourMgt/Tours/TourDetail';
import TourBooking from 'pages/TourMgt/TourBooking';
import TourCategory from 'pages/PostMgt';
import TourLocation from 'pages/TourMgt/TourLocation';
import TourRegion from 'pages/TourMgt/TourRegion';
import Error from 'components/Error';
import { useSelector } from 'react-redux';
import { RootState, useAppSelector } from 'redux/reducers';
import { signinRedirect } from 'services/identity';
import { getTourDetail } from 'redux/actionCreators/tour';

const RequiredAuth = ({roles}: any) => {
  const user = useSelector((state : RootState) => state.auth.user)
  // const tour = useSelector((state : RootState) => state.tour.tour)
  //const tmp = useAppSelector(x => x.tour )
  // console.log(tour);
  const dispatch = useDispatch();
  //dispatch(getTourDetail('1'))
  // console.log(tour);

  if(!user){
    signinRedirect();
    return <></>
  }
    
  return (
    <>
      <Layout className='layout'>
        <Header user={user} />
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </>
  )
}

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
            <Route element={<RequiredAuth />}>
              <Route path='/' element={<TourMgt />}>
                <Route path='' element={<TourBooking />} />
              </Route>
              <Route path='/tours' element={<TourMgt />}>
                <Route index path='bookings' element={<TourBooking />} />
                <Route path='categories' element={<TourCategory />} />
                <Route path='regions' element={<TourRegion />} />
                <Route path='locations' element={<TourLocation />} />
                <Route path='' element={<Tours />} />
                <Route path='create' element={<TourCreating />} />
                <Route path=':id' element={<TourDetail />} />
                <Route path=':id/edit' element={<TourEditing />} />
              </Route>
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
