import { ForecastState } from "../store/types";

export const LOCATION_FORECAST = 'LOCATION_FORECAST';
export const LOCATION_FORECAST_REQUEST = 'FORECAST_REQUEST';

interface LocationForecastAction {
    type: typeof LOCATION_FORECAST,
    payload: ForecastState
}

interface LocationForecastRequestAction {
    type: typeof LOCATION_FORECAST_REQUEST,
    payload: ForecastState
}

export type LocationForecastActionTypes =  LocationForecastAction | LocationForecastRequestAction;