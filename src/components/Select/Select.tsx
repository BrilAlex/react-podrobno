import {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css";

type ItemType = {
  value: any
  title: string
};

export type SelectPropsType = {
  value?: any
  setValue: (value: any) => void
  options: ItemType[]
};

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState<boolean>(false);
  const [hoveredOptionValue, setHoveredOptionValue] = useState(props.value);

  const selectedOption = props.options.find(o => o.value === props.value);
  const hoveredOption = props.options.find(o => o.value === hoveredOptionValue);
  const selectHeading = selectedOption ? selectedOption.title : "Select an option";

  useEffect(() => {
    setHoveredOptionValue(props.value);
  }, [props.value]);

  const toggleOptions = () => setActive(!active);
  const onOptionClick = (value: any) => {
    props.setValue(value);
    toggleOptions();
  };
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      for (let i = 0; i < props.options.length; i++) {
        if (props.options[i].value === hoveredOptionValue) {
          const optionToSelect = e.key === "ArrowDown"
            ? props.options[i + 1]
            : props.options[i - 1];
          if (optionToSelect) {
            props.setValue(optionToSelect.value);
            return;
          }
        }
      }
      if (!selectedOption) {
        props.setValue(props.options[0].value);
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
      <div className={s.selectedOption} onClick={toggleOptions}>
        {selectHeading}
      </div>
      {
        active &&
        <div className={s.options}>
          {props.options.map((o, i) =>
            <div
              key={i}
              className={`${s.option}${o === hoveredOption ? " " + s.selected : ""}`}
              onClick={() => onOptionClick(o.value)}
              onMouseEnter={() => setHoveredOptionValue(o.value)}
            >
              {o.title}
            </div>
          )}
        </div>
      }
    </div>
  );
};