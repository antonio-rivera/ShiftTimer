import { useAtom, atom } from "jotai";
import React from "react";
import styled from "styled-components";
import { sheetItems } from "../store/RightAtoms";
import dayjs from "dayjs";
import { connections } from "../store/CommonAtoms";
import { devItems } from "../store/LeftAtoms";
import Select from "react-select";
import { useEffect } from "react";

///////////////Styles////////////////////////////////
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
  background-color: #dfdfdf;
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

const ConnectButton = styled.div`
  width: 27%;
  text-align: center;
  background-color: transparent;
  color: #505050;
  font-size: 15px;
  height: fit-content;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #888888;
  box-shadow: 1px 1px 1px #888888;
`;

const TimeLabel = styled.span`
  color: #505050;
  font-size: 15px;
  background-color: #dfdfdf;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #888888;
  box-shadow: 1px 1px 1px #888888;
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

export default function SheetItem({ thisId }) {
  //Array of sheet items
  const [items, setItems] = useAtom(sheetItems);

  //Dev ids to connect to
  const [sheetToDev, setSheetToDev] = useAtom(connections);
  //Dev items to modify
  const [opsItems, setOpsItems] = useAtom(devItems);

  //Options for the dropdown to connect to the devops items
  let options = [];
  opsItems.forEach((value, key) => {
    options.push({ label: value.title, value: value.title, id: key });
  });

  //Styles for the dropdown button
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#dfdfdf",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),

    valueContainer: (base) => ({
      ...base,
      justifyContent: "center",
    }),
  };

  //Change functions

  function handleChange(event) {
    const { name, value } = event.target;
    const newMap = items;
    let modItem = items.get(thisId);
    modItem[`${name}`] = value;

    modItem["timestamp"] = dayjs().format("h:mm A");
    newMap[thisId] = modItem;
    console.log(linkedId);
    setItems(new Map(newMap));
  }

  function handleConnection({ id }) {
    //id is the id for the devops item
    //Function that handles the link between items
    if (sheetToDev.has(id)) {
      const newMap = sheetToDev;
      newMap.set(id, thisId);

      setSheetToDev(new Map(newMap));
    }
  }

  //Grab props that should be displayed/rendered
  let { timestamp } = items.get(thisId);
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
        <ConnectButton>
          <Select
            options={options}
            placeholder="Connect"
            styles={customStyles}
            onChange={(option) => handleConnection(option)}
          />
        </ConnectButton>

        <TimeLabel>Last Updated: {timestamp}</TimeLabel>
      </TimeContainer>
      <DescInput placeholder="Description..." maxLength="75" />
    </Container>
  );
}
