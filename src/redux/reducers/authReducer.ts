// import {
//     USER_SIGNED_OUT,
//     STORE_USER_ERROR,
//     USER_EXPIRED,
//     STORE_USER,
//     LOADING_USER
//   } from '../actionCreators/types'
  
//   const initialState = {
//     user: null,
//     isLoadingUser: false
//   };
  
//   export default function (state = initialState, action: any) {
//     switch (action.type) {
//       case STORE_USER:
//         return {
//           ...state,
//           isLoadingUser: false,
//           user: action.payload
//         }
//       case LOADING_USER:
//         return {
//           ...state,
//           isLoadingUser: true
//         }
//       case USER_EXPIRED:
//       case STORE_USER_ERROR:
//       case USER_SIGNED_OUT:
//         return {
//           ...state,
//           user: null,
//           isLoadingUser: false
//         }
//       default:
//         return state
//     }
//   }
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { storeUser, storeUserError } from "redux/actionCreators/authAction";
import IUser from "types/userIdentity";

const initialState = {
  user: null,
  isLoadingUser: false
};

const authReducer = createReducer(initialState,
  (builder) => {
      builder
        .addCase(storeUser, (state, action) => {
          return {
            ...state,
            isLoadingUser: false,
            user: action.payload
          }
        })
        .addCase(storeUserError, (state) => {})
  })

  

  export default authReducer;