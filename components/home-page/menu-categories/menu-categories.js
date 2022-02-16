import React from "react";
import Image from "next/image";
import { categoriesData } from "../../../data/categories-data";
import classes from "./menu-categories.module.scss";

const MenuCategories = () => {
  return (
    <section className={classes["menu-categories"]}>
      <div className={classes.title}>
        <h1>MENIU</h1>
        <h4>BAUTURI</h4>
        <div className={classes.line}></div>
      </div>

      <ul className={classes.cards}>
        {categoriesData.map((item, index) => (
          <li className={classes.card} key={index}>
            <div
              className={classes.image}
              style={{
                width: item.w + "px",
                height: item.h + "px",
              }}
            >
              <Image src={item.image} layout="fill" alt="img" />
            </div>

            <div className={classes.name}>
              <h1>BAUTURI</h1>
              <h4>{item.name.toUpperCase()}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuCategories;
