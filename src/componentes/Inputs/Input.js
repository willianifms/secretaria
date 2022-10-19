import './Input.css'

const Input = (props) => {
   
   
    return(
        <div className='input'>
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={evento => props.preenchido(evento.target.value)} required={props.fundamental} placeholder={props.placeholder} type={props.type}/>
        </div>
    )
}
export default Input