import { useContext } from "react";
import { AppStateContext, IAppState } from "../providers";

export const useAppState = (): IAppState => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("Application must be used under AppStateProvider");
  }

  return context;
};
