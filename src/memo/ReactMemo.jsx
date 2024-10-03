import { useState } from "react";
import  Counts  from "./Counts";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <Counts/>
    </>
  );
};
