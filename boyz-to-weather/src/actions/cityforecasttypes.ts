import { ForecastState } from "../store/types";

export const CITY_FORECAST = 'CITY_FORECAST';
export const CITY_FORECAST_REQUEST = 'CITY_FORECAST_REQUEST';

interface CityForecastAction {
    type: typeof CITY_FORECAST,
    payload: ForecastState // Is async so payload might not be the best name - it's actually the function.
}

interface CityForecastRequestAction {
    type: typeof CITY_FORECAST_REQUEST,
    payload: ForecastState
}

export type CityForecastActionTypes = CityForecastAction | CityForecastRequestAction;