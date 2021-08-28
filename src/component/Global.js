import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-dom";
export const Global = ({ list, execut }) => {
  const [TacheName, setTacheName] = useState();
  const history = useHistory();
  function handelclick(identifient) {
    history.push(`/detail/${identifient}`);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let identifient = nanoid();
          let newTache = { identifient, TacheName };
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
            <li onClick={() => handelclick(elt.identifient)}>
              {elt.TacheName}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
