import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 341.5;
  height: 164.25;
`;

export default function DevItem() {
  return (
    <Container>
      <input type="text" placeholder="Item ID" />
      <input type="text" placeholder="Title for item" />
    </Container>
  );
}
