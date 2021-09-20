import React, {useState} from "react";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {AccordionItemType} from "../../App";

export default {
    title: "Components/Accordion",
    component: Accordion
} as Meta;

const callbackAction = action("Accordion mode changed");
const callbackProps = {
    accordionTitleCallback: callbackAction,
    accordionItemCallback: action("Some item was clicked")
};

const accordionItems: AccordionItemType[] = [
    {id: 1, name: "Dimych", value: "Dmitry"},
    {id: 2, name: "Natasha", value: "Dimych wife"},
    {id: 3, name: "Sveta", value: "mentor Svetlana"},
    {id: 3, name: "Viktor", value: "mentor Viktor"},
    {id: 4, name: "Igor", value: "mentor Igor"},
    {id: 5, name: "Alex", value: "student"}
];

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const Collapsed = Template.bind({});
Collapsed.args = {
    ...callbackProps,
    titleValue: "Menu",
    items: [],
    collapsed: true,
}

export const Uncollapsed = Template.bind({});
Uncollapsed.args = {
    ...callbackProps,
    titleValue: "Menu Uncollapsed",
    items: accordionItems,
    collapsed: false,
}

export const ChangingMode: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion
        {...args}
        collapsed={collapsed}
        accordionTitleCallback={() => setCollapsed(!collapsed)}
    />
}
ChangingMode.args = {
    titleValue: "Accordion with useState",
    items: accordionItems,
    accordionItemCallback: (value) => alert(`Item with value ${value} was clicked`)
}