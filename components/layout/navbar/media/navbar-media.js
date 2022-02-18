import React from "react";
import { categoriesData } from "../../../../data/categories-data";
import classes from "./navbar-media.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Orar from "../../../reusable/orar/orar";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Map from "../../footer/map";
import { MdLocationPin } from 'react-icons/md'

const NavbarMedia = (props) => {
  const { motion, setMediaIsActive } = props;
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <motion.section
      className={classes.media}
      initial={{ opacity: 0, transform: `translateX(-100%)` }}
      animate={{ opacity: 1, transform: `translateX(0%)` }}
      exit={{ opacity: 0, transform: `translateX(-100%)` }}
      transition={{ duration: 0.4 }}
    >
      <ul className={classes.categories}>
        <li onClick={() => {
          router.push('/');
          setMediaIsActive(false);
        }}
        className={`${classes["categories-item"]} ${
          currentRoute === '/' ? classes.active : undefined
        }`}
        >
          <p>ACASA</p>
          <div className={classes.line}></div>
        </li>

        <li onClick={() => {
          router.push('/about-us');
          setMediaIsActive(false);
        }}
        className={`${classes["categories-item"]} ${
          currentRoute === '/about-us' ? classes.active : undefined
        }`}
        >
          <p>DESPRE NOI</p>
          <div className={classes.line}></div>
        </li>

        {categoriesData.map((item, index) => (
          <li
            key={index}
            className={`${classes["categories-item"]} ${
              currentRoute === item.linkTo ? classes.active : undefined
            }`}
            onClick={() => {
              router.push(`${item.linkTo}`);
              setMediaIsActive(false);
            }}
          >
            <p>BAUTURI {item.name.toUpperCase()}</p>

            <div className={classes.line}></div>
          </li>
        ))}
      </ul>

      <div className={classes.orar}>
        <Orar orarContentStyle={classes['orar-extra']} />
      </div>

      <div className={classes.social}>
        <h1>
          Social <span>Media</span>
        </h1>

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

      <div className={classes.map}>
      <div className={classes.presentation}>
          <div className={classes.country}>
            <p>Berceni, Romania</p>  
          </div>

          <div className={classes.str}>
          <MdLocationPin />  
          <p>Bulevardul 1 Mai, NR. 132</p>  
          </div>
        </div>
            <Map height='200px' />
      </div>
    </motion.section>
  );
};

export default NavbarMedia;
