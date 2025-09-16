import { atom } from "recoil";

export const darkState = atom<boolean>({
  key: "darkState",
  default: false,
});
