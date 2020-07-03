import ForecastDisplay from '../ForecastDisplay/CityContainer'
import CitySearch from '../CitySearch/CitySearch'
import React from 'react'

export default class CityForecast extends React.Component {
    render() {
        return (
            <div>
                <CitySearch/>
                <ForecastDisplay/>
            </div>
        )
    }
}