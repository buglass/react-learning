import '../App.css';
import * as React from 'react';
import '../input.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LocationForecastActionTypes } from '../actions/locationforecasttypes';
import { getForecastForCoords, coordsDataFetch } from '../actions/forecasthandlers';
import { coords, LocationState } from '../store/types';
import { RootState } from '../reducers';
import { useEffect } from 'react';

interface IDispatchProps {
    coordsSearch: (coords: coords) => void;
}

type Props = LocationState & IDispatchProps;

const LocationSearch: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        if (props.isLoaded) {
            props.coordsSearch({ latitude: props.coords.latitude, longitude: props.coords.longitude })
        }
    }, [props.coords.latitude, props.coords.longitude]);
    return (<div>{props.loadingStatus}</div>);
}

const mapStateToProps = (state: RootState): LocationState => ({
    coords: {
        latitude: state.geolocation.coords.latitude,
        longitude: state.geolocation.coords.longitude,
    },
    loadingStatus: state.geolocation.loadingStatus,
    isLoaded: state.geolocation.isLoaded
});

const mapDispatchToProps = (dispatch: Dispatch<LocationForecastActionTypes>): IDispatchProps =>
    ({
        coordsSearch: async (coords: coords) => dispatch(getForecastForCoords(await coordsDataFetch(coords, dispatch)))
    })

const LocationSearchContainer = connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
export default (LocationSearchContainer);