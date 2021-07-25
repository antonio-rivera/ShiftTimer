import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";
import { devItems } from "../store/LeftAtoms";
import DevItem from "./DevItem";
import { connections } from "../store/CommonAtoms";

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
  position: fixed;
  bottom: 20px;
  left: 10px;
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
  //Map to handle connections between devops items and timesheet items
  const [connect, setConnect] = useAtom(connections);
  //Array of devops items
  const [mapItems, setMapItems] = useAtom(devItems);
  function addItem() {
    const newDevItemId = nanoid();
    setMapItems(
      new Map(
        mapItems.set(newDevItemId, {
          title: "",
          completed: "",
          remaining: null,
          estimate: "",
          timestamp: "00:00",
        })
      )
    );
    //Add id of new item to list of connections so it can later connect to a sheet item
    setConnect(new Map(connect.set(newDevItemId, null)));
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
