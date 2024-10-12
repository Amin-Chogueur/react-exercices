import { useState } from "react";

function Tab({ data }) {
  const [currentTab, setCurrentTab] = useState(0);
  function handleClickTab(i) {
    setCurrentTab(i);
  }

  return (
    <>
      <div className="tab">
        {data.map((item, i) => (
          <p
            className={currentTab === i ? "active-tab" : "unActive"}
            onClick={() => handleClickTab(i)}
          >
            {item.tab}
          </p>
        ))}
      </div>
      <div>{data[currentTab].content}</div>
    </>
  );
}

export default Tab;
