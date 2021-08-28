import React from "react";
import { useParams } from "react-router";

export const Detail = ({ list }) => {
  let { identifient } = useParams();
  return (
    <div>
      <h6>
        {`detail :   ${
          list.find((e) => e.identifient == identifient)?.TacheName
        }`}
      </h6>
    </div>
  );
};
