import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function Header({setModal}) {
  const url = window.location.hash
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  function nossoTrabalho(){
    if(menu){
      setMenu(false)
    }
    navigate(`/nosso-trabalho`)
  }
  function home(){
    if(menu){
      setMenu(false)
    }
    navigate(`/`)
  }
  function sobreNos(){
    if(menu){
      setMenu(false)
    }
    navigate(`/sobre-nos`)
  }
  function quemSomos(){
    if(menu){
      setMenu(false)
    }
    navigate(`/quem-somos`)
  }
  function setModalMobile(){
    setModal(true)
    setMenu(false)
  }
  return (
    <header className={styles.headerWrapper}>
      <section className={styles.sectionHeader}>
        <div onClick={home} className={styles.logoDiv}>
          <img src='../iconLogo.svg'/>
          <h1>FLUXCORE</h1>
        </div>
        <div className={styles.menuMobile}>
          <img onClick={() => setMenu(true)} src='../menuOpen.svg'/>
        </div>
        <section className={styles.navbarHeaderWrapper}>
          <div className={styles.textNavbar}>
            <img onClick={home} src='../homeIcon.svg'/>
            {url == '#/' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={nossoTrabalho}>NOSSO TRABALHO</h2>
            {url == '#/nosso-trabalho' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={sobreNos}>SOBRE NÓS</h2>
            {url == '#/sobre-nos' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={quemSomos}>QUEM SOMOS</h2>
            {url == '#/quem-somos' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div onClick={() => setModal(true)} className={styles.textNavbar}>
            <h2 className={styles.faleConoscoNavbar}>FALE CONOSCO</h2>
          </div>
        </section>
      </section>
      {menu &&
          <section className={styles.menuHamb}>
            <div className={styles.menuIconHamb}>
              <img onClick={() => setMenu(false)} src='../menuClose.svg'/>
            </div>
            <div className={styles.headerMenuHamb}>
              {url == '#/' ? <h1 onClick={home} className={styles.roxoSel}>Página Principal</h1> : <h1 onClick={home}>Página Principal</h1>}
              {url == '#/nosso-trabalho' ? <h1 className={styles.roxoSel} onClick={nossoTrabalho}>Nosso Trabalho</h1> : <h1 onClick={nossoTrabalho}>Nosso Trabalho</h1>}
              {url == '#/sobre-nos' ? <h1 className={styles.roxoSel} onClick={sobreNos}>Sobre Nós</h1> : <h1 onClick={sobreNos}>Sobre Nós</h1>}
              {url == '#/quem-somos' ? <h1 className={styles.roxoSel} onClick={quemSomos}>Quem Somos</h1> : <h1 onClick={quemSomos}>Quem Somos</h1>}
              <button onClick={setModalMobile} className={styles.buttonBudget}>Faça um orçamento</button>
            </div>
          </section>
        }
    </header>
  )
}
export default Header
