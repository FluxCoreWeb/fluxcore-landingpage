import styles from './styles.module.css'
import { useState } from 'react'
function NossoTrabalho() {
  const [count, setCount] = useState(1)
  const [img, setImg] = useState('../public/contactIcon.svg')
  const title1 = 'Contato'
  const title2 = 'Contrato'
  const title3 = 'Início do Projeto'
  const title4 = 'Design'
  const title5 = 'Código'
  const title6 = 'Finalização'
  const img1 = '../public/contactIcon.svg'
  const img2 = '../public/contractIcon.svg'
  const img3 = '../public/begIcon.svg'
  const img4 = '../public/designIcon.svg'
  const img5 = '../public/codIcon.svg'
  const img6 = '../public/finishIcon.svg'
  const text1 = 'Seja você que fale conosco ou nós que vamos até você, o primeiro passo é sempre muito importante: nele conheceremos você melhor e entenderemos o que deseja. Por isso, é muito importante que você nos deixe a par tanto das informações fundamentais do projeto quanto das suas expectativas para o nosso trabalho juntos. Não se preocupe, nós guiaremos esse contato e estaremos sempre disponíveis para dúvidas e colocações.'
  const text2 = 'Depois de conversarmos, a próxima etapa é o fechamento do contrato. É sempre importante que os termos de qualquer serviço prestado sejam redigidos e aprovados pelo prestador do serviço em questão e pelo empregador, afinal, trabalharemos todos juntos.'
  const text3 = 'Agora que já nos conhecemos e fechamos um contrato, daremos início ao projeto em si. Nessa fase, conversaremos com você sobre aspectos mais específicos do design e do funcionamento da sua Landing Page. Sabemos que é difícil lembrar de tudo, por isso, temos materiais preparados para ajudar você a escolher cores, fontes e inspirações.'
  const text4 = 'Na quarta etapa a mágica começa: seu projeto vai sair do papel, Aqui, faremos um design especial pra você, de acordo cmo o que foi conversado durante o primeiro contato e a etapa anterior. Para garantir que a sua Landing Page será perfeita para você, estaremos sempre te atualizando e compartilhando cada decisão, sinta-se a vontade para fazer perguntas e colocações, afinal, o projeto é seu, nós apenas ajudaremos a tirá-lo do papel.'
  const text5 = 'Aqui finalmente veremos a ação: o site será de fato produzido pelos nosso programadores. É muito importante entendermos que o código será iniciado apenas após a sua aprovação do design, por isso, tenha certeza de que está satisfeito(a) com a etapa anterior, para que não aconteçam mudanças bruscas de layout após o início do passo 5.'
  const text6 = 'Acabamos! Agora você tem uma Landing Page novinha em folha para compartilhar e arrecadar clientes! Entregaremos para você seu site novinho e sob medida mediante pagamento acordado na etapa 2.'
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
            <p className={styles.textInfo}>Lorem ipsum dolor sit amet consectetur. Sit porttitor morbi ut duis. Nisl mattis faucibus arcu maecenas 
              proin. Pellentesque in fermentum elit sapien. Imperdiet dignissim elit non justo egestas. Laoreet donec 
              rhoncus in suspendisse orci nisl ac volutpat ultrices. Tincidunt sem orci et felis scelerisque massa dui. 
              Nisi eleifend arcu purus dolor neque blandit elit lacus nibh. Vitae mauris amet eu risus tortor orci euismod.</p>
          </div>
          <div className={styles.bgNossoTrabalho}>
            <img className={styles.imgNossoTrabalho} src='../public/bgNossoTrabalho.svg'/>
          </div>
        </section>
        <div className={styles.bgProcess}>
          <section className={styles.processoWrapper}>
            <h1 className={styles.titleProcess}>Entenda o processo:</h1>
            <div className={styles.cardsDiv}>
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
              <img onClick={() => decCount()} src='../public/leftArrow.svg'/>
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
              <img onClick={() => sumCount()} src='../public/rightArrow.svg'/>
            </div>
          </section>
        </div>
    </main>
  )
}
export default NossoTrabalho
