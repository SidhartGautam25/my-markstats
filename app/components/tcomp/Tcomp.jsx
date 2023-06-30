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
                <div className={styles.compcard1}></div>
                <div className={styles.compcard2}></div>
                <div className={styles.compcard3}></div>
                </div>
            <div className={styles.cardholder}>
                <div className={styles.compcard4}></div>
                <div className={styles.compcard5}></div>
                <div className={styles.compcard6}></div>
            </div>

        </div>
    )
}