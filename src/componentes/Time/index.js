import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

const Time = ({ cor, colaboradores, aoDeletar, mudarCorTime }) => {

    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundImage: "url(/imagens/fundo.png)", backgroundColor: hexToRgba(cor, '0.6') }}>
            <input value={cor} onChange={event => mudarCorTime(event.target.value, colaboradores.id)} type='color' className='input-color'></input>
            <h3 style={{ borderColor: cor }} > {colaboradores.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {

                    return <Colaborador
                        colaborador={colaborador}
                        key={colaborador.nome}
                        aoDeletar={aoDeletar}
                        corDeFundo={cor}
                    />
                })}
            </div>
        </section>
    )
}

export default Time