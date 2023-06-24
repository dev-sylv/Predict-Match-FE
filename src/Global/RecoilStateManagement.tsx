import { atom } from "recoil";

import { INewUsers } from "../Types/interface/interface";

export const ReadCount = atom({
  key: "New Users",
  default: [] as INewUsers[],
});
