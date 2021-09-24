import {ActionType, reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

let state: StateType;
let state2: StateType;
let action: ActionType

// data
beforeEach(() => {
    state = {
        collapsed: false
    };
    state2 = {
        collapsed: true
    };
    action = {
        type: TOGGLE_COLLAPSED
    };
});

test("Reducer should change value to true", () => {

    // action
    const newState = reducer(state, action);

    //expectation
    expect(newState).not.toBe(state);
    expect(newState.collapsed).toBe(true);
});

test("Reducer should change value to false", () => {

    // action
    const newState = reducer(state2, action);

    //expectation
    expect(newState).not.toBe(state);
    expect(newState.collapsed).toBe(false);
});

test("Reducer should return error", () => {

    //expectation
    expect(() => reducer(state,{type: "FakeType"})).toThrowError();
});