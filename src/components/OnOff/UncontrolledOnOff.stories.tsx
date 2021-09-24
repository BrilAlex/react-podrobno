import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

const getControlCategory = (catName: string) => ({
    table: {
        category: catName
    }
});

export default {
    title: "Components/OnOff Uncontrolled",
    component: UncontrolledOnOff,
    argType: {
        onBackGroundColor: {
            control: "color",
            ...getControlCategory("Colors")
        },
        offBackGroundColor: {
            control: "color",
            ...getControlCategory("Colors")
        }
    }
};

const callbackAction = action("Mode changed");

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => (
    <UncontrolledOnOff {...args}/>
);

export const ChangingMode = Template.bind({});
ChangingMode.args = {
    callback: callbackAction
}