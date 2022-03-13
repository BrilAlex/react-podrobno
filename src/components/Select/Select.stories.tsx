import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
  title: "Components/Select",
  component: Select,
}

export const SelectChangesValue: Story<SelectPropsType> = (args) => {
  const [value, setValue] = useState<string>("Select option");

  return <Select {...args} value={value} setValue={setValue}/>;
};
SelectChangesValue.args = {
  options: [
    {value: "1", title: "Option 1"},
    {value: "2", title: "Option 2"},
    {value: "3", title: "Option 3"},
  ]
};