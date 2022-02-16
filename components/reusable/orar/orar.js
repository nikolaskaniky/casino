import React, { useState, useEffect, Fragment } from "react";
import { orarData } from "../../../data/orar-data";
import classes from "./orar.module.scss";
import { BsChevronDown } from "react-icons/bs";

const Orar = () => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const [isOpen, setIsOpen] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const expandHandler = () => setIsExpanded((prev) => setIsExpanded(!prev));

  useEffect(() => {
    if (
      hour === 3 ||
      hour === 4 ||
      hour === 5 ||
      hour === 6 ||
      hour === 7 ||
      hour === 8 ||
      hour === 9
    ) {
      setIsOpen("Inchis");
    } else {
      setIsOpen("Deschis");
    }
  }, []);

  return (
    <div className={classes.orar} onClick={expandHandler}>
      <p
        className={`${classes["status"]} ${
          isOpen === "Deschis" ? classes.active : classes.inactive
        }`}
      >
        {isOpen}
      </p>

      <BsChevronDown />

      {orarData.map((item, index) => (
        <Fragment key={index}>
          {index + 1 === day && (
            <div className={classes["orar-content"]}>
              <p>{item.day}:</p>
              <p>{item.open} AM</p>
              <p>-</p>
              <p>{item.close} AM</p>
            </div>
          )}

          {index === 6 && day === 0 && (
            <div key={index} className={classes["orar-content"]}>
              <p>{item.day}:</p>
              <p>{item.open} AM</p>
              <p>-</p>
              <p>{item.close} AM</p>
            </div>
          )}
        </Fragment>
      ))}

      {isExpanded && (
        <div className={classes["dropdown-box"]}>
          {orarData.map((item, index) => (
            <div className={classes.row} key={index}>
              <div className={classes.day}>
                <p>{item.day.toUpperCase()}</p>
              </div>
              <div className={classes.program}>
                <p>
                  {item.open}:00 <span>AM</span>
                </p>
                <p>-</p>
                <p>
                  {item.close}:00 <span>AM</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orar;
