import styles from './styles.module.css'
function Header() {
  return (
    <header className={styles.headerWrapper}>
      <section className={styles.sectionHeader}>
        <div className={styles.logoDiv}>
          <img src='../public/iconLogo.svg'/>
          <h1>FLUXCORE</h1>
        </div>
        <navbar className={styles.navbarHeaderWrapper}>
          <img src='../public/homeIcon.svg'/>
          <h2>NOSSO TRABALHO</h2>
          <h2>SOBRE NÓS</h2>
          <h2>QUEM SOMOS</h2>
          <h2 className={styles.faleConoscoNavbar}>FALE CONOSCO</h2>
        </navbar>
      </section>
    </header>
  )
}
export default Header
