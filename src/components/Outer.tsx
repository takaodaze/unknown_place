import styled from "@emotion/styled";
import React, { FC } from "react";

export const Outer: FC = ({ children }) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Frame height={height} width={width}>
      {children}
    </Frame>
  );
};

const Frame = styled.div((props: { width: number; height: number }) => ({
  boxSizing: "border-box",
  padding: "40px",
  width: `${props.width}`,
  height: `${props.height}px`,
}));
