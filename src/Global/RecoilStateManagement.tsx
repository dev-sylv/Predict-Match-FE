import { atom } from "recoil";
import { INewUsers } from "../Types/interface/interface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ReadNewUsers = atom({
  key: "New Users",
  default: {} as INewUsers,
  effects_UNSTABLE: [persistAtom],
});
