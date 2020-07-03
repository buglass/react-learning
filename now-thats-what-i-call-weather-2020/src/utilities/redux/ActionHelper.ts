export interface IAction<T> {
  /**
   * Should be displayed on the home page
   */
  payload?: T;
  /**
   * Should be displayed on the home page
   */
  type: string;
}

/**
 * Creates the action
 * @param type type of action
 * @param payload value for the action
 */
export function CreateAction<T>(type: string, payload?: T): IAction<T> {
  return {
    payload,
    type,
  };
}
