// import '../App.css';
import React from 'react';
import { SearchBox } from "@emisgroup/ui-kit-react";
// import '../input.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CityForecastActionTypes } from './Actions';
import { getCityForecast, createCityForecastAction } from './Actions';

interface IDispatchProps {
    citySearch: (cityName: string) => void;
}

type Props = IDispatchProps;

class CitySearch extends React.Component<Props> {
    render() {
        return (
            <div className="main">
                <SearchBox id="searchId" onSearch={this.props.citySearch} label="Your city" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<CityForecastActionTypes>): IDispatchProps => ({
        citySearch: async (cityName: string) => dispatch(createCityForecastAction(await getCityForecast(cityName, dispatch)))
})

const CitySearchContainer = connect(null, mapDispatchToProps)(CitySearch);
export default (CitySearchContainer);