import React from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux'
import Search from './components/citysearch'
import { default as CityForecastDisplay } from './containers/cityforecast'
import { default as GeolocForecastDisplay } from './containers/locationforecast'
import LocationSearch from './components/locationsearch'
import { Dispatch } from 'redux'
//import { getPositionAction, GetPosition } from "./actions/geolocationhandlers";
import { GetPosition, GetPositionThunk } from "./actions/geolocationhandlers";
//import { GeolocationActionTypes } from './actions/geolocationtypes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// interface IDispatchProps {
//   positionRetriever: () => void;
// }

//type Props = IDispatchProps;
type Props = {};

const App: React.FC<Props> = (props: Props) => {
  useDispatch()(GetPositionThunk())
  return (
    <Router>
      <div className="main">
        <h1>Boyz to Weather: It's Raining Boyz</h1>
      </div>

      <Switch>
        <Route path="/local/forecast">
          <LocationSearch />
          <GeolocForecastDisplay />
        </Route>
        <Route path="/search/forecast">
          <Search />
          <CityForecastDisplay />
        </Route>
        <Route path="/">
          <div>
            <LocationSearch />
            <Search />
            <CityForecastDisplay />
            <GeolocForecastDisplay />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

// class App extends React.Component<Props> {

//   componentDidMount() {
//     useDispatch()(GetPosition())
//     //this.props.positionRetriever();
//   }

//   render() {
//     return (
//       <Router>
//         <div className="main">
//           <h1>Boyz to Weather: It's Raining Boyz</h1>
//         </div>

//         <Switch>
//           <Route path="/local/forecast">
//             <LocationSearch />
//             <GeolocForecastDisplay />
//           </Route>
//           <Route path="/search/forecast">
//             <Search />
//             <CityForecastDisplay />
//           </Route>
//           <Route path="/">
//             <div>
//               <LocationSearch />
//               <Search />
//               <CityForecastDisplay />
//               <GeolocForecastDisplay />
//             </div>
//           </Route>
//         </Switch>
//       </Router>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch<GeolocationActionTypes>): IDispatchProps => ({
//   positionRetriever: async () => dispatch(getPositionAction(await GetPosition()))
// })

//const AppContainer = connect(null, mapDispatchToProps)(App)
const AppContainer = connect(null, null)(App)

export default AppContainer;
