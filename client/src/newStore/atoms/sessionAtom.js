import { atom } from 'recoil';

const sessionState = atom({
  key: 'session',
  default: {
    jwt: '',
    authFormType: null,
    errorLogin: null,
    errorRegister: null,
    restorePwd: null,
    hasError: null,
  },
});

export default sessionState;
