import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import useLoginStyles from './LoginStyle';


const LoginPage = ({ theme }) => {
    const classes = useLoginStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        login({ email, password })
            .catch(() => notify('Email ou senha invalido'));
    };

return (
    <ThemeProvider theme={theme}>
        <div className={classes.html}>
            <div className={classes.logoCircle + ' ' + classes.logoCircleUNA}></div>
            <div className={classes.circleCont}>
                <div id="divVoltarLogin" className={classes.loginCont}>
                    <span id="dev-login-wait">
                        <div className={classes.loading}></div>
                    </span>
                    <form onSubmit={submit} className={classes.devForm,classes.devFormLogin}>
                        <div className={classes.formAcessoMat}>
                            <h3>Uroadmap: Portal de Gestão<br></br> trilha do conhecimento</h3>    
                        </div>
                        <div className={classes.inputContainer}>
                            <div className={classes.inputMat} >
                            <input className={classes.ulInputText} name="email"   type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            <input className={classes.ulInputText} name="password" type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        
                        <input id="logar" type="submit" name="logar" className={classes.ulButton} value="Entrar"/>  
                    </form>
                    <p className="linkCont">Portal de Gestão para Empresa e Administradores.</p>
                    <Notification />
                </div>
                
            </div>
        </div>
    </ThemeProvider>
);

};

export default LoginPage;