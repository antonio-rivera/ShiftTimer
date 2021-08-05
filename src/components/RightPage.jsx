import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { sheetItems } from "../store/RightAtoms";
import { nanoid } from "nanoid";
import SheetItem from "./SheetItem";

//////////////Style Components////////////////////////////////
const Wrapper = styled.div`
  background: rgb(252, 176, 69);
  background: linear-gradient(
    180deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(253, 89, 29, 1) 100%
  );
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  padding: 0;
  overflow: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #23a40c;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  position: fixed;
  top: 15px;
  right: 10px;
  cursor: pointer;
`;

const PlusSign = styled.span`
  display: flex;
  font-size: 65px;
  align-items: center;
  height: 100%;
`;
/////////////////////////////////////////////////////

export default function RightPage() {
  //Time sheet items array/state
  const [timeItems, setTimeItems] = useAtom(sheetItems);

  function addItem() {
    const newSheetItemId = nanoid();
    setTimeItems(
      new Map(
        timeItems.set(newSheetItemId, {
          title: "",
          description: "",
          duration: "",
          timestamp: "0:00",
        })
      )
    );
  }
  return (
    <Wrapper>
      <Title>Timesheet</Title>
      <ItemContainer>
        {[...timeItems.keys()].map((key) => (
          <SheetItem key={key} thisId={key} />
        ))}
      </ItemContainer>

      <AddButton onClick={addItem}>
        <PlusSign>&#43;</PlusSign>
      </AddButton>
    </Wrapper>
  );
}
