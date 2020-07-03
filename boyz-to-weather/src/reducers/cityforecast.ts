import { CITY_FORECAST, CityForecastActionTypes, CITY_FORECAST_REQUEST } from "../actions/cityforecasttypes";
import { ForecastState } from "../store/types";

const initialState: ForecastState = {
    forecast: [],
    caption: ""
};

export function cityforecast(
    state = initialState,
    action: CityForecastActionTypes): ForecastState 
{
    switch (action.type) {
        case CITY_FORECAST:
            return state = action.payload
        case CITY_FORECAST_REQUEST:
            return state = action.payload
        default:
            return state;
    }
}