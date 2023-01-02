export default interface IUser {
    access_token?: string;
    expires_at?: number;
    id_token?: string;
    scope?: string;
    session_state?: string;
    token_type?: string;
    profile?: {
      amr: string[];
      auth_time: number;
      idp: string;
      name: string;
      rememberLogin: string;
      sid: string;
      sub: string;
      username: string;
      uid: string;
      operatorId: string;
      email: string;
      isSocialLogin: string;
    };
    expired?: boolean;
  }[];
  
  export interface IUserCallback {
      access_token?: string;
      expires_at?: number;
      id_token?: string;
      profile?: {
        amr?: string[];
        auth_time?: number;
        idp?: string;
        name?: string;
        sid?: string;
        sub?: string;
        username?: string;
      };
      refresh_token?: string;
      scope?: string;
      session_state?: string;
      state: { path: string; search: string };
      token_type?: string;
      scopes?: string[];
      expired?: boolean;
      expires_in?: number;
    }
    [];
  