import { User } from "src/interfaces";
import { create } from "zustand";

interface IUserStroe {
    user: User | null;
    setUser: (user: User) => void;
    resetUser: () => void;
}

const useStore = create<IUserStroe>((set) => ({
    user: null,
    setUser: (user: User) => set((state) => ({...state, user })),
    resetUser: () => set((state) => ({...state, user: null})),
}))
export default useStore;
