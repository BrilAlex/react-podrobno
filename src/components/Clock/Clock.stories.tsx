import {Clock, ClockPropsType} from "./Clock";
import {Story} from "@storybook/react";

export default {
  title: "Components/Clock",
  component: Clock,
};

const Template:Story<ClockPropsType> = (args) => <Clock {...args}/>;

export const DigitalMode = Template.bind({});
DigitalMode.args = {
  mode: "digital",
};

export const AnalogMode = Template.bind({});
AnalogMode.args = {
  mode: "analog",
};