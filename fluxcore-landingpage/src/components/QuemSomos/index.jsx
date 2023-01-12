import styles from './styles.module.css'
function QuemSomos() {
  return (
    <main className={styles.quemSomosWrapper}>
        <section className={styles.sectionQuemSomos}>
            <div className={styles.titleDiv}>
                <h1>Quem faz acontecer?</h1>
                <h3>Conheça nossa equipe</h3>
            </div>
            <section className={styles.equipeSection}>
                <div className={styles.equipeWrapper}>
                    <img className={styles.imgIcon} src='../luisa.jpg'/>
                    <div className={styles.equipeIndividualDiv}>
                        <div className={styles.cargoDiv}>
                            <h1 className={styles.cargoTitle}>Luísa Coelho</h1>
                            <h3 className={styles.cargoSubtitle}>CMO, Co-Founder & Designer</h3>
                        </div>
                        <p className={styles.cargoText}>Lorem ipsum dolor sit amet consectetur. Adipiscing justo ipsum in convallis ornare. 
                            Commodo non a tortor amet. Dolor nisl molestie est dui mauris praesent. Volutpat 
                            mattis dignissim quis molestie faucibus et. Nullam urna neque quisque ut at consequat. 
                            Nunc varius felis semper dui suspendisse id sed. Porttitor cursus egestas eget quis. 
                            Magna orci auctor amet vestibulum tortor. Felis.</p>
                        <img src='../designIcon.svg'/>
                        <section className={styles.redesDiv}>
                            <a href='https://www.linkedin.com/in/luísa-coelho-167194237/' target="_blank">
                                <div className={styles.buttonRedes}>
                                    <img src='../linkedinIcon.svg'/>
                                </div>
                            </a>
                            <div className={styles.buttonRedes}>
                                <img src='../beIcon.svg'/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={styles.equipeWrapper}>
                    <img className={styles.imgIcon} src='../artur.jpg'/>
                    <div className={styles.equipeIndividualDiv}>
                        <div className={styles.cargoDiv}>
                            <h1 className={styles.cargoTitle}>Artur Mota</h1>
                            <h3 className={styles.cargoSubtitle}>CTO, Co-Founder & Developer</h3>
                        </div>
                        <p className={styles.cargoText}>Lorem ipsum dolor sit amet consectetur. Adipiscing justo ipsum in convallis ornare. 
                            Commodo non a tortor amet. Dolor nisl molestie est dui mauris praesent. Volutpat 
                            mattis dignissim quis molestie faucibus et. Nullam urna neque quisque ut at consequat. 
                            Nunc varius felis semper dui suspendisse id sed. Porttitor cursus egestas eget quis. 
                            Magna orci auctor amet vestibulum tortor. Felis.</p>
                        <img src='../codIcon.svg'/>
                        <section className={styles.redesDiv}>
                            <a href='https://www.linkedin.com/in/artur-mota-913b9a235/' target="_blank">
                            <div className={styles.buttonRedes}>
                                <img src='../linkedinIcon.svg'/>
                            </div>
                            </a>
                            <a href='https://github.com/ArturMota19' target="_blank">
                                <div className={styles.buttonRedes}>
                                <img src='../gitIcon.svg'/>
                            </div>
                            </a>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    </main>
  )
}
export default QuemSomos
