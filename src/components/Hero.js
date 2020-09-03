import React from "react";

export default function Hero({children}) {
  return <div className="hero">
    <div>
      <h1>think, code, deploy</h1>
      <p>embrace your choices - we do</p>
      {children}
    </div>
  </div>;
}
