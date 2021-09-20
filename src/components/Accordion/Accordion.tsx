import React from "react";
import {AccordionItemType} from "../../App";

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

type AccordionBodyProps = {
    items: AccordionItemType[]
    callback: (value: any) => void
}

export type AccordionPropsType = {
    titleValue: string
    items: AccordionItemType[]
    collapsed: boolean
    accordionTitleCallback: (value: boolean) => void
    accordionItemCallback: (value: any) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return <h3 onClick={(e) => props.callback()}>
        {props.title}
    </h3>;
}

function AccordionBody(props: AccordionBodyProps) {
    console.log("AccordionBody rendering");
    let itemsToRender = props.items.map((i, elIndex) => (
        <li key={elIndex}
            onClick={(e) => props.callback(i.value)}
        >
            {i.name}
        </li>
    ));

    return (
        <ul>
            {itemsToRender}
        </ul>
    );
}

function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                callback={() => props.accordionTitleCallback(!props.collapsed)}
            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                callback={props.accordionItemCallback}
            />}
        </div>
    );
}

export default Accordion;