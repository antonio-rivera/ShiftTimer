import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { sheetItems } from "../store/RightAtoms";

const Container = styled.div`
  width: 90%;
  height: 17.5%;
  border-bottom: 1px solid #888888;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #dfdfdf;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 40%;
  padding: 20px 0 0 10px;
`;

const ItemTitle = styled.input`
  font-weight: bold;
  font-size: 24px;
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
  flex-basis: 40%;
  justify-content: start;
  align-items: center;
`;

const TimeInput = styled.input`
  width: 25%;
  text-align: center;
  height: 50%;
  background-color: transparent;
  color: black;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #888888;
  box-shadow: 1px 5px 9px #888888;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #00000068;
  }
`;

export default function SheetItem() {
  //Array of sheet items
  const [Items, setItems] = useAtom(sheetItems);

  return (
    <Container>
      <TextContainer>
        <ItemTitle placeholder="Entry Title" />
        <p>Decription</p>
      </TextContainer>

      <TimeContainer>
        <TimeInput placeholder="0:00" />
      </TimeContainer>
    </Container>
  );
}
