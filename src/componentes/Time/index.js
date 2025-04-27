import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCorTime, aoFavoritar }) => {

    return (
        colaboradores.length > 0 &&
        <section className="time"
            style={{
                backgroundImage: "url(/imagens/fundo.png)",
                backgroundColor: hexToRgba(time.cor, '0.6')
            }}
        >
            <input type='color'
                className='input-color'
                value={time.cor}
                onChange={event => mudarCorTime(event.target.value, time.id)}
            />

            <h3 style={{ borderColor: time.cor }} > {colaboradores.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {

                    return (
                        <Colaborador
                            colaborador={colaborador}
                            key={colaborador.nome}
                            aoDeletar={aoDeletar}
                            corDeFundo={time.cor}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time