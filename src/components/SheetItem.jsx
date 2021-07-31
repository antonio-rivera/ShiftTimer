import { useAtom, atom } from "jotai";
import React from "react";
import styled from "styled-components";
import { sheetItems } from "../store/RightAtoms";
import dayjs from "dayjs";
import { connections } from "../store/CommonAtoms";
import { devItems } from "../store/LeftAtoms";
import Dropdown from "react-dropdown";
import { useEffect } from "react";

const Container = styled.div`
  position: relative;
  width: 90%;
  min-height: 15%;
  padding: 15px 0 20px 0;
  border-bottom: 1px groove #00000068;
  display: flex;
  background-color: #dfdfdf;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 50%;
  padding-left: 10px;
`;

const ItemTitle = styled.input`
  font-weight: bold;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #dfdfdf;

  &::placeholder {
    color: #00000068;
    font: bold;
  }
  &:focus {
    outline: none;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  height: 70%;
  width: 70%;
  justify-content: space-around;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 16%;
  text-align: center;
  height: 100%;
  background-color: transparent;
  color: #505050;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #888888;
  box-shadow: 1px 1px 1px #888888;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #00000068;
  }
`;

// const ConnectButton = styled.button`
//   width: fit-content;
//   text-align: center;
//   background-color: transparent;
//   color: #505050;
//   font-size: 15px;
//   height: 30px;
//   font-weight: bold;
//   border-radius: 5px;
//   border: 1px solid #888888;
//   box-shadow: 1px 1px 1px #888888;
// `;

const TimeLabel = styled.span`
  color: #505050;
  font-size: 18px;
`;

const DescInput = styled.textarea`
  background-color: transparent;
  width: 95%;
  height: 23%;
  resize: none;
  position: absolute;
  bottom: 0;
  left: 10px;
  border: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

///////////////////////////////////////

export default function SheetItem({ id }) {
  //Array of sheet items
  const [items, setItems] = useAtom(sheetItems);

  //Dev ids to connect to
  const [sheetToDev, setSheetToDev] = useAtom(connections);
  //Dev items to modify
  const [opsItems, setOpsItems] = useAtom(devItems);

  //Dev items to choose from
  const options = atom([]);
  const [getOptions, setGetOptions] = useAtom(options);

  useEffect(() => {
    if (opsItems.size) setGetOptions(getOptions.map((item) => item.title));
  }, [sheetToDev]);

  function handleChange(event) {
    const { name, value } = event.target;
    const newMap = items;
    let modItem = items.get(id);
    modItem[`${name}`] = value;

    modItem["timestamp"] = dayjs().format("h:mm A");
    newMap[id] = modItem;

    setItems(new Map(newMap));
  }

  //Grab props that should be displayed/rendered
  let { timestamp } = items.get(id);
  return (
    <Container>
      <TextContainer>
        <ItemTitle placeholder="Entry Title" />
      </TextContainer>
      <TimeContainer>
        <TimeInput
          type="text"
          name="duration"
          placeholder="0:00"
          onChange={(e) => handleChange(e)}
        />
        <Dropdown options={getOptions} placeholder="Connect" />
        <TimeLabel>Last Updated: {timestamp}</TimeLabel>
      </TimeContainer>
      <DescInput placeholder="Description..." maxLength="75" />
    </Container>
  );
}
