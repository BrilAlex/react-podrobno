import React, {useState} from "react";

type StarPropsType = {
  selected: boolean
  callback: () => void
}

const Star = (props: StarPropsType) => {
  console.log("Uncontrolled Star rendering");
  if (props.selected) {
    return <span onClick={() => props.callback()}><b>Star </b></span>;
  } else {
    return <span onClick={() => props.callback()}>Star </span>;
  }
}

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export const UncontrolledRating = () => {
  console.log("Uncontrolled Rating rendering");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  return (
    <div>
      <Star selected={ratingValue > 0} callback={()=> setRatingValue(1)}/>
      <Star selected={ratingValue > 1} callback={()=> setRatingValue(2)}/>
      <Star selected={ratingValue > 2} callback={()=> setRatingValue(3)}/>
      <Star selected={ratingValue > 3} callback={()=> setRatingValue(4)}/>
      <Star selected={ratingValue > 4} callback={()=> setRatingValue(5)}/>
    </div>
  );
}