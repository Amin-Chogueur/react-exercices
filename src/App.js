import RandomColor from "./components/Random/RandomColor";
import Stars from "./components/Star-rating/Stars";
import Tabs from "./components/Tabs/Tabs";
import TreeNav from "./components/Tree/TreeNav";
import Accordion from "./components/accordion/Accordion";
import Slider from "./components/slider/Slider";
export default function App() {
  return (
    <div className="app">
      <Accordion />
      <hr></hr>
      <Stars num={5} />
      <hr></hr>
      <RandomColor />
      <hr></hr>
      <Slider />
      <hr></hr>
      <TreeNav />
      <hr></hr>
      <Tabs />
    </div>
  );
}
