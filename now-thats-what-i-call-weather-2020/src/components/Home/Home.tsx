import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { withLogger, IWithLogger } from "@emisgroup/client-logging";
import { IRootState } from "../../reducer/CombineReducer";
import { IAction } from "../../utilities/redux/ActionHelper";
import { Actions } from "./Actions";
import { IState } from "./Reducer";
import "./Style.scss";

/**
 * Represents the props needed for the home component
 */
export interface IStateProps {
  /**
   * Should be displayed on the home page
   */
  homeData: IState;
}

interface IDispatchProps {
  /**
   * Should be displayed on the home page
   */
  setMessage: (value: string) => IAction<string>;
}

type Props = IStateProps & IDispatchProps & IWithLogger;

/**
 * Responsible for rendering the home component
 */
export class Home extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.props.log.info("Home component is loaded");
  }

  /**
   * Render the home component
   */
  public render(): React.ReactNode {
    return (
      <div className="title">
        {this.props.homeData.message}
      </div>
    );
  }
}

export const mapStateToProps = (state: IRootState): IStateProps  => ({
  homeData: state.homeData,
});

export const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => {
  return {
    setMessage: (value: string): IAction<string> =>
      dispatch(Actions.SetMessage<string>(value)),
  };
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(withLogger(Home));
