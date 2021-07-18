import React from "react";
import styled from "styled-components";

//////////////Styles////////////////////////////////
const Wrapper = styled.div`
  background: rgb(0, 110, 187);
  background: linear-gradient(
    180deg,
    rgba(0, 110, 187, 1) 0%,
    rgba(0, 129, 187, 1) 50%,
    rgba(0, 161, 187, 1) 100%
  );
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
/////////////////////////////////////////////////////

export default function LeftPage() {
  return (
    <Wrapper>
      <Title>Devops Items</Title>
    </Wrapper>
  );
}
