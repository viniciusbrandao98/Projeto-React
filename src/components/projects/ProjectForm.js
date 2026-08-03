import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Insira o nome do projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
            />
              <Input 
                type="Number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />


        </form>
    )
}

export default ProjectForm