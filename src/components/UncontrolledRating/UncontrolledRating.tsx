import React, {useState} from "react";

type StarPropsType = {
  selected: boolean
  callback: () => void
  starColor?: string
}

const Star = (props: StarPropsType) => {
  console.log("Uncontrolled Star rendering");
  const starStyle = {
    color: props.starColor ? props.starColor : "black",
  };

  return (
    <span onClick={props.callback} style={starStyle}>
      {props.selected ? <b> Star</b> : " Star"}
    </span>
  );
}

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type UncontrolledRatingPropsType = {
  defaultValue?: RatingValueType;
  setRatingValue: (ratingValue: RatingValueType) => void
  starColor?: string
};

export const UncontrolledRating = (props: UncontrolledRatingPropsType) => {
  console.log("Uncontrolled Rating rendering");
  const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

  const onClickHandler = (value: RatingValueType) => {
    setValue(value);
    props.setRatingValue(value);
  };

  return (
    <div>
      <Star selected={value > 0} callback={() => onClickHandler(1)} starColor={props.starColor}/>
      <Star selected={value > 1} callback={() => onClickHandler(2)} starColor={props.starColor}/>
      <Star selected={value > 2} callback={() => onClickHandler(3)} starColor={props.starColor}/>
      <Star selected={value > 3} callback={() => onClickHandler(4)} starColor={props.starColor}/>
      <Star selected={value > 4} callback={() => onClickHandler(5)} starColor={props.starColor}/>
    </div>
  );
}