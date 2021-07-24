import React from "react";
import styled from "styled-components";

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
    line-height: 100px;
    color: #89caff4e;
  }
`;

export default function DevItem() {
  return (
    <Container>
      <ItemTitle type="text" name="title" placeholder="Title goes here" />
      <label htmlFor="completed">Completed: </label>
      <Input type="text" name="completed" />
      <label htmlFor="remaining">Remaining: </label>
      <ItemSpan>0</ItemSpan>
      <label htmlFor="estimate">Original Estimate:</label>
      <Input type="text" name="estimate" />
      <label htmlFor="lastupdate">Last Updated: </label>
      <ItemSpan>00:00</ItemSpan>
    </Container>
  );
}
