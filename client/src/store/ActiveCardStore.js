import { makeAutoObservable } from "mobx";

export default class ActiveCardStore {
  constructor() {
    this._activeCard = {
      id: 1,
      name: "Legs progress",
      duration: 1,
      group: "Hands",
      description:
        "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
      definition:
        "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
      link: "https://www.youtube.com/watch?v=q7rCeOa_m58&pp=ygUPY3JpcyBoZXJpYSBsZWdz ",
      status: {
        id: 25,
        name: "ACCEPTED",
      },
      trainer: "Cris Heria",
    };
    makeAutoObservable(this);
  }

  setActiveCarData(activeCard) {
    this._activeCard = activeCard;
  }

  get getActiveCardData() {
    return this._activeCard;
  }
}
