import React from "react";
import "./App.css";
import restaurantImage from "./assets/imgs/restaurant.png";

function TableCard() {
  const tableData = [
    { id: 1, time: "1:33", orderStatus: "ordered", items: 5, statusClass: "ordered" },
    { id: 2, time: "4:35", orderStatus: "ordered", items: 4, statusClass: "warning" },
    { id: 3, time: "No Order", orderStatus: "no-order", items: 0, statusClass: "no-order" },
    { id: 4, time: "4:35", orderStatus: "ordered", items: 2, statusClass: "ordered" },
    { id: 5, time: "8:35", orderStatus: "ordered", items: 5, statusClass: "critical" },
    { id: 6, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 7, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "warning" },
    { id: 8, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 9, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 10, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 11, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 12, time: "8:35", orderStatus: "ordered", items: 4, statusClass: "no-order" },
    { id: 13, time: "1:33", orderStatus: "ordered", items: 5, statusClass: "ordered" },
    { id: 14, time: "1:33", orderStatus: "ordered", items: 5, statusClass: "ordered" },
    { id: 14, time: "1:33", orderStatus: "ordered", items: 5, statusClass: "ordered" },
    { id: 14, time: "1:33", orderStatus: "ordered", items: 5, statusClass: "ordered" }, 

  ];
  return (
    <div className="container-fluid mt-2">
      <div className="row no-gutters">
        {tableData.map((table) => (
          <div key={table.id} className="col-6 col-md-3 p-1" onClick={() => handleCardClick(table.id)}>
            <div className={`table-card ${table.statusClass}`} id="btnTable">
              <div className="row">
                <div className="col-md-6">
                  <div className="col-6 col-md-3">
                    <img src={restaurantImage} alt="Restaurant" width="100" height="100" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>Table {table.id}</div>
                  <div className="timer">{table.time}</div>
                  {table.orderStatus === "ordered" ? (
                    <div>Ordered {table.items} items</div>
                  ) : (
                    <div>No Order</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const handleCardClick = (id) => {
  console.log(`Card clicked for table ID: ${id}`);
  // You can perform further actions like routing, updating state, etc.
};

export default TableCard;

