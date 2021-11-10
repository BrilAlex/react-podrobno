import {Clock} from "./Clock";

export default {
    title: "Components/Clock",
    component: Clock,
}

export const DigitalClockStory = () => {
    return <Clock mode={"digital"}/>
}

export const AnalogClockStory = () => {
    return <Clock mode={"analog"}/>
}