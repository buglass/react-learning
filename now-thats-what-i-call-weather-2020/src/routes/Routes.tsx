import * as React from "react";
import { Route } from "react-router-dom";
import RoutesData, { IRoutesData } from "./RoutesData";

/**
 * Responsible for rendering the component as per route path
 */
export class Routes extends React.Component {

  constructor(props: any) {
    super(props);
  }

  /**
   * Render the routed component
   */
  public render(): React.ReactNode {
    const routeElement: JSX.Element[] = RoutesData.map(
      (route: IRoutesData, index: number) =>
        <Route key={index} exact={true} path={route.path} component={route.component} />,
    );
    return routeElement;
  }
}
