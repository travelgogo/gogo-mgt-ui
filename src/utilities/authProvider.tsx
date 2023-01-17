import { UserManager } from 'oidc-client';
import React, { ReactElement, useEffect, useRef } from 'react';
import { storeUser } from 'redux/actionCreators/authAction'
import { setAuthHeader } from './axiosHeaders';

interface AuthProviderProps{
  userManager: UserManager,
  store: any,
  children: ReactElement
}

const AuthProvider = ({ userManager, store, children }: AuthProviderProps) => {

  useEffect(() => {
    const onUserLoaded = (user: any) => {
      store.dispatch(storeUser(user))
    }

    const onUserUnloaded = () => {
      setAuthHeader(null)
      console.log(`user unloaded`)
    }

    const onAccessTokenExpiring = () => {
      console.log(`user token expiring`)
    }

    const onAccessTokenExpired = () => {
      console.log(`user token expired`)
    }

    const onUserSignedOut = () => {
      console.log(`user signed out`)
    }

    // events for user
    userManager.events.addUserLoaded(onUserLoaded)
    userManager.events.addUserUnloaded(onUserUnloaded)
    userManager.events.addAccessTokenExpiring(onAccessTokenExpiring)
    userManager.events.addAccessTokenExpired(onAccessTokenExpired)
    userManager.events.addUserSignedOut(onUserSignedOut)

    // Specify how to clean up after this effect:
    return function cleanup() {
      userManager.events.removeUserLoaded(onUserLoaded);
      userManager.events.removeUserUnloaded(onUserUnloaded);
      userManager.events.removeAccessTokenExpiring(onAccessTokenExpiring)
      userManager.events.removeAccessTokenExpired(onAccessTokenExpired)
      userManager.events.removeUserSignedOut(onUserSignedOut)
    };
  }, [userManager, store]);

  return (
    React.Children.only(children)
  )
}

export default AuthProvider