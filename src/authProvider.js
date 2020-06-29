export const TOKEN_KEY = "@unaroadmap-Token";

export default {
 
    login: ({ token }) => {

        
       localStorage.setItem(TOKEN_KEY, token);

       return Promise.resolve();
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