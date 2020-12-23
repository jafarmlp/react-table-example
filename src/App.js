import "./App.css";
import Table from "./table/Table";
import { tableConfig } from "./conf/table-config";

function App() {
  
  const createTables = () => {
    return tableConfig.map((config) => {
      return (
        <div>
          <h4>{config.header}</h4>
          <Table config={config} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">React Bootstrap Table Example</h2>
      </div>
      {createTables()}
    </div>
  );
}

export default App;
