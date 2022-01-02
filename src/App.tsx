import styled from "@emotion/styled";
import React from "react";
import { Action } from "./components/Action";
import { Outer } from "./components/Outer";
import { TextBoard } from "./components/TextBoard";

function App() {
  return (
    <Outer>
      <Grid>
        <TextBoard />
        <Flex>
          <Action />
          <Action />
        </Flex>
      </Grid>
    </Outer>
  );
}

const Grid = styled.div({
  display: "grid",
  gap: "15px",
  gridTemplateColumns: "1fr 300px",
  height: "100%",
});

const Flex = styled.div({
  display: "flex",
  gap: "10px",
  flexDirection: "column",
});

export default App;
