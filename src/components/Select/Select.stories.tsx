import React, {useState} from "react";
import {Select, SelectItemType, SelectProps} from "./Select";
import {Story} from "@storybook/react";

export default {
    title: "Components/Custom Select",
    component: Select
}

const items: SelectItemType[] = [
    {title: "Moscow", value: 1},
    {title: "Minsk", value: 2},
    {title: "Kiev", value: 3}
];



export const WithValue: Story<SelectProps> = (args) => {
    const [optionValue, setOptionValue] = useState<any>(2);
    return <Select
        {...args}
        value={optionValue}
        onOptionChange={setOptionValue}
    />;
};
WithValue.args = {
    items: items
}

export const WithoutValue: Story<SelectProps> = (args) => {
    const [optionValue, setOptionValue] = useState<any>(null);
    return <Select
        {...args}
        value={optionValue}
        onOptionChange={setOptionValue}
    />;
};
WithoutValue.args = {
    items: items
}