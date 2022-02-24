import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncotrolledOnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  console.log("App rendering");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [collapsedValue, setCollapsedValue] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className={"appWrapper"}>
      <PageTitle title={"Rating"}/>
      <Rating
        value={ratingValue}
        setRatingValue={setRatingValue}
      />

      <PageTitle title={"Uncontrolled Rating"}/>
      <UncontrolledRating/>

      <PageTitle title={"Accordion"}/>
      <Accordion
        titleValue={"Users"}
        collapsed={collapsedValue}
        setCollapsed={() => setCollapsedValue(!collapsedValue)}
      />

      <PageTitle title={"Uncontrolled Accordion"}/>
      <UncontrolledAccordion titleValue={"Click me"}/>

      <PageTitle title={"OnOff"}/>
      <OnOff isOn={isOn} setIsOn={setIsOn}/>

      <PageTitle title={"Uncontrolled OnOff"}/>
      <UncontrolledOnOff setIsOnValue={setIsOn}/>
      Controlled OnOff value: {isOn.toString()}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
};

const PageTitle = (props: PageTitlePropsType) => {
  console.log("PageTitle rendering");
  return <h2>{props.title}</h2>
}

export default App;
