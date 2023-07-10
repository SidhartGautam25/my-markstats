import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../public/marklogo.png";
import navsvg from "../../../public/nav.svg";
export default function Navbar() {
  return (
    <div className={styles.navmain}>
      <div className={styles.navlogo}>
        <Image className={styles.logoimg} src={logo} />
      </div>
      <div className={styles.navitemsdiv}>
        <div className={styles.liitems}>Home</div>
        <div className={styles.liitems}>About Us</div>
        <div className={styles.liitems}>Contact Us</div>
        <div className={styles.liitems}>Services</div>
      </div>
      <div className={styles.navsvgitem}>
        <Image className={styles.svgimg} src={navsvg} alt="svg" />
        {/* <div className={styles.navsvgdiv}>
          <div className={styles.liitems}>Home</div>
          <div className={styles.liitems}>About Us</div>
          <div className={styles.liitems}>Contact Us</div>
          <div className={styles.liitems}>Services</div>
        </div> */}
      </div>
    </div>
  );
}
