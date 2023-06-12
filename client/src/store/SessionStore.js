import { makeAutoObservable } from "mobx";

export default class SessionStore {
  constructor() {
    this._session = {
      jwt: '',
      authFormType: null,
      errorLogin: null,
      errorRegister: null,
      restorePwd: null,
      hasError: null,
    };
    makeAutoObservable(this);
  }

  setSession(newSession) {
    this._session = newSession;
  }

  get sessionData() {
    return this._session;
  }
}
