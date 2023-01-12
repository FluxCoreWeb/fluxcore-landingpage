import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate()
  function nossoTrabalho(){
    navigate(`/nosso-trabalho`)
  }
  function home(){
    navigate(`/`)
  }
  function sobreNos(){
    navigate(`/sobre-nos`)
  }
  return (
    <header className={styles.headerWrapper}>
      <section className={styles.sectionHeader}>
        <div className={styles.logoDiv}>
          <img src='../public/iconLogo.svg'/>
          <h1>FLUXCORE</h1>
        </div>
        <navbar className={styles.navbarHeaderWrapper}>
          <img onClick={home} src='../public/homeIcon.svg'/>
          <h2 onClick={nossoTrabalho}>NOSSO TRABALHO</h2>
          <h2 onClick={sobreNos}>SOBRE NÓS</h2>
          <h2>QUEM SOMOS</h2>
          <h2 className={styles.faleConoscoNavbar}>FALE CONOSCO</h2>
        </navbar>
      </section>
    </header>
  )
}
export default Header
