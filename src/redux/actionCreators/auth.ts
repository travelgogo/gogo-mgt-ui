import {
    STORE_USER,
    USER_SIGNED_OUT,
    USER_EXPIRED,
    STORE_USER_ERROR,
    LOADING_USER
  } from './types'
//   import { setAuthHeader } from '../../utilities/axiosHeaders'
  
//   export function storeUser(user: any) {
//     setAuthHeader(user.access_token)
//     return {
//       type: STORE_USER,
//       payload: user
//     }
//   }
  
//   export function loadingUser() {
//     return {
//       type: LOADING_USER
//     }
//   }
  
//   export function storeUserError() {
//     return {
//       type: STORE_USER_ERROR
//     }
//   }
  
//   export function userExpired() {
//     return {
//       type: USER_EXPIRED
//     }
//   }
  
//   export function userSignedOut() {
//     return {
//       type: USER_SIGNED_OUT
//     }
//   }
import { createAction } from "@reduxjs/toolkit";
import IUser from 'types/userIdentity';

const storeUser = createAction<any>(STORE_USER)
const storeUserError = createAction(STORE_USER_ERROR)

export {storeUser, storeUserError}