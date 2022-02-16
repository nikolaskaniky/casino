import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./extra-navbar.module.scss";
import { categoriesData } from "../../../data/categories-data";

const ExtraNavbar = () => {
  const router = useRouter();

  return (
    <header className={classes["extra-navbar"]}>
      <div className={classes["links-wrapper"]}>
        <Link href="/">
          <a>
            <p className={router.pathname === "/" ? classes.active : undefined}>
              Acasa
            </p>
          </a>
        </Link>

        {categoriesData.map((item, index) => (
          <Link href={item.linkTo} key={index}>
            <a>
              <p
                className={
                  router.asPath === item.linkTo ? classes.active : undefined
                }
              >
                Bauturi <span>{item.name}</span>
              </p>
            </a>
          </Link>
        ))}

        <Link href="/about-us">
          <a>
            <p
              className={
                router.asPath === "/about-us" ? classes.active : undefined
              }
            >
              Despre noi
            </p>
          </a>
        </Link>
      </div>

      <div className={classes.line}></div>
    </header>
  );
};

export default ExtraNavbar;
