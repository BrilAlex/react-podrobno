import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/OnOff",
  component: OnOff,
};

const actionCallback = action("Mode changed");

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

export const OnMode = Template.bind({});
OnMode.args = {
  isOn: true,
  setIsOn: actionCallback,
};

export const OffMode = Template.bind({});
OffMode.args = {
  isOn: false,
  setIsOn: actionCallback,
};

export const OnOffChanges: Story<OnOffPropsType> = (args) => {
  const [isOn,setIsOn] = useState(false);
  return <OnOff {...args} isOn={isOn} setIsOn={setIsOn}/>;
};