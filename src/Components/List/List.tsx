import React from "react";
import classes from "./List.module.css";
import ListItems from "../ListItems/ListItems";
import Form from "../Form/Form";

function List() {
  return (
    <div>
      <div className={classes.wrapper}>
        <h1>Finance Logger</h1>
        <ListItems />
      </div>
      <footer>
        <Form />
        <a href="https://www.thenetninja.co.uk">The Net Ninja</a>
      </footer>
    </div>
  );
}

export default List;
