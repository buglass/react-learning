import '../App.css';
import React from 'react';
import { SearchBox } from "@emisgroup/ui-kit-react";
import '../input.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CityForecastActionTypes } from '../actions/cityforecasttypes';
import { getForecastForCity, cityDataFetch } from '../actions/forecasthandlers';

interface IDispatchProps {
    citySearch: (cityName: string) => void;
}

type Props = IDispatchProps;

class Search extends React.Component<Props> {
    render() {
        return (
            <div className="main">
                <SearchBox id="searchId" onSearch={this.props.citySearch} label="Your city" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<CityForecastActionTypes>): IDispatchProps => ({
        citySearch: async (cityName: string) => dispatch(getForecastForCity(await cityDataFetch(cityName, dispatch)))
})

const SearchContainer = connect(null, mapDispatchToProps)(Search);
export default (SearchContainer);