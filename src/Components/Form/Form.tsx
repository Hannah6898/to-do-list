import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <form className="new-item-form">
        <div className={classes.field}>
          <label>Type:</label>
          <select id="type">
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label>To / From:</label>
          <input type="text" id="tofrom" />
        </div>
        <div className="field">
          <label>Details:</label>
          <input type="text" id="details" />
        </div>
        <div className="field">
          <label>Amount (£):</label>
          <input type="number" id="amount" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
