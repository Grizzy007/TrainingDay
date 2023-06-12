import { selector } from 'recoil';
import sessionState from '../atoms/sessionAtom';

export const filterAuthErrorState = selector({
  key: 'filterAuthError',
  get: ({ get }) => {
    const session = get(sessionState);

    if (session.restorePwd) {
      return session.restorePwd;
    }

    if (session.errorLogin) {
      return session.errorLogin;
    }

    if (session.errorRegister) {
      return session.errorRegister;
    }

    return null;
  },
});

export default filterAuthErrorState;
