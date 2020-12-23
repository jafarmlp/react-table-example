import BootstrapTable from "react-bootstrap-table-next";
const Table = ({ config }) => {
  return (
    <BootstrapTable bootstrap4 keyField="id" data={config.data} columns={config.columns}  defaultSorted={ config.defaultSorted }  />
  );
};

export default Table;
