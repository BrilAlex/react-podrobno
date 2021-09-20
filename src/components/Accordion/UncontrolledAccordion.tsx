import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

export type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
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

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    let [collapsed, setCollapsed] = useState(false);
    const toggleAccordionBody = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={toggleAccordionBody}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

export default UncontrolledAccordion;