import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({ corPrimaria, corSegundaria, colaboradores, nome, aoDeletar }) => {

    const css = { backgroundColor: corSegundaria }

    return (
        (colaboradores.length > 0) &&
        <section className="time" style={css}>
            <h3 style={{ borderColor: corPrimaria }} > {nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {

                    return <Colaborador
                        corDeFundo={corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} aoDeletar={() => { }} />
                })}
            </div>
        </section>
    )
}

export default Time