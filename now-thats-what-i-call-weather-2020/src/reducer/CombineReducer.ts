import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, Reducer } from "redux";
import { InteropReducer } from "@emisgroup/single-spa-library";
import { HomeReducer, IHomeState } from "../components/Home/Index";
import { ForecastState, CityReducer } from "../components/CitySearch/Index";

export interface IRootState {
  /**
   * Homedata
   */
  homeData: IHomeState;
  /**
   * Router
   */
  router: RouterState;
  /**
   * InteropData - This data will be mirrored between the application frame and this module.
   */
  interopData: ReturnType<typeof InteropReducer>;

  cityForecastData: ForecastState
}

/**
 * Returns the list of reducers
 */
const createRootReducer: (history: any) => Reducer<IRootState> =
  (history: any): Reducer<IRootState> => combineReducers<IRootState>({
    homeData : HomeReducer,
    interopData : InteropReducer,
    router: connectRouter(history), 
    cityForecastData: CityReducer
  });

export default createRootReducer;
