import { useApi } from "../hooks/useApi";

import { useRecoilState, useSetRecoilState } from "recoil";
import sessionState from "../newStore/atoms/sessionAtom";
import userProfileState from '../newStore/atoms/userProfileAtom';

const useUserProfileMutations = () => {
  const [fetch] = useApi();

  const setUserProfile = useSetRecoilState(userProfileState);
  const [session, setSession] = useRecoilState(sessionState);

  const processUserProfile = (profile) => {
    console.log(profile);
    setUserProfile(profile);
    setSession({
      ...session,
      jwt: profile.token,
      hasError: null,
      authFormType: null,
    });
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch.register(userData);
      console.log(response);
      // processUserProfile(response.data);
    } catch (error) {
      console.log(error.response.data.error);
      setSession({
        ...session,
        hasError: true,
        errorRegister: error.response.data.error,
      });
    }
  };

    const loginUser = async (userData) => {
    try {
      const response = await fetch.login(userData);
      processUserProfile(response.data);
    } catch (error) {
      setSession({
        ...session,
        hasError: true,
        errorLogin: error.response.data.error,
      });
    }
  };

  const updateUserProfile = async (profileData) => {
    const response = await fetch.updateUser(profileData);
    console.log(response);
    if (response?.data) {
      setUserProfile(response.data);
    }
  };

  return {
    registerUser,
    loginUser,
    updateUserProfile,
  };
};

export default useUserProfileMutations;
