import { IAction } from "../../utilities/redux/ActionHelper";
import { ActionTypes } from "./Actions";

export interface IState {
  /**
   * Should be displayed on the home page
   */
  message: string;
}

export const InitialState: IState = {
  message: "Welcome to Web App Kit",
};

const SetState: { [key: string]: (state: IState, value: string) => IState } = {

  message: (state: IState, value: string): IState => {
    return {
      ...state,
      message: value,
    };
  },

};

export const Reducer: <T extends {}> (state: IState, action: IAction<T>) => IState =
  (state: IState = InitialState, action: IAction<any>): IState => {
    switch (action.type) {
      case ActionTypes.SetMessage: {
        state = SetState.message(state, action.payload);
        break;
      }
      default: {
        break;
      }
    }
    return state;
  };
