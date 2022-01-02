import styled from "@emotion/styled";
import React, { useState } from "react";

type Props = {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
};

export const TextBoard = (props: Props) => {
  const [content, setContent] = useState("");
  return (
    <TextArea
      ref={props.textAreaRef}
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

const TextArea = styled.textarea({ width: "100%", height: "100%" });
