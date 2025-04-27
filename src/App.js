import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',

    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',

    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',

    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#A6D157',

    }
  ])


  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoColaboradorAdicionado = (colaborador) => {
    console.log("Colaborador add =>", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    console.log('Deletar colaborador : ', id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => (
      time.id === id ? { ...time, cor: cor } : time
    )));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)} />
      <h1 className='organizacao'> Minha Organização</h1>
      {times.map((time, indice) =>
        <Time
          time={time}
          mudarCorTime={mudarCorTime}
          key={indice}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)
      }
      <Rodape />
    </div>
  );
}

export default App;
