import styles from './styles.module.css'
function Background() {
  return (
    <main className={styles.bgWrapper}>
        <img className={styles.bgLine1} src='../public/lineBg1.svg'/>
        <img className={styles.bgLine2} src='../public/lineBg2.svg'/>
        <img className={styles.bgLine3} src='../public/lineBg3.svg'/>
    </main>
  )
}
export default Background