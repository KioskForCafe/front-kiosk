import { User } from "src/interfaces";
import { SelectedMenu } from "src/interfaces/SelectedMenu.interface";
import { create } from "zustand";

interface ISelectedMenuStroe {
    selectedMenu: SelectedMenu | null;
    selectedMenuList: SelectedMenu[];
    setSelectedMenu: (selectedMenu: SelectedMenu) => void;
    setSelectedMenuList: (selectedMenu: SelectedMenu[]) => void;
    addSelectedMenuList: (selectedMenu: SelectedMenu) => void;
    resetUser: () => void;
}

const useStore = create<ISelectedMenuStroe>((set) => ({
    selectedMenu: null,
    selectedMenuList: [],
    setSelectedMenu: (selectedMenu: SelectedMenu) => set((state) => ({...state, selectedMenu })),
    setSelectedMenuList: (selectedMenuList: SelectedMenu[]) => set((state) => ({...state, selectedMenuList })),
    addSelectedMenuList: (selectedMenu: SelectedMenu) => set((state) => {
        const addedSelectedMenu = state.selectedMenuList.map(item => item);
        addedSelectedMenu.push(selectedMenu);
        return ({...state, selectedMenuList: addedSelectedMenu })
    }),
    resetUser: () => set((state) => ({...state, user: null})),
}))
export default useStore;
