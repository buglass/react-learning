import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import { LoggerComponent } from "@emisgroup/client-logging";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context";
import { Layout } from "./layout/Index";
import { AppStore as appStore } from "./store/AppStore";
import LoggerConfig from "./LoggerConfig";

/**
 * Responsible for rendering the Application component
 */
class Application extends React.Component {

  constructor(props: any) {
    super(props);
  }

  /**
   * Render the routed component
   */
  public render(): React.ReactNode {
    return (
      <Provider store={ appStore.store }>
        <ConnectedRouter history={ appStore.history }>
          <BrowserRouter basename={ "/" + Context.application?.selectedApplication.relativeUrl }>
            <LoggerComponent { ...LoggerConfig }>
              <Layout />
            </LoggerComponent>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Application as any;
