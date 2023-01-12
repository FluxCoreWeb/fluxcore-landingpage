import styles from './styles.module.css'
function SobreNos() {
  return (
    <main className={styles.sobreWrapper}>
        <section className={styles.sobreSection}>
            <div className={styles.titleDiv}>
                <h1>Conheça melhor a FLUXCORE</h1>
                <img src='../fluxCoreIcon.svg'/>
            </div>
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Netus justo nulla leo risus scelerisque vivamus pellentesque 
                et feugiat. Tellus aliquet montes id eget. Integer eget platea euismod eleifend. Placerat convallis 
                egestas diam maecenas aliquam massa posuere. Egestas non ac ornare risus facilisis. Commodo ut urna 
                auctor feugiat amet ipsum pretium. Tincidunt adipiscing mi mi neque dictum. Tortor pellentesque dictumst 
                senectus urna dictumst. Ultrices id feugiat cursus aliquet diam tristique. Diam porttitor euismod sed 
                scelerisque ut venenatis quam.
            </p>
        </section>
        <div className={styles.hatIconDiv}>
            <img className={styles.hatIcon} src='../hatIcon.svg'/>
        </div>
    </main>
  )
}
export default SobreNos
