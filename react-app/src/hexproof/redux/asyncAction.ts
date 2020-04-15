import { IAction } from 'hexproof/types/IAction';

export function getAsyncActionType(actionType: string): string {
  return `${actionType}_ASYNC`;
}
export function getSuccessActionType(actionType: string): string {
  return `${actionType}_SUCCESS`;
}
export function getErrorActionType(actionType: string): string {
  return `${actionType}_ERROR`;
}

export function asyncAction<T>({
  action,
  dispatch,
  promise,
}: {
  action: IAction;
  dispatch: (action: IAction) => void;
  promise: () => Promise<any>;
}): Promise<T> {
  const { payload, type } = action;
  dispatch({
    type: getAsyncActionType(type),
    payload,
  });
  return new Promise((resolve, reject) => {
    promise().then(response => {
      dispatch({
        type: getSuccessActionType(type),
        payload: {
          original: payload,
          response,
        },
      });
      resolve(response);
    }, error => {
      dispatch({
        type: getErrorActionType(type),
        payload: {
          error,
          original: payload,
        },
      });
      reject(error);
    });
  });
}
