import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncontrolledAccordion";
import {Story} from "@storybook/react";

export default {
  title: "Components/Uncontrolled Accordion",
  component: UncontrolledAccordion,
};

const Template: Story<UncontrolledAccordionPropsType> = (args) =>
  <UncontrolledAccordion {...args}/>;

export const AccordionChanges = Template.bind({});
AccordionChanges.args = {
  titleValue: "Click Me",
};