
import Card from '../card/Card'
import styles from './styles.module.css'
import res1 from '../../../public/res1.jpg'
import res2 from '../../../public/res2.jpg'
import res3 from '../../../public/res3.jpg'
import res4 from '../../../public/res4.jpg'
import res5 from '../../../public/res5.jpg'
import res6 from '../../../public/res6.jpg'
import res7 from '../../../public/res7.jpg'
import res8 from '../../../public/res8.jpg'



export default function Fcomp() {
    return (
        <div className={styles.fcompmain}>
            <div className={styles.title}><div className={styles.titleint}>Why Work With Us</div></div>
            <div className={styles.cardholder}><Card image={res1} />
                <Card image={res2} />
                <Card image={res3} />
                <Card image={res4} /></div>
            <div className={styles.cardholder}><Card image={res5} /><Card image={res6} /><Card image={res7} /><Card image={res8} /></div>

        </div>
    )
}