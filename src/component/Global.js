import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import action from "../action/listTodo";
export const Global = () => {
  const [TacheName, setTacheName] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.List);
  function handelclick(identifient) {
    history.push(`/detail/${identifient}`);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setTacheName(e.target.value);
          }}
          value={TacheName}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            let identifient = nanoid();
            let newTache = { identifient, TacheName };

            // return execut([...list, newTache]); props
            dispatch(action.AddList(newTache));
            setTacheName("");
          }}
        >
          ADD
        </button>

        <ul>
          {list.map((elt) => (
            <div>
              <li>
                {elt.TacheName}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(action.delList(elt.identifient));
                  }}
                >
                  del
                </button>
              </li>
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
};
