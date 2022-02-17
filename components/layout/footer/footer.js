import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import classes from "./footer.module.scss";
import logo from "../../../assets/navbar/logo.png";
import { orarData } from "../../../data/orar-data";
import Map from "./map";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.media}>
        <div className={classes.logo}>
          <div className={classes.image}>
            <Image src={logo} layout="fill" alt="img" />
          </div>

          <div className={classes.name}>
            <h1>GEAR - SLOT</h1>
          </div>
        </div>

        <div className={classes["social-media"]}>
          <div className={classes.text}>
            <p>
              Social <span>Media</span>
            </p>
          </div>

          <div className={classes.icons}>
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
          </div>
        </div>
      </div>

      <ul className={classes.orar}>
        {orarData.map((item, index) => (
          <li key={index} className={classes["orar-row"]}>
            <div className={classes.day}>
              <p>{item.day.toUpperCase()}</p>
            </div>

            <div className={classes.program}>
              <p>{item.open} AM</p>
              <p>-</p>
              <p>{item.close} PM</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.map}>
        <div className={classes.presentation}>
          <div className={classes.str}>
            <MdLocationPin />
            <p>Bulevardul 1 Mai, NR. 132</p>
          </div>

          <div className={classes.country}>
            <p>Berceni, Romania</p>
          </div>
        </div>
        <div className={classes["map-wrapper"]}>
          <Map />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
