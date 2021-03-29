import React from 'react';

function Table(props) {
  return (
    <table className="uk-table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>

      <tbody>{props.tableRow}</tbody>
    </table>
  );
}

export default Table;
