import { makeAutoObservable } from "mobx";

export default class ProgramStore {
  constructor() {
    this._program = [
      {
        id: 1,
        name: "Legs progress",
        duration: 1,
        group: "Hands",
        definition: "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
        link: "https://www.youtube.com/watch?v=q7rCeOa_m58&pp=ygUPY3JpcyBoZXJpYSBsZWdz ",
        status: {
          id: 25,
          name: "ACCEPTED",
        },
        trainer: "Cris Heria",
      },
      {
        id: 2,
        name: "Quick And Effective Home Back Workout",
        duration: 2,
        group: "Chest",
        definition: "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
        link: "https://www.youtube.com/watch?v=ClzTDsQDC0E ",
        status: {
          id: 26,
          name: "ACCEPTED",
        },
        trainer: null,
      },
      {
        id: 3,
        name: "Quick And Effective Home Back Workout",
        duration: 2,
        group: "Back",
        definition: "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
        link: "https://www.youtube.com/watch?v=ClzTDsQDC0E ",
        status: {
          id: 26,
          name: "ACCEPTED",
        },
        trainer: null,
      },
      {
        id: 4,
        name: "Quick And Effective Home Back Workout",
        duration: 2,
        group: "Legs",
        definition: "Lörem ipsum spelaskade bererade intragt. Tis sosäktig terande. Degången tev.",
        link: "https://www.youtube.com/watch?v=ClzTDsQDC0E ",
        status: {
          id: 26,
          name: "ACCEPTED",
        },
        trainer: null,
      },
    ];
    makeAutoObservable(this);
  }

  set setCatalogData(program) {
    this._program = program;
  }

  get getCatalogData() {
    return this._program;
  }
}
