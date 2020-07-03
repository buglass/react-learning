import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import { Logger } from "@emisgroup/client-logging";
import { AppStore } from "../../store/AppStore";
import { Home, mapStateToProps, mapDispatchToProps } from "./Home";
import { IState, InitialState } from "./Reducer";
import { ActionTypes } from "./Actions";

describe("Home", () => {

  beforeEach(()=>{
    Logger.info = jest.fn();
  });

  it("should show home initial state", () => {
    const initialState = AppStore.store.getState();

    expect(mapStateToProps(initialState).homeData).toEqual(InitialState);
  });

  it("should send set home message", () => {
    const dispatch = jest.fn();
    const message = "Another message";
    const i = 0;

    mapDispatchToProps(dispatch).setMessage(message);
    expect(dispatch.mock.calls[i][i]).toEqual({ payload: message, type: ActionTypes.SetMessage });
  });

  it("should render label element with its default style", () => {
    const homeData: IState = { message: "hai" };
    const log: any = { info : jest.fn() };
    const wrapper: ReactWrapper = mount(<Home homeData={homeData} setMessage={jest.fn()} log={log}/>);
    const firstIndex = 0;
    expect(wrapper.childAt(firstIndex).is("div")).toBe(true);
  });
});
