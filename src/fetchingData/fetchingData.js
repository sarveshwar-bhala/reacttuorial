import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get() {
      let d = await axios.get("https://jsonplaceholder.typicode.com/posts");

      if (d) {
        setData(d.data);
      }
    }
    get();
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <th>Sno</th>
          <th>Title</th>
          <th>Data</th>
        </thead>
        <tbody>
          {data.map((res, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{res.title}</td>
              <td>{res.body} f</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
