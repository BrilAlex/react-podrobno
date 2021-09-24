import React from 'react';

import {UncontrolledRating} from "./UncontrolledRating";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Components/Rating Uncontrolled",
    component: UncontrolledRating,
    argTypes: {
        color: {controls: "color"}
    }
} as ComponentMeta<typeof UncontrolledRating>;

export const ChangingRating: ComponentStory<typeof UncontrolledRating> = (args) => {
    return <UncontrolledRating {...args}/>
};
ChangingRating.args = {

}