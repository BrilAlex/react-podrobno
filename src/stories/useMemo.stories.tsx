import React, {useMemo, useState} from "react";
import {Select, SelectProps} from "../components/Select/Select";

export default {
    title: "useMemo demo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA*i;
        }
        return resultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </>;
}

const Users = (props: {users: Array<string>}) => {
    console.log("Users rendered");
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Table = React.memo(Users);

export const HelpForReactMemoExample = () => {
    console.log("HelpForReactMemoExample rendered");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

    const usersForTable = useMemo(() =>
        users.filter(u => u.toLowerCase().indexOf("a") > -1), [users]);

    const addUser = () => {
        setUsers([...users, "Sveta " + new Date().getTime()]);
    }

    return <>
        <button onClick={() => setCounter(counter => counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        {counter}
        <Table users={usersForTable}/>
    </>
}

type CityType = {
    title: string,
    countryCode: string
    population: number
    value: number
}

const SelectWrap = (props: SelectProps) => {
    console.log("Select rendered");
    return props.value
        ? <Select items={props.items} value={props.value} onOptionChange={props.onOptionChange}/>
        : <Select items={props.items} onOptionChange={props.onOptionChange}/>;
}

const SelectContainer = React.memo(SelectWrap);

export const SelectAndUseMemoExample = () => {
    console.log("SelectAndUseMemoExample rendered");
    const [counter, setCounter] = useState<number>(0);
    const [cities, setCities] = useState<CityType[]>([
        {title: "Minsk", countryCode: "BY", population: 2500000, value: 1},
        {title: "Brest", countryCode: "BY", population: 900000, value: 2},
        {title: "Moscow", countryCode: "RU", population: 15000000, value: 3},
        {title: "Kiev", countryCode: "UA", population: 1500000, value: 4},
        {title: "SanctPeterburg", countryCode: "RU", population: 10000000, value: 5},
        {title: "Grodno", countryCode: "BY", population: 800000, value: 6},
        {title: "Lvov", countryCode: "UA", population: 1000000, value: 7}
    ]);
    const [optionValue1, setOptionValue1] = useState<any>(1);
    const [optionValue2, setOptionValue2] = useState<any>(1);
    const [optionValue3, setOptionValue3] = useState<any>(null);

    const addCity = () => {
        setCities([
            ...cities,
            {title: "London", countryCode: "UK", population: 10000000, value: 8}
        ]);
    }

    const citiesFromBY = useMemo(() =>
        cities.filter(c => c.countryCode === "BY"), [cities]);
    const citiesWithM = useMemo(() =>
        cities.filter(c => c.title[0] === "M"), [cities]);
    const citiesWithPopulation10M = useMemo(() =>
        cities.filter(c => c.population >= 10000000), [cities]);

    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter => counter + 1)}>+</button>
                {counter}
                <br/>
                <button onClick={addCity}>Add City</button>
            </div>
            <div>
                <SelectContainer
                    items={citiesFromBY}
                    value={optionValue1}
                    onOptionChange={setOptionValue1}
                />
                <SelectContainer
                    items={citiesWithM}
                    value={optionValue2}
                    onOptionChange={setOptionValue2}
                />
                <SelectContainer
                    items={citiesWithPopulation10M}
                    value={optionValue3}
                    onOptionChange={setOptionValue3}
                />
            </div>
        </div>
    );
}