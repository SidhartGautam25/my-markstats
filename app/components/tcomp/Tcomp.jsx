import Image from 'next/image'
import styles from './styles.module.css'
import ind1 from '../../../public/ind1.jpg';
import ind2 from '../../../public/ind2.jpg';
import ind3 from '../../../public/ind3.jpg';
import ind4 from '../../../public/ind5.jpg';
import ind5 from '../../../public/ind5.jpg';
import ind6 from '../../../public/ind6.jpg';



export default function Tcomp() {
    return (
        <div className={styles.fcompmain}>
            <div className={styles.title}><div className={styles.titleint}>Automotive Industry Verticle</div></div>
            <div className={styles.cardholder}>
                <div className={styles.compcard1}>
                    <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>first Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
                <div className={styles.compcard2}>
                <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>Second Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
                <div className={styles.compcard3}>
                <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>third Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardholder}>
                <div className={styles.compcard4}>
                <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>fourth Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
                <div className={styles.compcard5}>
                <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>fifth Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
                <div className={styles.compcard6}>
                <div className={styles.afterhover}>
                        <div className={styles.afterhovertitle}>sixth Industry</div>
                        <div className={styles.afterhoverdes}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}