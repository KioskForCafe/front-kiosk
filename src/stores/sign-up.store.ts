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

    signUpError: boolean;
    setSignUpError: (signUpError: boolean) => void;
    isAdmin: boolean;
    setIsAdmin: (isAdmin: boolean) => void;

    userIdPatternCheck: boolean | null;
    setUserIdPatternCheck: (userIdPatternCheck: boolean) => void;
    userIdDuplicate: boolean | null;
    setUserIdDuplicate: (userIdDuplicate: boolean) => void;

    passwordPatternCheck: boolean | null;
    setPasswordPatternCheck: (passwordPatternCheck: boolean) => void;
    passwordDuplicate: boolean | null;
    setPasswordDuplicate: (passwordDuplicate: boolean) => void;
    
    userNamePatternCheck: boolean;
    setUserNamePatternCheck: (userNamePatternCheck: boolean) => void;

    telNumberPatternCheck: boolean | null;
    setTelNumberPatternCheck: (telNumberPatternCheck: boolean) => void;
    telNumberDuplicate: boolean | null;
    setTelNumberDuplicate: (telNumberDuplicate: boolean) => void;

    userEmailPatternCheck: boolean | null;
    setUserEmailPatternCheck: (userEmailPatternCheck: boolean) => void;
    userEmailDuplicate: boolean | null;
    setUserEmailDuplicate: (userEmailDuplicate: boolean) => void;
}

const useStore = create<ISignUpStore>((set) => ({
    userId: '',
    userName: '',
    password: '',
    passwordCheck: '',
    userEmail: '',
    createdAt: '',
    telNumber: '',
    setUserId: (userId) => {
        const userIdDuplicator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]){2,8}$/;
        const isMatched = userIdDuplicator.test(userId);
        const IdMessage = isMatched ? '' : '아이디 포맷이 맞지 않습니다.';
        set((state) => ({...state, userId, IdMessage}))},
    setUserName: (userName) => {set((state) => ({...state, userName}))},
    setPassword: (password) => {set((state) => ({...state, password}))},
    setPasswordCheck: (passwordCheck) => {set((state) => ({...state, passwordCheck}))},
    setUserEmail: (userEmail) => {set((state) => ({...state, userEmail}))},
    setCreateAt: (createdAt) => {set((state) => ({...state, createdAt}))},
    setTelNumber: (telNumber) => {set((state) => ({...state, telNumber}))},

    signUpError: false,
    setSignUpError: (signUpError: boolean) => set((state) => ({...state, signUpError})),
    isAdmin: false,
    setIsAdmin: (isAdmin: boolean) => set((state) => ({...state, isAdmin})),

    userIdPatternCheck: null,
    setUserIdPatternCheck: (userIdPatternCheck: boolean) => set((state) => ({...state, userIdPatternCheck})),
    userIdDuplicate: null,
    setUserIdDuplicate: (userIdDuplicate: boolean) => set((state) => ({...state, userIdDuplicate})),

    passwordPatternCheck: null,
    setPasswordPatternCheck: (passwordPatternCheck: boolean) => set((state) => ({...state, passwordPatternCheck})),
    passwordDuplicate: null,
    setPasswordDuplicate: (passwordDuplicate: boolean) => set((state) => ({...state, passwordDuplicate})),

    userNamePatternCheck: false,
    setUserNamePatternCheck: (userNamePatternCheck: boolean) => set((state) => ({...state, userNamePatternCheck})),

    telNumberPatternCheck: null,
    setTelNumberPatternCheck: (telNumberPatternCheck: boolean) => set((state) => ({...state, telNumberPatternCheck})),
    telNumberDuplicate: null,
    setTelNumberDuplicate: (telNumberDuplicate: boolean) => set((state) => ({...state, telNumberDuplicate})),

    userEmailPatternCheck: null,
    setUserEmailPatternCheck: (userEmailPatternCheck: boolean) => set((state) => ({...state, userEmailPatternCheck})),
    userEmailDuplicate: null,
    setUserEmailDuplicate: (userEmailDuplicate: boolean) => set((state) => ({...state, userEmailDuplicate})),
}))

export default useStore;

