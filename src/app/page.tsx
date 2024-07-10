"use client";

import { useState } from "react";

export default function Home() {
  const [num, setnum] = useState(0);
  function Increment() {
    setnum(num + 1);
  }
  return (
    <>
      <div>
        {num}
        <div>
          <button onClick={() => Increment()}>click</button>
        </div>
      </div>
    </>
  );
}
