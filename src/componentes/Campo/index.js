import './Campo.css'

const Campo = ({ type = 'text', label, valor, obrigatorio = false, placeholder, aoAlterado }) => {


    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={event => aoAlterado(event.target.value)}
                required={obrigatorio}
                {...(type !== 'color' && { placeholder })}
            />
        </div>
    )
}

export default Campo