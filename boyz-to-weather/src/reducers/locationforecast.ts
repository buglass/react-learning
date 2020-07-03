import { LOCATION_FORECAST, LocationForecastActionTypes } from "../actions/locationforecasttypes";
import { ForecastState } from "../store/types";

const initialState: ForecastState = {
    forecast: [],
    caption: ""
};

export function locationforecast(
    state = initialState,
    action: LocationForecastActionTypes): ForecastState 
{
    switch (action.type) {
        case LOCATION_FORECAST:
            return state = action.payload
        default:
            return state;
    }
}