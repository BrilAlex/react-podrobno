import React from "react";
import {Story} from "@storybook/react";
import {useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
  title: "Hooks/useMemo"
};

export const DifficultCountingExample: Story = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        let randomNumber = Math.random();
      }
      tempResult *= i;
    }
    return tempResult;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
    <div>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
      <hr/>
      <div>Result for A: {resultA}</div>
      <div>Result for B: {resultB}</div>
    </div>
  );
};


const Users = (props: { users: string[] }) => {
  console.log("Users rendering");
  return (
    <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  );
};

const UsersContainer = React.memo(Users);

export const ReactMemoWithUseMemoExample: Story = () => {
  console.log("ReactMemoWithUseMemoExample rendering");

  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<string[]>([
    "Alex", "Dmitri", "Karina", "Valera", "Alexander", "Svetlana"
  ]);

  const addUser = () => {
    const newUser = "Lavi";
    setUsers([...users, newUser]);
  };

  const filteredUsers = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>Add user</button>
      <div>{count}</div>
      <UsersContainer users={filteredUsers}/>
    </div>
  );
};

type CityType = {
  id: number
  countryCode: string
  cityTitle: string
  population: number
}

const CustomSelect = (props: { cities: CityType[] }) => {
  console.log("CustomSelect rendering");

  const [value, setValue] = useState("");
  const options = props.cities.map(o => ({value: o.id, title: o.cityTitle}));

  return (
    <Select value={value} setValue={setValue} options={options}/>
  );
}

const SelectContainer = React.memo(CustomSelect);

export const CustomSelectWithUseMemoExample: Story = () => {
  console.log("CustomSelectWithUseMemoExample rendering");

  const [count, setCount] = useState<number>(0);
  const [cities, setCities] = useState<CityType[]>([
    {id: 1, countryCode: "BY", cityTitle: "Minsk", population: 2000000},
    {id: 2, countryCode: "BY", cityTitle: "Brest", population: 500000},
    {id: 3, countryCode: "UK", cityTitle: "London", population: 8900000},
    {id: 4, countryCode: "US", cityTitle: "Washington, D.C.", population: 7600000},
    {id: 5, countryCode: "US", cityTitle: "Los Angeles", population: 3900000},
    {id: 6, countryCode: "UA", cityTitle: "Kiev", population: 3000000},
    {id: 7, countryCode: "UA", cityTitle: "Lvov", population: 900000},
  ]);

  const citiesFromBy =
    useMemo(() => cities.filter(c => c.countryCode === "BY"), [cities]);
  const citiesWithLInTitle =
    useMemo(() => cities.filter(c => c.cityTitle.toLowerCase().indexOf("l") > -1), [cities]);
  const citiesWith5Millions =
    useMemo(() => cities.filter(c => c.population > 5000000), [cities]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const addCity = () => {
    const newID = cities.length + 1;
    const newRandomCity = [
      {countryCode: "DE", cityTitle: "Berlin", population: 3700000},
      {countryCode: "BY", cityTitle: "Lida", population: 105000},
      {countryCode: "FR", cityTitle: "Paris", population: 2100000},
      {countryCode: "IT", cityTitle: "Rome", population: 2900000},
      {countryCode: "PT", cityTitle: "Lisbon", population: 500000},
    ][Math.floor(Math.random()*4)];
    const newCity = {id: newID, ...newRandomCity};
    setCities([...cities, newCity]);
  };

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <div>{count}</div>
      <div>
        <button onClick={addCity}>Add city</button>
        <p>Cites from Belarus:</p>
        <SelectContainer cities={citiesFromBy}/>
        <p>Cities with L Letter in title:</p>
        <SelectContainer cities={citiesWithLInTitle}/>
        <p>Cities with population greater then 5 millions:</p>
        <SelectContainer cities={citiesWith5Millions}/>
      </div>
    </div>
  );
};