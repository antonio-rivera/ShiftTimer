import React from "react";
import styled from "styled-components";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";
import { nanoid } from "nanoid";
import { Provider } from "jotai";

//Styles
const Box = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-grow: 1;
  height: 100vh;
`;

function App() {
  return (
    <Provider>
      <Box>
        <LeftPage />
        <RightPage />
      </Box>
    </Provider>
  );
}

export default App;
