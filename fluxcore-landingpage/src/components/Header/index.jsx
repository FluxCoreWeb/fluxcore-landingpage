import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function Header() {
  const url = window.location.pathname
  console.log(url)
  const navigate = useNavigate()
  function nossoTrabalho(){
    navigate(`/nosso-trabalho`)
    setState(1)
  }
  function home(){
    navigate(`/`)
    setState(0)
  }
  function sobreNos(){
    navigate(`/sobre-nos`)
    setState(2)
  }
  function quemSomos(){
    navigate(`/quem-somos`)
    setState(3)
  }
  return (
    <header className={styles.headerWrapper}>
      <section className={styles.sectionHeader}>
        <div className={styles.logoDiv}>
          <img src='../iconLogo.svg'/>
          <h1>FLUXCORE</h1>
        </div>
        <section className={styles.navbarHeaderWrapper}>
          <div className={styles.textNavbar}>
            <img onClick={home} src='../homeIcon.svg'/>
            {url == '/' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={nossoTrabalho}>NOSSO TRABALHO</h2>
            {url == '/nosso-trabalho' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={sobreNos}>SOBRE NÓS</h2>
            {url == '/sobre-nos' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.textNavbar} onClick={quemSomos}>QUEM SOMOS</h2>
            {url == '/quem-somos' &&
            <div className={styles.lineBorda}/>
            }
          </div>
          <div className={styles.textNavbar}>
            <h2 className={styles.faleConoscoNavbar}>FALE CONOSCO</h2>
            {url == 4 &&
            <div className={styles.lineBorda}/>
            }
          </div>
        </section>
      </section>
    </header>
  )
}
export default Header
