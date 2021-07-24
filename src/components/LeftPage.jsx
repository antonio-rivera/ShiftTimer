import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import { devItems } from "../store/LeftAtoms";
import DevItem from "./DevItem";

//////////////Style Components////////////////////////////////
const Wrapper = styled.div`
  background: rgb(0, 110, 187);
  background: linear-gradient(
    180deg,
    rgba(0, 110, 187, 1) 0%,
    rgba(0, 129, 187, 1) 50%,
    rgba(0, 161, 187, 1) 100%
  );
  display: flex;
  flex-basis: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ItemContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  background-color: #92c353;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  position: fixed;
  bottom: 20px;
  left: 0;
  cursor: pointer;
`;

const PlusSign = styled.span`
  display: flex;
  font-size: 65px;
  align-items: center;
  height: 100%;
`;

/////////////////////////////////////////////////////

export default function LeftPage() {
  const [mapItems, setMapItems] = useAtom(devItems);
  function addItem() {
    setMapItems(
      new Map(
        mapItems.set(nanoid(), {
          title: "",
          completed: "",
          remaining: null,
          estimate: "",
          timestamp: "00:00",
        })
      )
    );
  }

  return (
    <Wrapper>
      <Title>Devops Items</Title>
      <ItemContainer>
        {[...mapItems.keys()].map((key) => (
          <DevItem key={key} id={key} />
        ))}
      </ItemContainer>
      <AddButton onClick={addItem}>
        <PlusSign>&#43;</PlusSign>
      </AddButton>
    </Wrapper>
  );
}
