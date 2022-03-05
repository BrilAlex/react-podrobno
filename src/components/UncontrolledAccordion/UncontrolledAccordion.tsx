import React, {useState} from "react";

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
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return <div>
    <AccordionTitle
      title={props.titleValue}
      callback={() => setCollapsed(!collapsed)}/>
    {!collapsed && <AccordionBody/>}
  </div>;
}