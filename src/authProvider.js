import { AUTH_LOGIN } from 'react-admin';
export const TOKEN_KEY = "@unaroadmap-Token";

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('https://unaroadmap-api.herokuapp.com/users/login', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
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
                localStorage.setItem(TOKEN_KEY, token);
                return Promise.resolve();
            });
    },
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
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
  
      getPermissions: () => Promise.resolve(),
};

export default authProvider;