import React, { useState } from "react";

const list = [
  {
    id: 1,
    name: "Table of 1",
  },
  {
    id: 2,
    name: "Table of 2",
  },
  {
    id: 3,
    name: "Table of 3",
  },
  {
    id: 4,
    name: "Table of 4",
  },
  {
    id: 6,
    name: "Table of 6",
  },
  {
    id: 7,
    name: "Table of 7",
  },
  {
    id: 8,
    name: "Table of 8",
  },
  {
    id: 9,
    name: "Table of 9",
  },
  {
    id: 10,
    name: "Table of 9",
  },
];

function MathsTable() {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const createTable = (multiplier) => {
    const tableData = [];
    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
      tableData.push({
        multiplicand: multiplicand,
        product: multiplicand * multiplier,
      });
    }
    setData(tableData);
    setActiveButton(multiplier);
  };

  return (
    <div className="main">
      <div className="buttons">
        {list.map((each) => (
          <>
            <button
              key={each.id}
              onClick={() => createTable(each.id)}
              className={activeButton === each.id ? "active" : ""}
            >
              {each.id}
            </button>
          </>
        ))}
      </div>
      <div>
        <h2>Maths Tables Generator</h2>
      </div>
      <div className="tab">
        {data.map((row, index) => (
          <p key={index}>
            <span>
              {row.product / row.multiplicand} X {row.multiplicand} =
            </span>
            <span> {row.product}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
// 1 X 1 = 1
export default MathsTable;
