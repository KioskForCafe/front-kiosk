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
    setUserId: (userId) => {set((state) => ({...state, userId}))},
    setUserName: (userName) => {set((state) => ({...state, userName}))},
    setPassword: (password) => {set((state) => ({...state, password}))},
    setPasswordCheck: (passwordCheck) => {set((state) => ({...state, passwordCheck}))},
    setUserEmail: (userEmail) => {set((state) => ({...state, userEmail}))},
    setCreateAt: (createdAt) => {set((state) => ({...state, createdAt}))},
    setTelNumber: (telNumber) => {set((state) => ({...state, telNumber}))},

    isAdmin: false,
    setIsAdmin: (isAdmin: boolean) => set((state) => ({...state, isAdmin}))
}))

export default useStore;
