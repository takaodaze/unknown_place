import React, { useEffect, useRef } from "react";
import { Outer } from "./components/Outer";
import { TextBoard } from "./components/TextBoard";

function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);
  return (
    <Outer>
      <TextBoard textAreaRef={textAreaRef} />;
    </Outer>
  );
}

export default App;
