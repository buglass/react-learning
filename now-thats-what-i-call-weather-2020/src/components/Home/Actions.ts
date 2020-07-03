import { CreateAction, IAction } from "../../utilities/redux/ActionHelper";

export const ActionTypes: {[key: string]: string} = {
  SetMessage : "SET_MESSAGE",
};

export const Actions: {[key: string]: <T extends {}> (value: T) => IAction<T>} = {
  SetMessage : <T extends {}> (value: T): IAction<T> => CreateAction<T>(ActionTypes.SetMessage, value),
};
