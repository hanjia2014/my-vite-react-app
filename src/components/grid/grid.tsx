import "primeflex/primeflex.css";
import "./grid.scss";

const Grid = () => {
  return (
    <div className="App flex flex-column flex-none">
      <div className="yn-page-header">Header</div>
      <div id="content" className="flex flex-auto">
        <div id="left" className="flex-none" style={{ width: "20em" }}>
          {`ColContent `.repeat(200)}
        </div>
        <div id="middle" className="flex-1"></div>
        <div id="right" className="flex-0" style={{ width: "20em" }}></div>
      </div>
    </div>
  );
};

export default Grid;
