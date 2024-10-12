import { useState } from "react";
import Links from "./Links";

function Link({ data }) {
  const [showChild, setShowChild] = useState(false);
  function handleShowChild() {
    setShowChild((showChild) => !showChild);
  }

  return (
    <li>
      <div>
        <p>{data.lable}</p>
        {data.children ? (
          <button onClick={handleShowChild}>{showChild ? "-" : "+"}</button>
        ) : null}
      </div>

      {data.children && showChild ? <Links data={data.children} /> : null}
    </li>
  );
}

export default Link;
