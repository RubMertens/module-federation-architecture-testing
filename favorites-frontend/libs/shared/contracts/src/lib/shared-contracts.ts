


export class FavoritesAppError extends Error {
  constructor(message: string, public actions: ErrorAction | ErrorAction[]) {
    super(message);
  }
}

export interface ErrorAction {
  label: string;
  action: (context: ErrorActionContext) => void;
}

export interface ErrorActionContext {
  error: Error;
  dismiss: () => void;
}
export interface FavoritesErrorEvent {
  message: string;
  duration: number;
  actions?: ErrorAction[];
  error: Error;
}
