import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import store from 'redux/store';
import IUser from 'types/userIdentity';
import authReducer from './auth';

// export interface RootState {
//     auth: {
//         user: IUser;
//         isLoadingUser: boolean;
//     },
//     tour: any;
// }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export default combineReducers({
//   auth: authReducer
// })
