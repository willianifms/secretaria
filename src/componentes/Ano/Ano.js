//import Aluno from '../Aluno/Aluno'
import './Ano.css'



const Ano = (props) => {
    return (
        <section className='serie' style={{ backgroundColor: props.fundo} }>
            <div className='titulo'>
            <h3 style={{ borderColor: props.borda, color:props.letra} } >{props.nome}</h3>
            </div>
            <div className={props.classe} >
                <div className='conteudo'>
            {props.conteudo}
            </div>
          
            </div>
        </section>
    )
} 

export default Ano