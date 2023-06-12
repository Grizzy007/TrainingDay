import { atom } from 'recoil';

const userProfileState = atom({
  key: 'userProfile', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default userProfileState;
