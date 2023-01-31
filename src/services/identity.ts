
import { storeUserError, storeUser } from '../redux/actionCreators/auth'
import userManager from "utilities/identityOidc";

// export async function loadUserFromStorage(store: any) {
//   try {
//     let user = await userManager.getUser()
//     if (!user) { return store.dispatch(storeUserError()) }
//     store.dispatch(storeUser(user))
//   } catch (e) {
//     console.error(`User not found: ${e}`)
//     store.dispatch(storeUserError())
//   }
// }

export function signinRedirect() {
  return userManager.signinRedirect()
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirect()
}

export function signoutRedirectCallback() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirectCallback()
}

export default userManager