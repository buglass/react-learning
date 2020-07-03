import * as React from "react";
import { Routes as RoutedComponent } from "../routes/Index";

/**
 * Responsible for rendering the component as per route path
 */
export class Layout extends React.Component {

  constructor(props: any) {
    super(props);
  }

  /**
   * Render the routed component
   */
  public render(): React.ReactNode {
    return (
      <div>
        <RoutedComponent />
      </div>
    );
  }
}
