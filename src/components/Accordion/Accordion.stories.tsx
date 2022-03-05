import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const actionCallback = action("Mode changed");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const AccordionCollapsed = Template.bind({});
AccordionCollapsed.args = {
  titleValue: "Menu",
  collapsed: true,
  setCollapsed: actionCallback,
};

export const AccordionNotCollapsed = Template.bind({});
AccordionNotCollapsed.args = {
  titleValue: "Users",
  collapsed: false,
  setCollapsed: actionCallback,
};

export const AccordionChanges: Story<AccordionPropsType> = (args) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      {...args}
      collapsed={collapsed}
      setCollapsed={() => setCollapsed(!collapsed)}
    />
  );
};
AccordionChanges.args = {
  titleValue: "Click Me",
};