import { create } from "zustand";

type props = {
  isToggled: boolean;
  toggle: () => void;
  setToggled: (value: boolean) => void;
};

export const useOpenHamburgerMenu = create<props>((set) => ({
  // initial state

  isToggled: false,

  // toggle function
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),

  setToggled: (value: boolean) => set({ isToggled: value }),
}));
