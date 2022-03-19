import {
  StateType,
  TOGGLE_COLLAPSED,
  uncontrolledAccordionReducer
} from "./uncontrolledAccordionReducer";

test("Collapsed should be changed to true", () => {
  // date
  const state: StateType = {
    collapsed: false,
  };

  // action
  const newState = uncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED});

  // expectation
  expect(newState).not.toBe(state);
  expect(newState.collapsed).toBeTruthy();
});

test("Collapsed should be changed to false", () => {
  // date
  const state: StateType = {
    collapsed: true,
  };

  // action
  const newState = uncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED});

  // expectation
  expect(newState).not.toBe(state);
  expect(newState.collapsed).toBeFalsy();
});

test("Reducer should throw error", () => {
  // date
  const state: StateType = {
    collapsed: true,
  };

  // expectation
  expect(() => {
    uncontrolledAccordionReducer(state, {type: "SOME-TYPE"})
  }).toThrowError();
});