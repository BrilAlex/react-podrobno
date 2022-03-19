type ActionType = {
  type: string
};

export type StateType = {
  collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

export const uncontrolledAccordionReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return {...state, collapsed: !state.collapsed};
    default:
      throw new Error("Invalid action type");
  }
};