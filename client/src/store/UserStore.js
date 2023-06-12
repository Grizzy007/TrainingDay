import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
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

  get getUserData() {
    return this._user;
  }
}
