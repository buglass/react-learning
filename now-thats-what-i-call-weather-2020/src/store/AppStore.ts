import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore, Middleware, Store } from "redux";
import { OutgoingInteropMiddleWare } from "@emisgroup/single-spa-library";
import thunk from "redux-thunk";
import createRootReducer, { IRootState } from "../reducer/CombineReducer";

export const browserHistory: History = createBrowserHistory();
const middleWare: Middleware = routerMiddleware(browserHistory);

export interface IAppStore {
  /**
   * History
   */
  history: History;
  /**
   * Store
   */
  store: Store<IRootState>;
}

export const AppStore: IAppStore = {
  history: browserHistory,
  store: createStore(createRootReducer(browserHistory),
    compose(applyMiddleware(middleWare, OutgoingInteropMiddleWare, thunk)))
};
