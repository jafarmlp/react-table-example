import * as dataGenerator from "./common";
import { textFilter } from 'react-bootstrap-table2-filter';
export const tableConfig = [ {
  header : "Simple Table",
  data: dataGenerator.productsGenerator(),
  columns: [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ],
},
{
  header : "Table with Sort",
  data: dataGenerator.jobsGenerator(),
  columns: [
    {
      dataField: "id",
      text: "Product ID",
      sort : true
    },
    {
      dataField: "name",
      text: "Product Name",
      sort : true
    },
    {
      dataField: "price",
      text: "Product Price",
      sort : true
    },
  ],
},
{
  pagination: {
    // pageStartIndex: 0,
    sizePerPage: 3,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  },
  header : "Table with pagination",
  data: dataGenerator.todosGenerator(),
  columns: [
    {
      dataField: "id",
      text: " ID",
      sort : true
    },
    {
      dataField: "todo",
      text: "Details",
      sort : true
    },
    {
      dataField: "done",
      text: "Status",
      sort : true
    },
  ],

},
{
  header : "Table with Multi Selection",
  pagination: {
    // pageStartIndex: 0,
    sizePerPage: 3,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  },
  selectRow :  {
    mode : 'checkbox',
    clickToSelect : true,
    selected: [1, 3],
    style: { backgroundColor: '#c8e6c9' }
  },
  data: dataGenerator.todosGenerator(),
  columns: [
    {
      dataField: "id",
      text: " ID",
      sort : true,

    },
    {
      dataField: "todo",
      text: "Details",
      sort : true
    },
    {
      dataField: "done",
      text: "Status",
      sort : true
    },
  ],
},
{
  header : "Table with Column Search",
  pagination: {
    // pageStartIndex: 0,
    sizePerPage: 3,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  },
  selectRow :  {
    mode : 'checkbox',
    clickToSelect : true,
    selected: [1, 3],
    style: { backgroundColor: '#c8e6c9' }
  },
  data: dataGenerator.todosGenerator(),
  columns: [
    {
      dataField: "id",
      text: " ID",
      sort : true,

    },
    {
      dataField: "todo",
      text: "Details",
      sort : true,
      filter: textFilter()
    },
    {
      dataField: "done",
      text: "Status",
      sort : true,
      filter: textFilter()
    },
  ],
}
];
