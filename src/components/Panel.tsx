import styled from "@emotion/styled";
import React, { FC } from "react";

export const Panel: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div({
  padding: "20px",
  color: "#fff",
  background: "#1a1a1a",
  borderRadius: "10px",
});
