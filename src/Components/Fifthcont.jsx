import './Fifthcont.css';
import { useState } from 'react';


export default function Fifthcont() {

  const [tables, setTables] = useState([
    { id: 1, number: 1, capacity: 4, status: 'Available' },
    { id: 2, number: 2, capacity: 2, status: 'Available' },
    { id: 3, number: 3, capacity: 6, status: 'Reserved' },
    { id: 4, number: 4, capacity: 4, status: 'Occupied' },
    { id: 5, number: 5, capacity: 3, status: 'Available'},
  ]);

  const [tables1, setTables1] = useState([
    { id: 6, number: 6, capacity: 4, status: 'Available' },
    { id: 7, number: 7, capacity: 2, status: 'Available' },
    { id: 8, number: 8, capacity: 6, status: 'Reserved' },
    { id: 9, number: 9, capacity: 4, status: 'Occupied' },
    { id: 10, number: 10, capacity: 3, status: 'Available'},
  ]);

  const reserveTable = (tableId) => {
    const updatedTables = tables.map((table) =>
      table.id === tableId ? { ...table, status: 'Reserved' } : table
      );
      alert("Your table has been successfully reserved!. Thankyou for reservation on our online platform...");
      setTables(updatedTables);
    };
    const deleteTable = (tableId) => {
      const updatedTables = tables.filter((table) => table.id!== tableId);
      alert("Are you sure you want to delete this selected table?");
      setTables(updatedTables);
    };
    
    const bookTable = (tableId) => {
      const selectedTable = tables.find((table) => table.id === tableId);
      if (selectedTable) {
        if (selectedTable.available) {
          const updatedTables = tables.map((table) =>
            table.id === tableId ? { ...table, available: false } : table
          );
          alert("Table booked successfully!");
          setTables(updatedTables);
        } else {
          alert("Sorry, this table is already booked.");
        }
      } else {
        alert("Table not found.");
      }
    };
    

    const reserveTable1 = (tableId1) => {
      const updatedTables1 = tables1.map((table1) =>
    table1.id === tableId1 ? { ...table1, status: 'Reserved' } : table1
    );
    alert("Your table has been successfully reserved!. Thankyou for reservation on our online platform...");
    setTables1(updatedTables1);
  };
  const deleteTable1 = (tableId1) => {
    const updatedTables1 = tables1.filter((table1) => table1.id!== tableId1);
    alert("Are you sure you want to delete this selected table?");
    setTables1(updatedTables1);
  };



  return (
    <div>
      <div className="fifthcontmain">
        <h2 id='tms'>Book Your Table Online Here</h2>
        <div className="halfoffifth">
      <table  cellPadding={14}>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.number}</td>
              <td>{table.capacity}</td>
              <td>{table.status}</td>
              <td>
                {table.status === 'Available' && (
                  <button onClick={() => reserveTable(table.id)}>
                    Reserve
                  </button>
                )}
                {table.status === 'Reserved' && (
                  <button onClick={() => deleteTable(table.id)}>
                    Delete
                  </button>
                )}
                {table.status === 'Occupied' && (
                  <button onClick={() => bookTable(table.id)}>
                  Reserved
                </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>

        <div className="halfoffifth">

        <table cellPadding={14}>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tables1.map((table1) => (
            <tr key={table1.id}>
              <td>{table1.number}</td>
              <td>{table1.capacity}</td>
              <td>{table1.status}</td>
              <td>
                {table1.status === 'Available' && (
                  <button onClick={() => reserveTable1(table1.id)}>
                    Reserve
                  </button>
                )}
                {table1.status === 'Reserved' && (
                  <button onClick={() => deleteTable1(table1.id)}>
                    Delete
                  </button>
                )}
                {table1.status === 'Occupied' && (
                  <button>Book Seat</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

        </div>
     
      </div>

      
    </div>
  )
}
