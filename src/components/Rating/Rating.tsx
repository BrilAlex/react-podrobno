import React from "react";
import {RatingValueType} from "../../App";

export type RatingPropsType = {
    value: RatingValueType
    callback: (value: RatingValueType) => void
    /*
    * Optional color of rating stars
    */
    starColor?: string
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    callback: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={() => props.callback(props.value)}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    const starsColor = {
        color: props.starColor ? props.starColor : "black"
    }
    return (
        <div style={starsColor}>
            <Star selected={props.value > 0} value={1} callback={props.callback}/>
            <Star selected={props.value > 1} value={2} callback={props.callback}/>
            <Star selected={props.value > 2} value={3} callback={props.callback}/>
            <Star selected={props.value > 3} value={4} callback={props.callback}/>
            <Star selected={props.value > 4} value={5} callback={props.callback}/>
        </div>
    );
}