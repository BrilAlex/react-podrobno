import React from "react";
import UncontrolledAccordion, {AccordionPropsType} from "./UncontrolledAccordion";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Components/Accordion Uncontrolled",
    component: UncontrolledAccordion
} as Meta;

const Template: Story<AccordionPropsType> = (args) => (
    <UncontrolledAccordion {...args}/>
);

export const ChangingMode = Template.bind({});
ChangingMode.args = {
    titleValue: "Accordion with useReducer"
}