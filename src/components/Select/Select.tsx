import {FC, useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css";

export type SelectItemType = {
    title: string
    value: any
}

export type SelectProps = {
    value?: any
    items: SelectItemType[]
    onOptionChange: (value: any) => void
}

export const Select: FC<SelectProps> = (props) => {
    const [activeMode, setActiveMode] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState<any>(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    },[props.value]);

    const defaultValue = selectedItem ? selectedItem.title : "- Select an item -";
    const getValidClassNameForOption = (el: SelectItemType) => (
        hoveredItem === el ?
            `${styles.selectOption} ${styles.selected}`
            : styles.selectOption
    );

    const toggleItems = () => setActiveMode(!activeMode);
    const onItemClickHandler = (value: any) => {
        props.onOptionChange(value);
        toggleItems();
    };
    const onItemHoverHandler = (value: any) => {
        setHoveredElementValue(value)
    }
    const selectOnKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            for(let i = 0; i < props.items.length; i++) {
                if(props.items[i].value === hoveredElementValue) {
                    const applicantElement = e.key === "ArrowDown" ?
                        props.items[i + 1] : props.items[i - 1];
                    if(applicantElement) {
                        props.onOptionChange(applicantElement.value);
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onOptionChange(props.items[0].value);
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActiveMode(false);
        }
    };

    return (
        <div className={styles.selectWrap} onKeyUp={selectOnKeyUpHandler} tabIndex={0}>
            <div
                className={styles.selectValue}
                onClick={toggleItems}
            >
                {defaultValue}
            </div>
            {activeMode &&
            <div className={styles.selectOptions}>
                {props.items.map((i, index) => (
                    <div
                        key={index}
                        className={getValidClassNameForOption(i)}
                        onMouseEnter={() => onItemHoverHandler(i.value)}
                        onClick={() => onItemClickHandler(i.value)}
                    >
                        {i.title}
                    </div>
                ))}
            </div>}
        </div>

    );
}