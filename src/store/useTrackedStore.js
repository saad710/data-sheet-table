import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import { Menuitems } from "../data/data.js";

setAutoFreeze(false);

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      console.log("New State ", get());
    },
    get,
    api
  );

const store = (set) => ({
  menuItems: Menuitems,
  menuClicked: "Dashboard",
  setMenuClicked: (menuClicked) =>
    set((state) => {
      state.menuClicked = menuClicked;
    }),
  subMenuClicked: "",
  setSubMenuClicked: (subMenuClicked) =>
    set((state) => {
      state.subMenuClicked = subMenuClicked;
    }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;
