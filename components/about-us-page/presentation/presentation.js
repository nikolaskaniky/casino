import React from "react";
import classes from "./presentation.module.scss";

const Presentation = () => {
  return (
    <section className={classes.presentation}>
      <div className={classes.title}>
        <h1>DESPRE</h1>
        <h4>LOCALUL</h4>
        <h2>GEAR - SLOT</h2>
      </div>

      <div className={classes.text}>
        <p>
          Va asteptam cu drag la localul nostru unde puteti servi bauturi
          rocoritoare, si va oferim un spatiu special dedicat jocurilor de slot.
        </p>
        <p>Speram sa aveti o experienta placuta alaturi de noi.</p>
      </div>
    </section>
  );
};

export default Presentation;
