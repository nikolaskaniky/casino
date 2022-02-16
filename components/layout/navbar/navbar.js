import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./navbar.module.scss";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../../assets/navbar/logo.png";
import Orar from "../../reusable/orar/orar";
import { useRouter } from "next/router";
import NavbarMedia from "./media/navbar-media";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [mediaIsActive, setMediaIsActive] = useState(false);
  const activateMediaHandler = () =>
    setMediaIsActive((prev) => setMediaIsActive(!prev));

  return (
    <header className={classes.navbar}>
      <section className={classes["wrapper"]}>
        {/* //! orar */}
        <div className={classes["orar-container"]}>
          <Orar />
        </div>
        {/* //! logo */}
        <div className={classes.logo}>
          <div
            className={classes["logo-container"]}
            onClick={() => router.push("/")}
          >
            <h1>GEAR</h1>
            <div className={classes["logo-wrapper"]}>
              <Image src={logo} layout="fill" alt="img" />
            </div>
            <h1>SLOT</h1>
          </div>
        </div>
        {/* //! media */}
        <div className={classes.media}>
          <Link href="https://www.facebook.com/Gear-Slot-Sal%C4%83-de-Jocuri-761374560736864/">
            <a>
              <BsFacebook className={classes["fb-svg"]} />
            </a>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=+40722753527">
            <a>
              <IoLogoWhatsapp className={classes["wp-svg"]} />
            </a>
          </Link>
          <p>+40722753527</p>
        </div>

        {/* //! media query. */}
        <div className={classes.lines} onClick={activateMediaHandler}>
          <div
            className={`${classes.line} ${
              mediaIsActive ? classes.active : undefined
            }`}
          ></div>
          <div
            className={`${classes.line} ${
              mediaIsActive ? classes.active : undefined
            }`}
          ></div>
          <div
            className={`${classes.line} ${
              mediaIsActive ? classes.active : undefined
            }`}
          ></div>
        </div>

          <AnimatePresence>
          {mediaIsActive && <NavbarMedia motion={motion}
            setMediaIsActive={setMediaIsActive}
          />}

          </AnimatePresence>
      </section>
    </header>
  );
};

export default Navbar;
