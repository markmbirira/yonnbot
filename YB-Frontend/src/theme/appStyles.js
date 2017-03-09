// These are only examples, this can be updated...

import colors  from './colors.js';
// import metrics from './metrics.js';
import fonts from './fonts.js';

const appStyles = {

  errorText: {
    color: colors.error,
  },

  // ------------------------- INPUT TEXT -------------------------- //
 
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    color: colors.blueLight,
    fontSize: '14px',
    lineHeight: 1,
    fontFamily: 'Lato'
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.blue,
    height: '32px',
    lineHeight: '32px',
    fontFamily: 'Lato',
    fontSize: '20px',
    color: 'rgba(146,146,146,0.87)',
    display: 'block',
    background: 'transparent',
    marginBottom: '20px',
  },

  // ------------------------- TEXTAREA -------------------------- //

  textareaLabel: {
    display: 'flex',
    flexDirection: 'column',
    color: colors.blueLight,
    color: colors.blueLight,
    fontSize: '14px',
    lineHeight: 1,
    fontFamily: 'Lato'
  },
  textareaInput: {
    minHeight: '150px',
    border: '1px solid rgba(0,0,0,0.2)',
    background: 'rgba(255,255,255,.5)',
    marginTop: '20px',
    marginBottom: '20px',
    borderBottom: '2px solid '+colors.blue,
  },
  
  // ------------------------- BUTTONS -------------------------- //

  greenButton: {
    height: '55px',
    display: 'inline-block',
    backgroundColor: colors.green,
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.24)',
    borderRadius: '100px',
    fontFamily: 'Lato',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '55px',
    color: 'rgba(255,255,255,0.87)',
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
  },
  facebookButton: {
    height: '55px',
    display: 'inline-block',
    backgroundColor: colors.blueFacebook,
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.24)',
    borderRadius: '100px',
    fontFamily: 'Lato',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '55px',
    color: 'rgba(255,255,255,0.87)',
    borderWidth: 0, 
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    backgroundImage: 'url(/assets/images/facebook.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 23px center',
    padding: '1px 10px 1px 26px',
  },
  googleButton: {
    height: '55px',
    display: 'inline-block',
    backgroundColor: colors.redGoogle,
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.24)',
    borderRadius: '100px',
    fontFamily: 'Lato',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '55px',
    color: 'rgba(255,255,255,0.87)',
    borderWidth: 0, 
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    backgroundImage: 'url(/assets/images/google.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 23px center',
    padding: '1px 10px 1px 30px',
  },

}

export default appStyles;
