import { create } from "zustand";

interface ISignUpStore {
    userId: string;
    userName: string;
    password: string;
    passwordCheck: string;
    userEmail: string;
    createdAt: string;
    telNumber: string;
    setUserId: (str: string) => void;
    setUserName: (str: string) => void;
    setPassword: (str: string) => void;
    setPasswordCheck: (str: string) => void;
    setUserEmail: (str: string) => void;
    setCreateAt: (str: string) => void;
    setTelNumber: (str: string) => void;

    isAdmin: boolean;
    setIsAdmin: (isAdmin: boolean) => void;
}

const useStore = create<ISignUpStore>((set) => ({
    userId: '',
    userName: '',
    password: '',
    passwordCheck: '',
    userEmail: '',
    createdAt: '',
    telNumber: '',
    setUserId: (userId) => {},
    setUserName: (userName) => {},
    setPassword: (password) => {},
    setPasswordCheck: (passwordCheck) => {},
    setUserEmail: (userEmail) => {},
    setCreateAt: (createdAt) => {},
    setTelNumber: (telNumber) => {},

    isAdmin: false,
    setIsAdmin: (isAdmin: boolean) => set((state) => ({...state, isAdmin}))
}))

export default useStore;
