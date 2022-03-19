import React, {useReducer} from "react";
import {TOGGLE_COLLAPSED, uncontrolledAccordionReducer} from "./uncontrolledAccordionReducer";

type AccordionTitlePropsType = {
  title: string
  callback: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("Uncontrolled AccordionTitle rendering");
  return <h3 onClick={() => props.callback()}>{props.title}</h3>;
}

const AccordionBody = () => {
  console.log("Uncontrolled AccordionBody rendering");
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>;
}

export type UncontrolledAccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  console.log("Uncontrolled Accordion rendering");
  const [state, dispatch] = useReducer(uncontrolledAccordionReducer, {collapsed: false});

  return <div>
    <AccordionTitle
      title={props.titleValue}
      callback={() => dispatch({type: TOGGLE_COLLAPSED})}/>
    {!state.collapsed && <AccordionBody/>}
  </div>;
}