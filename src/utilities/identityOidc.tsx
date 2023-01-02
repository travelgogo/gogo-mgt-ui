import { UserManagerSettings} from 'oidc-client'
import { createUserManager } from 'redux-oidc';

const userMangerConfig : UserManagerSettings = {
    authority: 'https://localhost:5001',
    client_id: 'H324T436-8D21-459V-HJ23-F2F55103DD71',
    redirect_uri: 'http://localhost:3000/signin-oidc',
    response_type: 'code',
    scope: 'openid profile product-data',
    post_logout_redirect_uri: "http://localhost:3000/signout-oidc"
}

const userManager = createUserManager(userMangerConfig);
export default userManager;