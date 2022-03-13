import React from "react";

type ItemType = {
  value: any
  title: string
};

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  setCollapsed: () => void
  items: ItemType[]
  onItemClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  return <div>
    <AccordionTitle title={props.titleValue} callback={props.setCollapsed}/>
    {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
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

type AccordionBodyPropsType = {
  items: ItemType[]
  onItemClick: (value: any) => void
};

const AccordionBody = (props: AccordionBodyPropsType) => {
  console.log("AccordionBody rendering");

  return (
    <ul>
      {props.items.map((i, index) => {
        const onClickHandler = () => {
          props.onItemClick(i.value);
        };

        return (
          <li key={index} onClick={onClickHandler}>{i.title}</li>
        );
      })}
    </ul>
  );
}