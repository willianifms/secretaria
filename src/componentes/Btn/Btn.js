import './Btn.css'


const Btn = (props) => {

    return(
        <button className='botao'>
            {props.children}
        </button>
    )

}
export default Btn