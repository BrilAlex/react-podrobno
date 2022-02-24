import React from "react";
import {RatingValueType} from "../../App";

type StarPropsType = {
  selected: boolean
  value: RatingValueType
  setValue: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  return (
    <span onClick={() => props.setValue(props.value)}>
      {props.selected ? <b> Star</b> : " Star"}
    </span>
  );
}

type RatingPropsType = {
  value: RatingValueType
  setRatingValue: (ratingValue: RatingValueType) => void
};

export const Rating = (props: RatingPropsType) => {
  console.log("Rating rendering");
  return (
    <div>
      <Star selected={props.value > 0} value={1} setValue={props.setRatingValue}/>
      <Star selected={props.value > 1} value={2} setValue={props.setRatingValue}/>
      <Star selected={props.value > 2} value={3} setValue={props.setRatingValue}/>
      <Star selected={props.value > 3} value={4} setValue={props.setRatingValue}/>
      <Star selected={props.value > 4} value={5} setValue={props.setRatingValue}/>
    </div>
  );
}