import styles from './styles.css'
function Header() {
  return (
    <header className='headerWrapper'>
      <section className='sectionHeader'>
        <div className='logoDiv'>
          <img src='../public/iconLogo.svg'/>
          <h1>FLUXCORE</h1>
        </div>
        <navbar className='navbarHeaderWrapper'>
          <img src='../public/homeIcon.svg'/>
          <h2>NOSSO TRABALHO</h2>
          <h2>SOBRE NÓS</h2>
          <h2>QUEM SOMOS</h2>
          <h2 className='faleConoscoNavbar'>FALE CONOSCO</h2>
        </navbar>
      </section>
    </header>
  )
}
export default Header
