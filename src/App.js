import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF',
    },
    ,
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    debugger
    console.log("Colaborador add =>", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSegundaria={time.corSegundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      <Rodape />
    </div>
  );
}

export default App;
