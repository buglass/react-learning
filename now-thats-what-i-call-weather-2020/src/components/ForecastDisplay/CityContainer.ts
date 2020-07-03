import { connect } from 'react-redux';
import { ForecastState } from '../CitySearch/Types';
import { IRootState } from '../../reducer/CombineReducer';
import { ForecastDisplay } from './ForecastDisplay';

const mapStateToProps = (state: IRootState): ForecastState => ({
    caption: state.cityForecastData.caption,
    forecast: state.cityForecastData.forecast
});

export default connect(mapStateToProps)(ForecastDisplay);