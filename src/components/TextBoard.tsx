import styled from "@emotion/styled";
import React, { useState } from "react";

export const TextBoard = () => {
  const [content, setContent] = useState("");
  return (
    <TextArea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      autoFocus
    />
  );
};

const TextArea = styled.textarea({
  width: "100%",
  height: "100%",
  background: "inherit",
  border: "none",
  ":focus": {
    outline: "none",
  },
  color: "#fff",
  fontSize: "22px",
  lineHeight: "200%",
  resize: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});
