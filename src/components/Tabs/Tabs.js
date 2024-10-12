import Tab from "./Tab";
import "./tabs.css";
function Tabs() {
  const data = [
    { id: "1", tab: "tab 1", content: "bla bla bla 1" },
    { id: "2", tab: "tab 2", content: "bla bla bla 2" },
    { id: "3", tab: "tab 3", content: "bla bla bla 3" },
  ];
  return (
    <div className="tabs">
      <Tab data={data} />
    </div>
  );
}

export default Tabs;
