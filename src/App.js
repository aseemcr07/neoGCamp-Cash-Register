import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [change, setChange] = useState();
  var [notesArr, setNotesArr] = useState([0, 0, 0, 0, 0, 0, 0]);

  var denominations = [2000, 500, 100, 20, 10, 5, 1];

  function onClickHandler(event) {
    var billInput = Number(document.querySelector("#bill-input").value);
    var cashInput = Number(document.querySelector("#cash-input").value);

    if (billInput < 0 || cashInput < 0) {
      alert("Negative value entered!");
    } else if (cashInput < billInput) {
      alert("Provide more cash!");
    } else {
      change = cashInput - billInput;
      setChange(change);

      for (var i = 0; i < denominations.length; i++) {
        var numNotes = Math.trunc(change / denominations[i]);
        change = change % denominations[i];

        let numNotesArr = notesArr;
        numNotesArr[i] = numNotes;
        setNotesArr(numNotesArr);
      }
    }
  }

  return (
    <div className="App">
      <h1>💵 Cash Register</h1>
      <div className="input-fields">
        <div className="field-label">
          <strong>Bill Amount</strong>
        </div>
        <input id="bill-input" placeholder="Enter bill amount" />
        <div className="field-label">
          <strong>Cash Given</strong>
        </div>
        <input id="cash-input" placeholder="Enter cash amount" />
      </div>
      <button className="check-button" onClick={onClickHandler}>
        Check
      </button>
      <div className="output-field">
        <div className="field-label">
          <strong>Change to be returned</strong>
        </div>
        <div className="change-box">{change}</div>
      </div>
      <div>
        <table className="note-table">
          <caption>Return Change</caption>
          <tbody>
            <tr>
              <th>Nos.</th>
              {notesArr.map((noOfNote) => {
                return <td>{noOfNote}</td>;
              })}
            </tr>
            <tr>
              <th>Note</th>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>10</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
