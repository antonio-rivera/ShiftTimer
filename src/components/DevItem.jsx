import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { devItems } from "../store/LeftAtoms";
import dayjs from "dayjs";
//Styles
const Container = styled.div`
  width: 50%;
  min-height: 35%;
  background-color: black;
  border: 0.5px solid grey;
  color: #89caff;
  padding-bottom: 20px;
  display: grid;
  border-radius: 10px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 20%);
  align-items: center;
  justify-items: center;
  margin-bottom: 50px;
  box-shadow: 0 0 1px 1px grey;
`;

const Input = styled.input`
  width: 40%;
  text-align: center;
  height: 60%;
  background-color: transparent;
  border: 1px solid grey;
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const ItemSpan = styled.span`
  color: white;
`;

const ItemTitle = styled.input`
  width: 99%;
  grid-column: span 2;
  background-color: transparent;
  outline: none;
  border: none;
  padding-bottom: 4px;
  border-bottom: 1px solid grey;
  text-align: center;
  color: #aad9ff;
  font-size: 16px;
  font-weight: bolder;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #89caff4e;
  }
`; ///////End Styles////////////

export default function DevItem({ id }) {
  const [items, setItems] = useAtom(devItems);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  //Funtion that manages all state changes for the devops item
  function handleChange(event) {
    const { name, value } = event.target;
    const newMap = items;
    let modItem = items.get(id);
    modItem[`${name}`] = value;
    if (name === "completed") modItem["timestamp"] = dayjs().format("h:mm A");

    //Compute the remaining time
    let { completed, estimate } = modItem;
    if (completed && estimate)
      modItem["remaining"] = parseFloat(estimate) - parseFloat(completed);
    else {
      modItem["remaining"] = null;
    }

    newMap[id] = modItem;

    setItems(new Map(newMap));
  }

  //Grab props that should be displayed/rendered
  let { timestamp, remaining } = items.get(id);

  return (
    <Container>
      <ItemTitle
        type="text"
        name="title"
        placeholder="Title goes here"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="completed">Completed: </label>
      <Input type="text" name="completed" onChange={(e) => handleChange(e)} />
      <label htmlFor="remaining">Remaining: </label>
      <ItemSpan>{remaining}</ItemSpan>
      <label htmlFor="estimate">Original Estimate:</label>
      <Input type="text" name="estimate" onChange={(e) => handleChange(e)} />
      <label htmlFor="lastupdate">Last Updated: </label>
      <ItemSpan>{timestamp}</ItemSpan>
    </Container>
  );
}
