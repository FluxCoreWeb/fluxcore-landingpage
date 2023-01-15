import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
function SobreNos() {
    const navigate = useNavigate()
    function quemSomos(){
        navigate(`/quem-somos`)
    }
  return (
    <main className={styles.sobreWrapper}>
        <section className={styles.wrapperSobre}>
            <section className={styles.sobreSection}>
                <div className={styles.titleDiv}>
                    <h1>Conheça melhor a <span className={styles.titlePreto}>FLUXCORE</span></h1>
                    <img src='../fluxCoreIcon.svg'/>
                </div>
                <p className={styles.subtitle}>A FuxCore tem como objetivo ajudar pequenas e médias empresas 
                a crescer de maneira rápida, fácil e acessível, entretanto, mais que isso, queremos criar um 
                ambiente personalizado no qual você possa espalhar toda a personalidade da sua empresa, seja de 
                maneira séria, elegante, divertida, serena... Queremos te ajudar a passar o sentimento certo para 
                todos que entrarem na sua página e, assim, <strong>converter visitas em clientes</strong>. Nosso objetivo é mais 
                do que apenas ajudar a aumentar sua clientela, mas sim auxiliar na criação de uma rede de pessoas 
                que apreciam você e o seu trabalho.
                </p>
            </section>
            <div className={styles.contactWrapper}>
                <button onClick={quemSomos} className={styles.buttonContact}>Conheça a nossa equipe</button>
                <div className={styles.instaDiv}>
                    <h1>Visite-nos no instagram!</h1>
                    <a target='_blank' href='https://www.instagram.com/fluxcore.web/'>
                        <div className={styles.instaIntern}>
                            <img src='../instaIcon.svg'/>
                            <p className={styles.tirarSublinhado}>@fluxcore.web</p>
                        </div>
                    </a>
                    </div>
            </div>
        </section>
    </main>
  )
}
export default SobreNos
