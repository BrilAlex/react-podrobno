import React, {useState} from "react";
import {RatingValueType} from "../../App";

type UncontrolledRatingProps ={
    /*
    * Optional color for rating stars
    */
    starsColor?: string
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={props.callBack}>
        {props.selected ? <b>star </b> : "star "}
    </span>;
}

export function UncontrolledRating(props: UncontrolledRatingProps) {
    console.log("Rating rendering");
    const starsColor = {
        color: props.starsColor ? props.starsColor : "black"
    };

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div style={starsColor}>
            <Star selected={ratingValue > 0} callBack={() => setRatingValue(1)}/>
            <Star selected={ratingValue > 1} callBack={() => setRatingValue(2)}/>
            <Star selected={ratingValue > 2} callBack={() => setRatingValue(3)}/>
            <Star selected={ratingValue > 3} callBack={() => setRatingValue(4)}/>
            <Star selected={ratingValue > 4} callBack={() => setRatingValue(5)}/>
        </div>
    );
}