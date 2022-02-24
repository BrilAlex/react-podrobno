import React, {useState} from "react";

type StarPropsType = {
  selected: boolean
  callback: () => void
}

const Star = (props: StarPropsType) => {
  console.log("Uncontrolled Star rendering");
  return (
    <span onClick={props.callback}>
      {props.selected ? <b> Star</b> : " Star"}
    </span>
  );
}

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export const UncontrolledRating = () => {
  console.log("Uncontrolled Rating rendering");
  const [value, setValue] = useState<RatingValueType>(0);

  return (
    <div>
      <Star selected={value > 0} callback={() => setValue(1)}/>
      <Star selected={value > 1} callback={() => setValue(2)}/>
      <Star selected={value > 2} callback={() => setValue(3)}/>
      <Star selected={value > 3} callback={() => setValue(4)}/>
      <Star selected={value > 4} callback={() => setValue(5)}/>
    </div>
  );
}