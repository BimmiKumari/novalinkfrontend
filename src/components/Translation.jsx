import React from "react";
export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="Marks" onClick={doStuff}>
        ASK
      </button> 
      <h4 className="result-text">{result.length > 0 ? result : ""}</h4>
    </div>
  );
}
