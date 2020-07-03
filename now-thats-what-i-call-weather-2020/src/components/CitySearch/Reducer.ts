import { CITY_FORECAST, CityForecastActionTypes, CITY_FORECAST_REQUEST } from "./Actions";

const initialState: State = {
    forecast: [],
    caption: ""
};

export function Reducer(
    state = initialState,
    action: CityForecastActionTypes): State 
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

export interface State {
    forecast: ForecastRecord[],
    caption: string
}

export interface ForecastRecord {
    id: {
        text: number
    },
    dateTime: {
        text: string
    },
    main: {
        text: string
    },
    description: {
        text: string
    },
    temp: {
        text: number
    },
    windspeed: {
        text: number
    }
}