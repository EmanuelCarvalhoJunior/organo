import "./Colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
        <div className="colaborador">
            <IoMdCloseCircle size={25} className="deletar" onClick={aoDeletar}>deletar</IoMdCloseCircle>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export { IoMdCloseCircle }
export default Colaborador;