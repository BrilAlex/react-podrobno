import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  console.log("App rendering");
  return (
    <div>
      <PageTitle title={"Article 1"}/>
      <Rating value={3}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <PageTitle title={"Article 2"}/>
      <Rating value={4}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      <OnOff isOn={true}/>
      <OnOff isOn={false}/>
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
