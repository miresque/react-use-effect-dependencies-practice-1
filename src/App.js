import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (dataType) {
      fetch(`https://swapi.dev/api/${dataType}/`)
      .then(res => res.json())
      .then(data => setData(data.results))
    }
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data} />}
    </div>
  );
}
