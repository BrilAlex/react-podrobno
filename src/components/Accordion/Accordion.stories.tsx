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
  items: [],
  onItemClick: action("Item was clicked"),
};

export const AccordionNotCollapsed = Template.bind({});
AccordionNotCollapsed.args = {
  titleValue: "What to Learn",
  collapsed: false,
  setCollapsed: actionCallback,
  items: [
    {value: 1, title: "HTML"},
    {value: 2, title: "CSS"},
    {value: 3, title: "JavaScript"},
    {value: 4, title: "TypeScript"},
    {value: 5, title: "React"},
  ],
  onItemClick: action("Item was clicked"),
};

export const AccordionChanges: Story<AccordionPropsType> = (args) => {
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
AccordionChanges.args = {
  titleValue: "Click Me",
  items: [
    {value: 1, title: "HTML"},
    {value: 2, title: "CSS"},
    {value: 3, title: "JavaScript"},
    {value: 4, title: "TypeScript"},
    {value: 5, title: "React"},
  ],
};