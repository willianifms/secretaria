import { useState } from 'react'
import './Form.css'
import Input from '../Inputs/Input'
import Select from '../Select/Select'
import Btn from '../Btn/Btn'

const Form = (props) => {
//linha 9 a linha 13 esta declarando as variaveis para a mudança de estado
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [CPF, setCPF] = useState('')
    const [mae, setMae] = useState('')
    const [ano, setAno] = useState('')


    const Salvar = (evento) => {
//linhs 19: evento do botao para enviar os dadosde formulario
//linha 20: declarando os valores dos inputs para ser separados 
        evento.preventDefault()
        props.alunoCadastrado({
            nome,
            data,
            CPF,
            mae,
            ano
        })
    }
    //preenchido faz a mudança de valor de acordo com que foi preenchido pelo usuario

    return(
        <section className='container'>
            <form onSubmit={Salvar}>
                <h2>Cadastro do aluno</h2>
                <Input 
                 fundamental={true} label="Nome do aluno" placeholder="Digite seu nome" value={nome} preenchido={value => setNome(value)}
                />
                <Input 
                 fundamental={true} label="Data de nascimento" placeholder="Digite sua data de nascimento" value={data} type="date" preenchido={value => setData(value)}
                />
                <Input 
                 fundamental={true} label="CPF" placeholder="Digite CPF do aluno" value={CPF} type="number" preenchido={value => setCPF(value)}
                />
                <Input 
                 fundamental={true} label="Nome da mãe" placeholder="Digite o nome da mãe" value={mae} preenchido={value => setMae(value)}
                />
                <Select 
                 fundamental={true} label="Série" series={props.turmas} value={ano} preenchido={value => setAno(value)}
                />
                <Btn >
                    Salvar
                </Btn>
            </form>
        </section>
    )
}

export default Form