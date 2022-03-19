import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/Select",
  component: Select,
}

const callbackAction = action("Select value changed");

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>;

export const WithoutValue = Template.bind({});
WithoutValue.args = {
  setValue: callbackAction,
  options:  [
    {value: "1", title: "Option 1"},
    {value: "2", title: "Option 2"},
    {value: "3", title: "Option 3"},
  ],
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: "2",
  setValue: callbackAction,
  options:  [
    {value: "1", title: "Option 1"},
    {value: "2", title: "Option 2"},
    {value: "3", title: "Option 3"},
  ],
};

export const ValueChanges: Story<SelectPropsType> = (args) => {
  const [value, setValue] = useState("2");

  return <Select {...args} value={value} setValue={setValue}/>;
};
ValueChanges.args = {
  options: [
    {value: "1", title: "Option 1"},
    {value: "2", title: "Option 2"},
    {value: "3", title: "Option 3"},
  ],
};