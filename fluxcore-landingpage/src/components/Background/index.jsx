import styles from './styles.module.css'
function Background() {
  return (
    <main className={styles.bgWrapper}>
        <img className={styles.bgLine1} src='../lineBg1.svg'/>
        <img className={styles.bgLine2} src='../lineBg2.svg'/>
        <img className={styles.bgLine3} src='../lineBg3.svg'/>
    </main>
  )
}
export default Background