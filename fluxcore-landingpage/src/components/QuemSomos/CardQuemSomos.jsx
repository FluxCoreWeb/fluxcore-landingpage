import styles from './styles.module.css'
function CardQuemSomos({nome, imagem, cargo, texto,imgCargo, rede1img, rede1link,rede2img,rede2link}) {
  return (
    <div className={styles.equipeWrapper}>
        <img className={styles.imgIcon} src={imagem}/>
        <div className={styles.equipeIndividualDiv}>
            <div className={styles.cargoDiv}>
                <h1 className={styles.cargoTitle}>{nome}</h1>
                <h3 className={styles.cargoSubtitle}>{cargo}</h3>
            </div>
            <p className={styles.cargoText}>{texto}</p>
            <img className={styles.imgCargo} src={imgCargo}/>
            <section className={styles.redesDiv}>
                <h1>Veja mais do meu trabalho:</h1>
                <div className={styles.apenasRedes}>
                    <a href={rede1link} target="_blank">
                        <div className={styles.buttonRedes}>
                            <img src={rede1img}/>
                        </div>
                    </a>
                    <a href={rede2link} target='_blank'>
                        <div className={styles.buttonRedes}>
                            <img src={rede2img}/>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </div>

  )
}
export default CardQuemSomos
