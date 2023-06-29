import Image from 'next/image'
import styles from './styles.module.css'
export default function Card(props) {
    return (
      <div className={styles.cardmain}>
        <div className={styles.cardimg}>  <Image
            src={props.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }} />
        </div>
        <div className={styles.cardtitle}>Title of Card</div>
        <div className={styles.carddes}>This is description of the card my brother.this is replacement of lorem ipsum i hope u like it.</div>
        
      </div>
    )
  }