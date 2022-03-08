import React from "react";
import {RatingValueType} from "../../App";

type StarPropsType = {
  selected: boolean
  value: RatingValueType
  setValue: (value: RatingValueType) => void
  starColor?: string
}

const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  const starStyle = {
    color: props.starColor ? props.starColor : "black",
  };

  return (
    <span onClick={() => props.setValue(props.value)} style={starStyle}>
      {props.selected ? <b> Star</b> : " Star"}
    </span>
  );
}

export type RatingPropsType = {
  value: RatingValueType
  setRatingValue: (ratingValue: RatingValueType) => void
  starColor?: string
};

export const Rating = (props: RatingPropsType) => {
  console.log("Rating rendering");
  return (
    <div>
      <Star
        selected={props.value > 0}
        value={1}
        setValue={props.setRatingValue}
        starColor={props.starColor}
      />
      <Star
        selected={props.value > 1}
        value={2}
        setValue={props.setRatingValue}
        starColor={props.starColor}
      />
      <Star
        selected={props.value > 2}
        value={3}
        setValue={props.setRatingValue}
        starColor={props.starColor}
      />
      <Star
        selected={props.value > 3}
        value={4}
        setValue={props.setRatingValue}
        starColor={props.starColor}
      />
      <Star
        selected={props.value > 4}
        value={5}
        setValue={props.setRatingValue}
        starColor={props.starColor}
      />
    </div>
  );
}