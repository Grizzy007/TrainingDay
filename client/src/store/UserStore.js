import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._guardPath = null;
    this._user = {
      nickname: null,
      birthday: null,
      email: null,
      phoneNumber: null,
    };
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setGuardPath(pathname) {
    this._guardPath = pathname;
  }

  setUserData(user) {
    this._user = user;
  }

  get getIsAuth() {
    return this._isAuth;
  }

  get getUserData() {
    return this._user;
  }

  get getGuardPath() {
    return this._guardPath;
  }
}
