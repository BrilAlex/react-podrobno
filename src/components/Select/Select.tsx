import s from "./Select.module.css";
import {useState} from "react";

type ItemType = {
  value: any
  title: string
};

export type SelectPropsType = {
  value: string
  setValue: (value: any) => void
  options: ItemType[]
};

export const Select = (props: SelectPropsType) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onClickHandler = () => {
    setExpanded(!expanded);
  };

  const changeOption = (value: string) => {
    const optionTitle = props.options.find(o => o.value === value);
    if (optionTitle) {
      props.setValue(optionTitle.title);
      setExpanded(false);
    }
  };

  return (
    <div className={s.selectContainer}>
      <div onClick={onClickHandler} className={s.selected}>{props.value}</div>
      {expanded &&
      <div className={s.options}>
        {props.options.map((o, i) => {
          const onClickHandler = () => {
            changeOption(o.value);
          };
          return (
            <div key={i} className={s.option} onClick={onClickHandler}>{o.title}</div>
          );
        })}
      </div>
      }
    </div>
  );
};