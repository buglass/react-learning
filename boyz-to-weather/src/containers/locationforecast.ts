import '../App.css';
import '../input.css';
import { connect } from 'react-redux';
import { ForecastState } from '../store/types';
import { RootState } from '../reducers';
import { ForecastDisplay } from '../components/forecastdisplay';

const mapStateToPropsGeo = (state: RootState): ForecastState => ({
    caption: state.locationforecast.caption,
    forecast: state.locationforecast.forecast
});

export default connect(mapStateToPropsGeo)(ForecastDisplay);