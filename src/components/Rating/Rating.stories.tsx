import React, {useState} from 'react';
import {Story} from '@storybook/react';

import {Rating, RatingPropsType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../../App";

export default {
    title: "Components/Rating",
    component: Rating,
    argTypes: {
        color: {controls: "color"}
    }
};

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>;

const ratingCallback = action("Rating changed");

export const Rating0 = Template.bind({});
Rating0.args = {
    value: 0,
    callback: ratingCallback
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    callback: ratingCallback
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    callback: ratingCallback
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    callback: ratingCallback
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    callback: ratingCallback
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    callback: ratingCallback
};

export const ChangingRating: Story<RatingPropsType> = (args) => {
    const [value, setValue] = useState<RatingValueType>(0);
    return <Rating {...args} value={value} callback={setValue}/>
};
ChangingRating.args = {

}