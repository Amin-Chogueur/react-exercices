import "./style.css";
import { sideData } from "./side-data";
import Links from "./Links";
function TreeNav() {
  return (
    <div className="tree">
      <Links data={sideData} />
    </div>
  );
}

export default TreeNav;
