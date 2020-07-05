import { makeStyles } from '@material-ui/core/styles';

const useLoginStyles = makeStyles({

    form: {
        display: 'contents',
    },
    html: {
        background: '-webkit-linear-gradient(-25deg, #dbe830 0%, #06cef0 40%, #28a1fd 70%) #06cef0',
        background: '-moz-linear-gradient(-25deg, #dbe830 0%, #06cef0 40%, #28a1fd 70%) #06cef0',
        background: 'linear-gradient(115deg, #dbe830 0%, #06cef0 40%, #28a1fd 70%) #06cef0',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        fontSize: '11px'
    },
    logoCircle: {
        height: '100%',
        width: '48%',
        float: 'left',
        background: 'url(logoCircle.svg) center no-repeat',
        backgroundSize: 'auto 135vh'
    },
    logoCircleUNA: {
        backgroundImage: 'url(logoCircle.svg)'
    },
    circleCont: {
        height: '100vh',
        top: '0',
        right: '-50px',
        width: '55%',
        minWidth: '650px',
        position: 'absolute',
        float: 'right',
        background: 'url(whiteCircle.svg) left no-repeat',
        backgroundSize: '200%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleContMobile: {

    },
    loginCont: {
        width: '270px',
        color: '#959595',
        fontSize: '1em',
        maxHeight: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
       
    },
    formAcessoMat: {
        fontSize: '1.8em',
        paddingLeft: '3px',
        fontWeight: 'normal',
        marginBottom: '1em',
        color: '#777',
        textAlign: 'left'
    },
    inputContainer: {
        position: 'relative',
         
    },
    ulInputText: {
      display: 'block',
      width: '100%',
      borderRadius: '10px',
      height: '3em',
      fontSize: '1.1rem',
      outline: '0',
      borderStyle: 'solid',
      padding: '0 10px',
      margin: '5px 0',
      transition: 'all .2s ease-out 0s',
      borderWidth: '1px',
      borderColor: '#D9D9D9',
      background: 'white'
    },
    ulButton: {
        display: 'block',
        width: '100%',
        borderRadius: '10px',
        height: '3em',
        outLine: '0',
        borderStyle: 'solid',
        padding: '0 10px',
        margin: '5px 0',
        transition: 'all .2s ease-out 0s',
        border: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'#1f80e1',
        cursor: 'pointer',
        fontSize: '14px!important'

    }

    
});

export default useLoginStyles;