import React from "react";
import styled from "styled-components";

//////////////Styles////////////////////////////////
const Wrapper = styled.div`
  background: rgb(252, 176, 69);
  background: linear-gradient(
    180deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(253, 89, 29, 1) 100%
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
      <Title>Timesheet</Title>
    </Wrapper>
  );
}
