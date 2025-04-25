import { use, useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../Campo"
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [cor, setCor] = useState('')


    const onSalvar = (evento) => {
        evento.preventDefault()

        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={onSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card
                </Botao>

            </form>

            <form onSubmit={onSalvar}>
                <h2>Preencher Dados para criar novo Time</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite o nome da cor"
                    value={cargo}
                    aoAlterado={valor => setCor(valor)}
                />

                <Botao>Criar Time
                </Botao>

            </form>
        </section>
    )
}

export default Formulario;