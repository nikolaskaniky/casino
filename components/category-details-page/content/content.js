import React from "react";
import Image from "next/image";
import classes from "./content.module.scss";
import test from "../../../assets/products/alcoolice/jack-daniels.png";
import { productsData } from "../../../data/products-data";

const Content = (props) => {
  const { filteredProducts, filteredCategory } = props;

  return (
    <ul className={classes.content}>
      {filteredCategory.types ? (
        filteredCategory.types.map((type, index) => (
          <li key={index} className={classes["type-section"]}>
            <div className={classes["type-title"]}>
              <h1>{type.name.toUpperCase()}</h1>
              <div className={classes.line}></div>
            </div>

            <div className={classes["products-list"]}>
              {filteredProducts.map(
                (product, index) =>
                  product.type === type.name && (
                    <div key={index} className={classes.card}>
                      <div className={classes["image-wrapper"]}>
                        <Image
                          src={product.image}
                          layout="fill"
                          alt="image"
                          objectFit="contain"
                        />
                      </div>
                      <div className={classes.name}>
                        <h4>{product.name}</h4>
                      </div>

                      <div className={classes.qty}>
                        <p>{product.qty} ml</p>
                      </div>

                      <div className={classes.price}>
                        <p>{product.price} LEI</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </li>
        ))
      ) : (
        <div className={classes["products-list"]}>
          {filteredProducts.map((product, index) => (
            <div className={classes.card} key={index}>
              <div className={classes["image-wrapper"]}>
                <Image
                  src={product.image}
                  layout="fill"
                  alt="image"
                  objectFit="contain"
                />
              </div>
              <div className={classes.name}>
                <h4>{product.name}</h4>
              </div>

              <div className={classes.qty}>
                <p>{product.qty} ml</p>
              </div>

              <div className={classes.price}>
                <p>{product.price} LEI</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </ul>
  );
};

export default Content;
