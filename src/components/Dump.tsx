import React, { FC } from "react";

export const Dump: FC<Record<string, any>> = function Dump(props) {
  return (
    <div
      style={{
        fontSize: 20,
        border: "1px solid #efefef",
        padding: 10,
        background: "white",
      }}
    >
      {Object.entries(props).map(([key, val]) => (
        <pre key={key}>
          <strong style={{ color: "white", background: "red" }}>
            {key} 💩
          </strong>
          {JSON.stringify(val, null, 2)}
        </pre>
      ))}
    </div>
  );
};
