import { combineReducers } from "redux";
import { cityforecast } from "./cityforecast"
import { geolocationReducer } from "./geolocation"
import { locationforecast } from "./locationforecast"

export const forecastApp = combineReducers({
    cityforecast: cityforecast,
    geolocation: geolocationReducer,
    locationforecast: locationforecast
});

export type RootState = ReturnType<typeof forecastApp>;