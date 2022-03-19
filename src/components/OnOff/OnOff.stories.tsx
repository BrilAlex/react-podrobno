import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/OnOff",
  component: OnOff,
};

const callbackAction = action("Mode changed");

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

export const OnMode = Template.bind({});
OnMode.args = {
  isOn: true,
  setIsOn: callbackAction,
};

export const OffMode = Template.bind({});
OffMode.args = {
  isOn: false,
  setIsOn: callbackAction,
};

export const ModeChanges: Story<OnOffPropsType> = (args) => {
  const [isOn,setIsOn] = useState(false);
  return <OnOff {...args} isOn={isOn} setIsOn={setIsOn}/>;
};