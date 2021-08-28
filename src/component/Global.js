import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Global = ({ list, execut }) => {
  const [TacheName, setTacheName] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let id = nanoid();
          let newTache = { id, TacheName };
          setTacheName("");
          return execut([...list, newTache]);
        }}
      >
        <input
          onChange={(e) => setTacheName(e.target.value)}
          value={TacheName}
        />

        <ul>
          {list.map((elt) => (
            <li>{elt.TacheName}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};
