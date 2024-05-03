import { Signal, signal } from "@preact/signals-core";
import { createContext } from "react";

export interface Props {
  children: React.ReactNode;
}

export interface IAppState {
  username: string | null;
  appData: Record<string, unknown>;
  error: Record<string, unknown>;
  liveData: Signal<string>;
}

const initialAppState: IAppState = {
  username: "John Doe",
  appData: {
    test: "This is the test",
  },
  liveData: signal("initial live data"),
  error: {
    message: "no error",
  },
};

export const AppStateContext = createContext<IAppState | undefined>(undefined);

export const AppStateProvider = ({ children }: Props) => {
  const stateValue = initialAppState;
  return (
    <AppStateContext.Provider value={stateValue}>
      {children}
    </AppStateContext.Provider>
  );
};
