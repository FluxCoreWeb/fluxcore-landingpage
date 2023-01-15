import styles from './styles.module.css'
function Modal({setModal}) {
  return (
    <main className={styles.modalWrapper}>
        <section className={styles.modalIc}>
            <div className={styles.modalIntern}>
                <h1 className={styles.titleModal}>Fale com a gente e faça seu orçamento pelo Instagram!</h1>
                <a target='_blank' href='https://www.instagram.com/fluxcore.web/'><button className={styles.buttonModal}>Fale Conosco</button></a>
            </div>
        </section>
        <div onClick={() => setModal(false)} className={styles.background}/>
    </main>
  )
}
export default Modal
