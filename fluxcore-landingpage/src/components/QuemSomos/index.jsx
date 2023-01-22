import styles from './styles.module.css'
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import CardQuemSomos from './CardQuemSomos';
function QuemSomos() {
    const nome1 = "Luísa Coelho"
    const imagem1 = '../luisa.jpg'
    const cargo1 = "CMO, Co-Founder & Designer"
    const texto1 = "Graduanda em Ciência da Computação pela UFBA, buscando ampliar meus horizontes e adentrar o mercado de trabalho. Almejo mostrar minhas habilidades a partir da criação de designes com muita personalidade, que transmitam os sentimentos certos para cada tipo de situação e tornem a experiência de todos o mais prazerosa e intuitiva possível."
    const imgCargo1 = '../designIcon.svg'
    const rede1img1 = '../linkedinIcon.svg'
    const rede1link1 = 'https://www.linkedin.com/in/luísa-coelho-167194237/'
    const rede2img1 = '../beIcon.svg'
    const rede2link1 = ''
    const nome2 = 'Artur Mota'
    const imagem2 = '../artur.jpg'
    const cargo2 = 'CTO, Co-Founder & Developer'
    const texto2 = 'Graduando em Ciência da Computação pela UFBA e apaixonado pelas tecnologias e suas vertentes, em especial à área de Desenvolvimento Web. Atualmente, atuo como Coordenador de projetos e Desenvolvedor Front-End, utilizando React JS, Next Js, HTML, CSS e Javascript para codar meus projetos.'
    //const texto2 =
    const imgCargo2 = '../codIcon.svg'
    const rede1img2 = '../linkedinIcon.svg'
    const rede1link2 = 'https://www.linkedin.com/in/artur-mota-913b9a235/'
    const rede2img2 = '../gitIcon.svg'
    const rede2link2 = 'https://github.com/ArturMota19'

    const [items, setItems] = useState([
        { nome: nome1, imagem: imagem1, cargo: cargo1, texto: texto1,imgCargo: imgCargo1, rede1img: rede1img1, rede1link: rede1link1,rede2img: rede2img1,rede2link: rede2link1},
        { nome: nome2, imagem: imagem2, cargo: cargo2, texto: texto2,imgCargo: imgCargo2, rede1img: rede1img2, rede1link: rede1link2,rede2img: rede2img2,rede2link: rede2link2},
    ]);
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
                        <p className={styles.cargoText}>Graduanda em Ciência da Computação pela UFBA, buscando ampliar meus horizontes e adentrar o mercado de trabalho. Almejo mostrar minhas habilidades a partir da criação de designes com muita personalidade, que transmitam os sentimentos certos para cada tipo de situação e tornem a experiência de todos o mais prazerosa e intuitiva possível.</p>
                        <img src='../designIcon.svg'/>
                        <section className={styles.redesDiv}>
                            <h1>Veja mais do meu trabalho:</h1>
                            <div className={styles.apenasRedes}>
                                <a href='https://www.linkedin.com/in/luísa-coelho-167194237/' target="_blank">
                                    <div className={styles.buttonRedes}>
                                        <img src='../linkedinIcon.svg'/>
                                    </div>
                                </a>
                                <a href='' target='_blank'>
                                    <div className={styles.buttonRedes}>
                                        <img src='../beIcon.svg'/>
                                    </div>
                                </a>
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
                        <p className={styles.cargoText}>Graduando em Ciência da Computação pela UFBA e apaixonado pelas tecnologias e suas vertentes, em especial à área de Desenvolvimento Web. Atualmente, atuo como Coordenador de projetos e Desenvolvedor Front-End, utilizando React JS, Next Js, HTML, CSS e Javascript para codar meus projetos.</p>
                        <img src='../codIcon.svg'/>
                        <section className={styles.redesDiv}>
                            <h1>Veja mais do meu trabalho:</h1>
                            <div className={styles.apenasRedes}>
                                <a href='https://www.linkedin.com/in/artur-mota-913b9a235/' target="_blank">
                                    <div className={styles.buttonRedes}>
                                        <img src='../linkedinIcon.svg'/>
                                    </div>
                                </a>
                                <a href='https://github.com/ArturMota19' target='_blank'>
                                    <div className={styles.buttonRedes}>
                                        <img src='../gitIcon.svg'/>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className={styles.equipeSectionMobile}> 
                <Carousel>
                    {items.map((item) => (
                        <CardQuemSomos key={item.id} nome={item.nome} imagem={item.imagem} 
                        cargo={item.cargo} texto={item.texto} imgCargo={item.imgCargo} 
                        rede1img={item.rede1img} rede1link={item.rede1link} rede2img={item.rede2img} 
                        rede2link={item.rede2link}></CardQuemSomos>
                    ))}
                </Carousel>
            </section>
        </section>
    </main>
  )
}
export default QuemSomos
