import './Select.css'

const Select = (props) => {

    //linha 9 e 10  faz um select com as opções de series que é um props turmas que lista de acordo com o *nome* do array da linha 8 do App 
    return (
        <div className='option'>
            <label>{props.label}</label>
                <select onChange={evento => props.preenchido(evento.target.value)} required={props.fundamental} value={props.value}>
                    {props.series.map(serie => {return <option key={serie}>{serie}</option>})}
                </select>
        </div>
    )
}

export default Select