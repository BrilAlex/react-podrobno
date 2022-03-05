import React from "react";

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  setCollapsed: () => void
}

export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  return <div>
    <AccordionTitle title={props.titleValue} callback={props.setCollapsed}/>
    {!props.collapsed && <AccordionBody/>}
  </div>;
}

type AccordionTitlePropsType = {
  title: string
  callback: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("AccordionTitle rendering");
  return <h3 onClick={()=>props.callback()}>{props.title}</h3>;
}

const AccordionBody = () => {
  console.log("AccordionBody rendering");
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>;
}