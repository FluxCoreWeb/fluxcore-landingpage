import styles from './styles.module.css'
function Card({titulo, imagem, texto, id}) {
  return (
    <section className={styles.cardDestaque}>
        <div className={styles.titleCard}>
            <h1>{id}. {titulo}</h1>
            <img src={imagem}/>
        </div>
        <p className={styles.subtitleCard}>
            {texto}
        </p>
    </section>
  )
}
export default Card
