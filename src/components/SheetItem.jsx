import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { sheetItems } from "../store/RightAtoms";

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

const ConnectButton = styled.button`
  width: fit-content;
  text-align: center;
  background-color: transparent;
  color: #505050;
  font-size: 15px;
  height: 30px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #888888;
  box-shadow: 1px 1px 1px #888888;
`;

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

export default function SheetItem() {
  //Array of sheet items
  const [Items, setItems] = useAtom(sheetItems);

  return (
    <Container>
      <TextContainer>
        <ItemTitle placeholder="Entry Title" />
      </TextContainer>
      <TimeContainer>
        <TimeInput placeholder="0:00" />
        <ConnectButton>Connect</ConnectButton>
        <TimeLabel>Last Updated: 0:00</TimeLabel>
      </TimeContainer>
      <DescInput placeholder="Description..." maxLength="75" />
    </Container>
  );
}
