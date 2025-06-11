import PivotTable from "./components/PivotTable";
import FileUpload from "./components/FileUpload"
import Sidebar from "./components/SideBar"
import "./index.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);
  const [fieldTypes, setFieldTypes] = useState({});
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [values, setValues] = useState([]);
  const [fileName, setFileName] = useState(null);

  return (
    <div className="main-container">
      <div className="pivot-table">
        <h1>Pivot Table</h1>

        <FileUpload
          data={data}
          setData={setData}
          setFields={setFields}
          setFieldTypes={setFieldTypes}
          setRows={setRows}
          setColumns={setColumns}
          setValues={setValues}
          setFileName={setFileName}
          fileName={fileName}
        />

        {data.length > 0 && (
          <PivotTable
            data={data}
            rows={rows}
            columns={columns}
            values={values}
            fieldTypes={fieldTypes}
          />
        )}
      </div>

      <Sidebar
        fields={fields}
        rows={rows}
        columns={columns}
        values={values}
        setRows={setRows}
        setColumns={setColumns}
        setValues={setValues}
        fieldTypes={fieldTypes}
      />
    </div>
  );
};

export default App;
