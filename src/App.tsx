import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion
    from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type AccordionItemType = {
    id: number
    name: string
    value: any
}

const accordionItems: Array<AccordionItemType> = [
    {id: 1, name: "Dimych", value: "Dmitry"},
    {id: 2, name: "Natasha", value: "Dimych wife"},
    {id: 3, name: "Viktor", value: "mentor Viktor"},
    {id: 4, name: "Igor", value: "mentor Igor"},
    {id: 5, name: "Alex", value: "student"}
];

//function declaration
function App() {
    console.log("App rendering");
    //делает что-то полезное
    //обязана вернуть JSX разметку
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsedStatus, setCollapsedStatus] = useState<boolean>(false);
    let [onStatus, setOnStatus] = useState<boolean>(true);

    const alertOnAccordionItemClick = (value: any) => {
        alert(`Item with value ${value} was clicked`);
    };

    return (
        <div className={"appContainer"}>
            <PageTitle title={"This is App Component"}/>
            <h3>Accordion</h3>
            <Accordion
                titleValue={"Menu"}
                items={accordionItems}
                collapsed={collapsedStatus}
                accordionTitleCallback={setCollapsedStatus}
                accordionItemCallback={alertOnAccordionItemClick}
            />

            <h3>Rating</h3>
            <Rating value={ratingValue} callback={setRatingValue}/>

            <h3>On/Off</h3>
            <OnOff status={onStatus} callback={setOnStatus}/>

            <h3>Uncontrolled Accordion</h3>
            <UncontrolledAccordion titleValue={"Settings"}/>

            <h3>Uncontrolled Rating</h3>
            <UncontrolledRating/>

            <h3>Uncontrolled OnOff</h3>
            <UncontrolledOnOff callback={setOnStatus}/>
            <span>Sync On status from Uncontrolled On/Off: {onStatus.toString()}</span>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering");
    return <h1>{props.title}</h1>;
}

export default App;
