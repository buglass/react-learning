import '../App.css';
import '../input.css';
import { connect } from 'react-redux';
import { ForecastState } from '../store/types';
import { RootState } from '../reducers';
import { ForecastDisplay } from '../components/forecastdisplay';

const mapStateToProps = (state: RootState): ForecastState => ({
    caption: state.cityforecast.caption,
    forecast: state.cityforecast.forecast
});

export default connect(mapStateToProps)(ForecastDisplay);