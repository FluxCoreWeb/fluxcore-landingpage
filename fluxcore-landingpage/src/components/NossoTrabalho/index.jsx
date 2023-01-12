import styles from './styles.module.css'
function NossoTrabalho() {
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
              <section className={styles.cardDestaque}>
                <div className={styles.titleCard}>
                  <h1>1. Contato</h1>
                  <img src='../public/contactIcon.svg'/>
                </div>
                <p className={styles.subtitleCard}>
                Seja você que fale conosco ou nós que vamos até você, o primeiro passo é sempre muito importante: 
                nele conheceremos você melhor e entenderemos o que deseja. Por isso, é muito importante que você nos 
                deixe a par tanto das informações fundamentais do projeto quanto das suas expectativas para o nosso 
                trabalho juntos. Não se preocupe, nós guiaremos esse contato e estaremos sempre disponíveis para dúvidas 
                e colocações.
                </p>
              </section>
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
          </section>
        </div>
    </main>
  )
}
export default NossoTrabalho
