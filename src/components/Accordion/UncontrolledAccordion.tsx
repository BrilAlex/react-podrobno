import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

export type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    const toggleAccordionBody = () => dispatch({type: TOGGLE_COLLAPSED});

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={toggleAccordionBody}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return <h3 onClick={props.callBack}>{props.title}</h3>;
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;