import produce from "immer";
import { IState, Reducer, InitialState } from "./Reducer";
import { ActionTypes } from "./Actions";

describe("Patient banner reducer", ()=>{

  let state: IState;
  beforeEach(()=>{
    state = InitialState;
  });

  it("should return correct state", ()=> {

    const message = "My test message";
    const expected = produce(state, (draft: IState) => {
      draft.message = message;
    });
    expect(Reducer(state, { payload: message, type:ActionTypes.SetMessage })).toEqual(expected);

  });
});
