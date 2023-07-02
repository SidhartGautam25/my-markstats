import Navbar from '../navbar/Navbar'
import styles from './styles.module.css'
export default function Msrn() {
  return (
    <div className={styles.msrnmain}>
      <Navbar />
      <video autoPlay muted loop >
        <source src="https://www.youtube.com/watch?v=WKckrSU4YPo" type="video/mp4" />
      </video>

    </div>
  )
}