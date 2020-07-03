import { ForecastState, ForecastRecord } from "./Types";

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

export function createCityForecastAction(forecastState: ForecastState): CityForecastActionTypes {
    return {
        type: 'CITY_FORECAST',
        payload: forecastState
    }
};

export async function getCityForecast(cityName: string, dispatch: React.Dispatch<CityForecastActionTypes>) {
    dispatch({type: CITY_FORECAST_REQUEST, payload: { forecast: [], caption: "Retrieving forecast for " + cityName + "..." }})
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},uk&appid=${process.env.APP_WEATHER_API_KEY}`);
    const result = await data.json();
    if (result.cod === "200") {
        return {
            forecast: result.list.map(mapForecastModelToEntity),
            caption: result.city.name
        }
    }
    else {
        return {
            forecast: [],
            caption: "Error occurred: " + JSON.stringify(result.message).slice(1, -1)
        }
    }
}

function mapForecastModelToEntity(json: any): ForecastRecord {
    return {
        id: {
            text: json.dt
        },
        dateTime: {
            text: json.dt_txt
        },
        main: {
            text: json.weather[0].main
        },
        description: {
            text: json.weather[0].description
        },
        temp: {
            text: Math.round(json.main.temp - 273.15)
        },
        windspeed: {
            text: json.wind.speed
        }
    }
}