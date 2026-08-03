import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
function Home() {
    return(
      <section className={styles.home_container}>
        <h1>Bem vindo ao <span>Your Project</span></h1>
        <p>Comece gerenciar seus projetos agora mesmo </p>
        <LinkButton to="/newprojects" text="Novo Projeto"/>
        <img src={savings} alt="Your Project" />
      </section>
    )
}

export default Home