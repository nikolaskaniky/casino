import React from "react";
import classes from "./title.module.scss";

const Title = (props) => {
  const { filteredCategory } = props;

  return (
    <section className={classes.title}>
      <div className={classes["title-wrapper"]}>
        <h1>BAUTURI</h1>
        <h2>{filteredCategory.name.toUpperCase()}</h2>
      </div>

      <div className={classes.line}></div>
    </section>
  );
};

export default Title;
