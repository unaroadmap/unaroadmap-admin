import { AUTH_LOGIN } from 'react-admin';
import decodeJwt from 'jwt-decode';
export const TOKEN_KEY = "@unaroadmap-Token";
export const PERMISSIONS = 'permissions';

const authProvider = {
    login: ({ email, password }) => {
        const request = new Request('https://unaroadmap-api.herokuapp.com/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),

        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(({ token }) => {
                const decodeToken = decodeJwt(token);
               
                if(decodeToken.permissions === 'Candidato'){
                    throw new Error('Acesso não Autorizado');
                    return Promise.reject();
                }

                localStorage.setItem(TOKEN_KEY, token);
                localStorage.setItem(PERMISSIONS, decodeToken.permissions);            
                
               // return Promise.reject();
            });
    },
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(PERMISSIONS);
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem(TOKEN_KEY);
            return Promise.reject();
        }
        return Promise.resolve();       
      },
  
      checkAuth: () => {
          return localStorage.getItem(TOKEN_KEY) 
              ? Promise.resolve()
              : Promise.reject();
      },
  
      getPermissions: () => {
        const role = localStorage.getItem(PERMISSIONS);
        return role ? Promise.resolve(role) : Promise.reject();
      }
};

export default authProvider;