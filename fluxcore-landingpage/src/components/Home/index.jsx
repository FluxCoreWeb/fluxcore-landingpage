import styles from './styles.module.css'
import Background from "../Background/index";
import { useNavigate } from "react-router-dom";
function Home({setModal}) {
    const navigate = useNavigate()
    function sobreNos(){
        navigate(`/sobre-nos`)
    }
  return (
    <>
        <main className={styles.homeWrapper}>
            <section className={styles.infoWrapper}>
                <article className={styles.divLeft}>
                    <h1 className={styles.title}>Converta visitas em clientes com uma Landing Page</h1>
                    <p className={styles.subtitle}>Expanda sua clientela de maneira rápida, fácil e acessível 
                    com a FluxCore a partir da criação de uma Landing Page exclusivamente moldada para as suas 
                    necessidades.</p>
                    <div className={styles.buttonDiv}>
                        <button onClick={() => setModal(true)} className={styles.buttonBudget}>Faça um orçamento</button>
                        <button onClick={sobreNos} className={styles.buttonKnow}>Saiba mais</button>
                    </div>
                </article>
                <article className={styles.benefitsDiv}>
                    <div className={styles.benefitsInfoSquare}>
                        <img src='../medalhaIcon.svg'/>
                        <p className={styles.subtitleBenefits}>Conte suas histórias e conquistas em um site simples e atrativo </p>
                    </div>
                    <div className={styles.benefitsInfoSquare}>
                        <div className={styles.imagesInfoSquare}>
                            <img src='../pcIcon.svg'/>
                            <img src='../phoneIcon.svg'/>
                        </div>
                        <p className={styles.subtitleBenefits}>Compartilhamento rápido e fácil, no computador e no celular</p>
                    </div>
                    <div className={styles.benefitsInfoSquare}>
                        <img src='../userIcon.svg'/>
                        <p className={styles.subtitleBenefits}>Venda seu produto ou serviço com a credibilidade que uma plataforma profissional oferece</p>
                    </div>
                    <div className={styles.benefitsInfoSquare}>
                        <img src='../coinIcon.svg'/>
                        <p className={styles.subtitleBenefits}>Projetos profissionais por um preço mega acessível </p>
                    </div>
                </article>
            </section>
        </main>
        <Background/>
    </>
  )
}
export default Home
