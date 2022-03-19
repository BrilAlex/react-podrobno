import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const callbackAction = action("Mode changed");

const callbackActions = {
  setCollapsed: callbackAction,
  onItemClick: action("Item was clicked"),
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...callbackActions,
  titleValue: "Menu",
  collapsed: true,
  items: [],
};

export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
  ...callbackActions,
  titleValue: "What to Learn",
  collapsed: false,
  items: [
    {value: 1, title: "HTML"},
    {value: 2, title: "CSS"},
    {value: 3, title: "JavaScript"},
    {value: 4, title: "TypeScript"},
    {value: 5, title: "React"},
  ],
};

export const ModeChanges: Story<AccordionPropsType> = (args) => {
  const [collapsed, setCollapsed] = useState(false);

  const accordionItemCallback = (value: any) => {
    console.log(`Item with value ${value} was clicked`);
  };

  return (
    <Accordion
      {...args}
      collapsed={collapsed}
      setCollapsed={() => setCollapsed(!collapsed)}
      onItemClick={accordionItemCallback}
    />
  );
};
ModeChanges.args = {
  titleValue: "Click Me",
  items: [
    {value: 1, title: "HTML"},
    {value: 2, title: "CSS"},
    {value: 3, title: "JavaScript"},
    {value: 4, title: "TypeScript"},
    {value: 5, title: "React"},
  ],
};