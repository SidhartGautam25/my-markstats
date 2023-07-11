"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import arrow from "../../../public/arrow.png";
import right from "../../../public/right.png";
import ind1 from "../../../public/ind1.jpg";
import ind2 from "../../../public/ind2.jpg";
import ind3 from "../../../public/ind3.jpg";
import ind4 from "../../../public/ind5.jpg";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import res1 from "../../../public/res1.jpg";
import res2 from "../../../public/res2.jpg";
import res3 from "../../../public/res3.jpg";
import res4 from "../../../public/res4.jpg";
import res5 from "../../../public/res5.jpg";
import res6 from "../../../public/res6.jpg";
import res7 from "../../../public/res7.jpg";
import res8 from "../../../public/res8.jpg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Carousel() {
  // const [isdragStart, setIsdragStart] = useState(false);
  const carousel = useRef();
  const arrowicons = useRef();
  const firstimg = useRef();
  console.log("clientWidth");
  //console.log(firstimg.current.offsetWidth);
  const [firstimagewidth, setFirstimagewidth] = useState(0);
  useLayoutEffect(() => {
    setFirstimagewidth(firstimg.current.offsetWidth + 14);
  }, []);

  // arrowIcons.current.forEach((icon) => {
  //   icon.addEventlistner("click", () => {
  //     console.log(icon);
  //   });
  // });

  const arrowClickleft = () => {
    // console.log("clicked");
    carousel.current.scrollLeft += firstimagewidth;
  };

  const arrowClickright = () => {
    // console.log("clicked");
    carousel.current.scrollLeft -= firstimagewidth;
  };

  // const dragStart = () => {
  //   setIsdragStart(true);
  // };

  // const dragStop = () => {
  //   setIsdragStart(false);
  // };

  // const runfunction = (e) => {
  //   if (!isdragStart) return;
  //   e.preventDefault();
  //   carousel.current.scrollLeft = e.pageX;
  // };

  return (
    <>
      <div className={styles.title}>
        <h3>New Updates</h3>
      </div>
      <div className={styles.slidermain}>
        <div className={styles.wrapper}>
          <Image
            className={styles.arrowimg}
            onClick={arrowClickleft}
            src={arrow}
            ref={arrowicons}
          />
          <div
            // onMouseMoveCapture={runfunction}
            // onMouseDownCapture={dragStart}
            // onMouseUpCapture={dragStop}
            className={styles.carousel}
            ref={carousel}
          >
            <Image className={styles.logoimg} src={ind1} ref={firstimg} />
            <Image className={styles.logoimg} src={ind2} />
            <Image className={styles.logoimg} src={ind3} />
            <Image className={styles.logoimg} src={ind4} />
            <Image className={styles.logoimg} src={img1} />
            <Image className={styles.logoimg} src={img2} />
            <Image className={styles.logoimg} src={img3} />
            <Image className={styles.logoimg} src={img4} />
            <Image className={styles.logoimg} src={res1} />
            <Image className={styles.logoimg} src={res2} />
            <Image className={styles.logoimg} src={res3} />
            <Image className={styles.logoimg} src={res4} />
            <Image className={styles.logoimg} src={res5} />
            <Image className={styles.logoimg} src={res6} />
            <Image className={styles.logoimg} src={res7} />
            <Image className={styles.logoimg} src={res8} />
          </div>
          <Image
            className={styles.arrowimg}
            onClick={arrowClickright}
            src={right}
            ref={arrowicons}
          />
        </div>
      </div>
    </>
  );
}
