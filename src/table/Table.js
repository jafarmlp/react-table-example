import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
const Table = ({ config }) => {
  const initialState = {
    selected : config.selected ? config.selected : [],

  }
  const[state,setState] = React.useState(initialState);

 const  handleOnSelect = (row, isSelect) => {
   console.log(row);
    if (isSelect) {
      setState(() => ({
        selected: [...state.selected, row.id]
      }));
    } else {
      setState(() => ({
        selected: state.selected.filter(x => x !== row.id)
      }));
    }
    console.log(state);
  }

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      setState(() => ({
        selected: ids
      }));
    } else {
      setState(() => ({
        selected: []
      }));
    }
    console.log(state);
  }

  const CaptionElement = () => (
    <h3
      style={{
        borderRadius: "0.25em",
        textAlign: "center",
        color: "purple",
        border: "1px solid purple",
        padding: "0.5em",
      }}
    >
      {config.header}
    </h3>
  );

  const selectRowConfig = () => {
    return config.selectRow && {...config.selectRow, selected: state.selected,
      onSelect: handleOnSelect,
      onSelectAll: handleOnSelectAll };
  }
  return (
    <BootstrapTable
      bootstrap4on
      caption={<CaptionElement />}
      keyField="id"
      data={config.data}
      columns={config.columns}
      defaultSorted={config.defaultSorted}
      selectRow={selectRowConfig()}
      filter={ filterFactory() }
      pagination={config.pagination && paginationFactory(config.pagination)}
    />
  );
};

export default Table;
