import { createContext } from "react";

export interface Props {
  children: React.ReactNode;
}

export interface IAppState {
  username: string | null;
  appData: Record<string, unknown>;
  error: Record<string, unknown>;
};

const initialAppState: IAppState = {
  username: "John Doe",
  appData: {
    test: "This is the test"
  },
  error: {
    message: "no error"
  }
};

export const AppStateContext = createContext<IAppState | undefined>(undefined);

export const AppStateProvider = ({ children }: Props) => {
  const stateValue = initialAppState;
  return <AppStateContext.Provider value={stateValue}>{children}</AppStateContext.Provider>;
}