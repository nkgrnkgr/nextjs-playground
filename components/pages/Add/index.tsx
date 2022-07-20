import React, { useState } from "react";
import { SometimesSuspend } from "./SometimesSuspend";

const Component: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Add:
      <div>
        <p>Showing</p>
        <React.Suspense fallback={<div>loading ...</div>}>
          <SometimesSuspend />
        </React.Suspense>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      </div>
    </div>
  );
};

export const Add = Component;
