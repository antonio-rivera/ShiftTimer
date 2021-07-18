import React from "react";
import styled from "styled-components";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";

const Box = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Box>
        <LeftPage />
        <RightPage />
      </Box>
    </>
  );
}

export default App;
