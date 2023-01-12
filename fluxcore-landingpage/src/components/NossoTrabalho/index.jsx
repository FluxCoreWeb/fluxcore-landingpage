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
    </main>
  )
}
export default NossoTrabalho
