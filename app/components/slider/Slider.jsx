import styles from "./styles.module.css";
import Image from "next/image";
import ind1 from "../../../public/ind1.jpg";
import ind2 from "../../../public/ind2.jpg";
import ind3 from "../../../public/ind3.jpg";
import ind4 from "../../../public/ind5.jpg";
import ind5 from "../../../public/ind5.jpg";
import ind6 from "../../../public/ind6.jpg";

export default function Slider() {
  return (
    <div className={styles.slidermain}>
      <div className={styles.ourclients}>
        <h3>our clients</h3>
      </div>
      <div className={styles.slider}>
        <div className={styles.slidertrack}>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} />
          </div>

          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} />
          </div>
        </div>
      </div>
    </div>
  );
}
