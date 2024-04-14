import { MouseEventHandler } from 'react';
export interface IAppState {
  modal: {
    position: number;
    titleModal: string;
    open: boolean;
    onClose: MouseEventHandler<HTMLButtonElement> | null;
  };
}

export type updateState<T> = (_newState: T) => void;

export interface IAppContext extends IAppState {
  updateState: updateState<Partial<IAppState>>;
}
