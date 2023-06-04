import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {
      userName: "",
      birth: "",
      email: "",
      phone: "",
    };
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get userData() {
    return this._user;
  }
}
