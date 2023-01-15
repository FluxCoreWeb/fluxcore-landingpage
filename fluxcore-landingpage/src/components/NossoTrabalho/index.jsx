import styles from './styles.module.css'
import { useRef, useState } from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './Card.jsx'
function NossoTrabalho() {
  const [count, setCount] = useState(1)
  const [img, setImg] = useState('../contactIcon.svg')
  const title1 = 'Contato'
  const title2 = 'Contrato'
  const title3 = 'Início do Projeto'
  const title4 = 'Design'
  const title5 = 'Código'
  const title6 = 'Finalização'
  const img1 = '../contactIcon.svg'
  const img2 = '../contractIcon.svg'
  const img3 = '../begIcon.svg'
  const img4 = '../designIcon.svg'
  const img5 = '../codIcon.svg'
  const img6 = '../finishIcon.svg'
  const text1 = 'Seja você que fale conosco ou nós que vamos até você, o primeiro passo é sempre muito importante: nele conheceremos você melhor e entenderemos o que deseja. Por isso, é muito importante que você nos deixe a par tanto das informações fundamentais do projeto quanto das suas expectativas para o nosso trabalho juntos. Não se preocupe, nós guiaremos esse contato e estaremos sempre disponíveis para dúvidas e colocações.'
  const text2 = 'Depois de conversarmos, a próxima etapa é o fechamento do contrato. É sempre importante que os termos de qualquer serviço prestado sejam redigidos e aprovados pelo prestador do serviço em questão e pelo empregador, afinal, trabalharemos todos juntos.'
  const text3 = 'Agora que já nos conhecemos e fechamos um contrato, daremos início ao projeto em si. Nessa fase, conversaremos com você sobre aspectos mais específicos do design e do funcionamento da sua Landing Page. Sabemos que é difícil lembrar de tudo, por isso, temos materiais preparados para ajudar você a escolher cores, fontes e inspirações.'
  const text4 = 'Na quarta etapa a mágica começa: seu projeto vai sair do papel, Aqui, faremos um design especial pra você, de acordo cmo o que foi conversado durante o primeiro contato e a etapa anterior. Para garantir que a sua Landing Page será perfeita para você, estaremos sempre te atualizando e compartilhando cada decisão, sinta-se a vontade para fazer perguntas e colocações, afinal, o projeto é seu, nós apenas ajudaremos a tirá-lo do papel.'
  const text5 = 'Aqui finalmente veremos a ação: o site será de fato produzido pelos nosso programadores. É muito importante entendermos que o código será iniciado apenas após a sua aprovação do design, por isso, tenha certeza de que está satisfeito(a) com a etapa anterior, para que não aconteçam mudanças bruscas de layout após o início do passo 5.'
  const text6 = 'Acabamos! Agora você tem uma Landing Page novinha em folha para compartilhar e arrecadar clientes! Entregaremos para você seu site novinho e sob medida mediante pagamento acordado na etapa 2.'
  
  const item = [
    { id: 1, titulo: title1, img: img1, subtitulo: text1 },
    { id: 2, titulo: title2, img: img2, subtitulo: text2 },
    { id: 3, titulo: title3, img: img3, subtitulo: text3 },
    { id: 4, titulo: title4, img: img4, subtitulo: text4 },
    { id: 5, titulo: title5, img: img5, subtitulo: text5 },
    { id: 6, titulo: title6, img: img6, subtitulo: text6 },
  ]
  const [items, setItems] = useState([
    { id: 1, titulo: title1, img: img1, subtitulo: text1 },
    { id: 2, titulo: title2, img: img2, subtitulo: text2 },
    { id: 3, titulo: title3, img: img3, subtitulo: text3 },
    { id: 4, titulo: title4, img: img4, subtitulo: text4 },
    { id: 5, titulo: title5, img: img5, subtitulo: text5 },
    { id: 6, titulo: title6, img: img6, subtitulo: text6 },
  ]);
  const sectionCarrossel = useRef(null)
  
  function sumCount(){
    if(count != 6){
      setCount(count + 1);
    }
  }
  function decCount(){
    if(count != 1){
      setCount(count - 1);
    }
  }
  return (
    <main className={styles.wrapperNossoTrab}>
        <section>
          <div className={styles.landingPageInfo}>
            <h2 className={styles.title}>Antes de tudo</h2>
            <h1 className={styles.subtitle}>O que é uma <span className={styles.spanSubtitle}>Landing Page?</span></h1>
            <p className={styles.textInfo}>Uma Landing Page ou, em português, “Página de aterrisagem”, nada mais é do que 
            um site compacto com todas as informações que seu cliente pode precisar. Ela proporciona ao visitante um 
            primeiro contato com você e o seu negócio muito mais personalizado, além de permitir que você ajuste cada 
            pedacinho dessa experiência do jeito que quiser. Quer um exemplo? A nossa própria página inicial é uma 
            Landing Page feita por nós! Se quiser ver um pouco mais do nosso trabalho, visite nosso <a href='https://www.instagram.com/fluxcore.web/'><span className={styles.spanP}>perfil no Instagram.</span></a></p>
          </div>
          <div className={styles.bgNossoTrabalho}>
            <img className={styles.imgNossoTrabalho} src='../bgNossoTrabalho.svg'/>
          </div>
        </section>
        <div className={styles.bgProcess}>
          <section className={styles.processoWrapper}>
            <h1 className={styles.titleProcess}>Entenda o processo:</h1>
            <div className={styles.cardsDiv}>
            <div className={styles.cardDestaqueDesktop}>
                {count == 1 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title1}</h1>
                    <img src={img1}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text1}
                  </p>
                </section>
                }
                {count == 2 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title2}</h1>
                    <img src={img2}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text2}
                  </p>
                </section>
                }
                {count == 3 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title3}</h1>
                    <img src={img3}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text3}
                  </p>
                </section>
                }
                {count == 4 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title4}</h1>
                    <img src={img4}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text4}
                  </p>
                </section>
                }
                {count == 5 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title5}</h1>
                    <img src={img5}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text5}
                  </p>
                </section>
                }
                {count == 6 &&
                  <section className={styles.cardDestaque}>
                  <div className={styles.titleCard}>
                    <h1>{count}. {title6}</h1>
                    <img src={img6}/>
                  </div>
                  <p className={styles.subtitleCard}>
                    {text6}
                  </p>
                  <div className={styles.divButton}>
                    <button className={styles.buttonBudget}>Faça um orçamento</button>
                  </div>
                </section>
                }
              </div>
              <div className={styles.carrosselDiv} ref={sectionCarrossel}>
                <div className={styles.cardDestaqueMobile}>
                <Carousel>
                  {items.map((item) => (
                    <Card key={item.id} id={item.id} titulo={item.titulo} imagem={item.img} texto={item.subtitulo}></Card>
                  ))}
                </Carousel>
                </div>
              </div>
              <div className={styles.fundoEmb}>
                <h1 className={styles.titleFundoEmb}>
                  6 - Lorem ipsum
                </h1>
                <p className={styles.subtitleFundoEmb}>Lorem ipsum dolor sit amet consectetur. Nisl ac eu leo a nulla. Justo euismod 
                  ornare fringilla ornare. Pretium aliquam mauris aliquam quis aliquam tempor lacus ac. 
                  Sed faucibus vel iaculis accumsan imperdiet suspendisse. Mauris viverra egestas laoreet
                  vitae amet sed urna facilisi. Sapien elit felis commodo nascetur urna. Nunc in nunc orci 
                  nisl tincidunt. Vitae ultricies eu viverra purus suscipit. Varius urna at fermentum sed.
                  Lorem ipsum dolor sit amet consectetur. Nisl ac eu leo a nulla. Justo euismod 
                  ornare fringilla ornare.</p>
                </div>
            </div>
            <div className={styles.pagProcess}>
              <img onClick={() => decCount()} id={styles.arrowDesktop} src='../leftArrow.svg'/>
              <h1>{count}</h1>
              {count == 1 && <div className={styles.circleSelected}/>}
              {count != 1 && <div onClick={() => setCount(1)} className={styles.circleSelect}/>}
              {count == 2 && <div className={styles.circleSelected}/>}
              {count != 2 && <div onClick={() => setCount(2)} className={styles.circleSelect}/>}
              {count == 3 && <div className={styles.circleSelected}/>}
              {count != 3 && <div onClick={() => setCount(3)} className={styles.circleSelect}/>}
              {count == 4 && <div className={styles.circleSelected}/>}
              {count != 4 && <div onClick={() => setCount(4)} className={styles.circleSelect}/>}
              {count == 5 && <div className={styles.circleSelected}/>}
              {count != 5 && <div onClick={() => setCount(5)} className={styles.circleSelect}/>}
              {count == 6 && <div className={styles.circleSelected}/>}
              {count != 6 && <div onClick={() => setCount(6)} className={styles.circleSelect}/>}
              <img onClick={() => sumCount()} id={styles.arrowDesktop} src='../rightArrow.svg'/>
            </div>
          </section>
        </div>
    </main>
  )
}
export default NossoTrabalho
