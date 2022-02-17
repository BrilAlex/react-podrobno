import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  console.log("App rendering");
  return (
    <div>
      <PageTitle title={"Rating"}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <PageTitle title={"Uncontrolled Rating"}/>
      <UncontrolledRating/>
      <PageTitle title={"Accordion"}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      <PageTitle title={"Uncontrolled Accordion"}/>
      <UncontrolledAccordion titleValue={"Click me"}/>
      <PageTitle title={"OnOff"}/>
      <OnOff/>
      <OnOff/>
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
