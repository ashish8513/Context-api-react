import React, { useRef } from "react";

const Counts = () => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <div>
        <p>Nothing changed here but I've now rendered</p>
        <span>{renderCount.current++} time(s)</span>
      </div>
    </>
  );
};
export default React.memo(Counts);
