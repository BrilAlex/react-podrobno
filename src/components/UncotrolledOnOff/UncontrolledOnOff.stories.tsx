import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/Uncontrolled OnOff",
  component: UncontrolledOnOff,
};

const actionCallback = action("Mode changed");

const Template: Story<UncontrolledOnOffPropsType> = (args) =>
  <UncontrolledOnOff {...args}/>;

export const OnOffChanges = Template.bind({});
OnOffChanges.args = {
  defaultIsOn: true,
  setIsOnValue: actionCallback,
};