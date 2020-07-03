import { RouteComponentProps } from "react-router";
import { Home } from "../components/Home/Index";
import CityForecast from "../components/CityForecast";

export interface IRoutesData {
  /**
   * Should be displayed on the home page
   */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /**
   * Should be displayed on the home page
   */
  path: string;
}

const RoutesData: IRoutesData[] = [
  {
    component: Home,
    path: "/",
  },
  {
    component: Home,
    path: "/home",
  },
  {
    component: CityForecast,
    path: '/cityForecast'
  }
];

export default RoutesData;
