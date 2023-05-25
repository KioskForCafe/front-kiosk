import { Store } from "src/interfaces";
import { create } from "zustand";

interface IStore {
    store: Store | null;
    setStore: (store: Store) => void;
    resetStore: () => void;
}

const useStore = create<IStore>((set) => ({
    store: null,
    setStore: (store: Store) => set((state) => ({...state, store })),
    resetStore: () => set((state) => ({...state, store: null})),
}))

export default useStore;