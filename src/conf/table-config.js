import * as dataGenerator from "./common";
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
}];
