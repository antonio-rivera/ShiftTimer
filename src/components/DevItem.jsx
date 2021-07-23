import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  background-color: transparent;
  color: white;
  border: 1px solid grey;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(5, 20%);
  align-items: center;
  justify-items: center;
  margin-bottom: 50px;
`;

export default function DevItem() {
  return (
    <Container>
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" />
      <label htmlFor="completed">Completed: </label>
      <input type="text" name="completed" />
      <label htmlFor="remaining">Remaining: </label>
      <span>0</span>
      <label htmlFor="estimate">Original Estimate</label>
      <input type="text" name="estimate" />
      <label htmlFor="lastupdate">Last Updated: </label> <span>00:00</span>
    </Container>
  );
}
