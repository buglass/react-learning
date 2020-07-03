export interface forecastRecord {
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

export interface ForecastState {
    forecast: forecastRecord[],
    caption: string
}

export interface LocationState {
    coords: coords,
    loadingStatus: string,
    isLoaded: boolean
}

export interface coords {
    latitude: number,
    longitude: number
};