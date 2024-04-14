'use client';

import { IAppContext, IAppState } from '@/models/appInterface';
import { ReactNode, createContext, useState } from 'react';

const appState: IAppState = {
  modal: {
    position: 0,
    open: false,
    onClose: null,
    titleModal: ''
  }
};
const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({ ...appState });
  const updateState = (newState: Partial<IAppState>) => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, updateState: updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
