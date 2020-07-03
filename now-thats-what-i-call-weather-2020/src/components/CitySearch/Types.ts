export interface ForecastState {
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