import { combineReducers } from 'redux';
import IUser from 'types/userIdentity';
import authReducer from './authReducer';

export interface RootState {
    auth: {
        user: IUser;
        isLoadingUser: boolean;
    };
}

export default combineReducers({
  auth: authReducer
})
