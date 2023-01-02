import React, { useEffect, useRef, useState } from 'react';
import './Layout.scss';
import { Button, MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Main from '../components/Main';
import { useSelector } from 'react-redux';
import userManager from '../utilities/identityOidc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigninOidc from '../components/SigninOidc';
import Error from 'components/Error';
import { loadUserFromStorage, signinRedirect, signoutRedirect } from 'services/identityService';
import store from 'redux/store';
import TourMgt from './TourMgt';
import LayoutInner from './LayoutInner';
import SignoutOidc from 'components/SignoutOidc';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['Quản lý tour', 'Quản lý bài viết', 'Quản lý phản hồi', 'Doanh thu'].map((key) => ({
  key,
  label: `${key}`,
  link: "/posts"
}));

const items: MenuProps['items'] = [
  { name: 'Quản lý tour', link: '/tours' },
  { name: 'Quản lý bài viết', link: '/post' },
  { name: 'Quản lý phản hồi', link: '/feedback' },
  { name: 'Doanh thu', link: '/revenue' }
].map((value, index) => ({
  key: index + 2,
  label: (
    <a href={value.link} rel="noopener noreferrer">
      {value.name}
    </a>
  )
}));

const AppLayout = () => {
  const [user, setUser] = useState<any>(null);
  const res = userManager.getUser().then(user => {
    if(user == null){
      signinRedirect()
    }
    //signoutRedirect();
    setUser(user);
  })
  useEffect(() =>{
    loadUserFromStorage(store);
  },[])
  
  return (
    <>
      <Routes>
          <Route path="/error" element={<Error />} />
          <Route path='/' element={user && <AuthenFlow />} />
          <Route path='/tours' element={user && <AuthenFlow />} />
          <Route path='/posts' element={user && <AuthenFlow />} />
          <Route path='*' element={user && <Error />} />
        </Routes>
    </>
  );
};

const AuthenFlow = () => {
  const user = useSelector((state: any) => state.auth.user)

  if (user && !user.expired) {
    return <LayoutInner />;
  }
  return (<div>Redirecting....</div>)
}

export default AppLayout;