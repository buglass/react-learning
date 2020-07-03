import { forecastRecord, ForecastState } from "../store/types";
import { coords } from "../store/types";
import { CityForecastActionTypes, CITY_FORECAST_REQUEST } from "./cityforecasttypes"
import { LocationForecastActionTypes, LOCATION_FORECAST_REQUEST } from "./locationforecasttypes"

function mapForecastModelToEntity(json: any): forecastRecord {
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

function wait(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export function getForecastForCity(cityForecast: ForecastState): CityForecastActionTypes {
    return {
        type: 'CITY_FORECAST',
        payload: cityForecast
    }
};

export async function cityDataFetch(cityName: string, dispatch: React.Dispatch<CityForecastActionTypes>) {
    dispatch({type: CITY_FORECAST_REQUEST, payload: { forecast: [], caption: "Retrieving forecast for " + cityName + "..." }})
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},uk&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    await wait(5000);
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

export function getForecastForCoords(coordsForecast: ForecastState): LocationForecastActionTypes {
    return {
        type: 'LOCATION_FORECAST',
        payload: coordsForecast
    }
};

export async function coordsDataFetch(coords: coords,  dispatch: React.Dispatch<LocationForecastActionTypes>) {
    dispatch({type: LOCATION_FORECAST_REQUEST, payload: { forecast: [], caption: "Retrieving forecast for your location..."}})
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    await wait(5000);
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