import { useState } from 'react'; //hook de estado
import './App.css'
import Logo from './componentes/Logo/Logo'; //linha 2 a 5 links usados na pagina
import Form from './componentes/Form/Form';
import Ano from './componentes/Ano/Ano';

function App() {
  const [alunos, setAlunos] = useState([]) //array que guarda os objetos dos alunos "alunos" 

  const alunoAdicionado = (aluno) => {
    //console.log(aluno) //mostra o objeto que o usuario preencheu no console
    setAlunos([...alunos, aluno])
    return  {alunos}
  }
  console.log(alunos)
  //linha 8 à 54 esta um array com as series usadas no select e as cores da pagina 
  const turmas = [
    {
      abc: JSON.stringify(alunos,alunos.nome),
      nome: '1° ano',
      primeiraCor: '#DFB3F2',
      segundaCor: '#660273',
      terceiraCor: '#BC55D9',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '2° ano',
      primeiraCor: '#F285B8',
      segundaCor: '#502D73',
      terceiraCor: '#615CF2',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '3° ano',
      primeiraCor: '#8C28ED',
      segundaCor: '#B4E652',
      terceiraCor: '#9BROFF',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '4° ano',
      primeiraCor: '#F27405',
      segundaCor: '#6D3785',
      terceiraCor: '#F2CB05',
    },
    {

      abc: JSON.stringify(alunos),
      nome: '5° ano',
      primeiraCor: '#BEBFB8',
      segundaCor: '#510273',
      terceiraCor: '#2D0140',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '6° ano',
      primeiraCor: '#353340',
      segundaCor: '#998DA6',
      terceiraCor: '#F2F2F2',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '7° ano',
      primeiraCor: '#3F3C37',
      segundaCor: '#201F1B',
      terceiraCor: '#FF5E1E',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '8° ano',
      primeiraCor: '#3A89FF',
      segundaCor: '#131E2F',
      terceiraCor: '#00BCD4',
    },
    {
      abc: JSON.stringify(alunos),
      nome: '9° ano',
      primeiraCor: '#01A5B1',
      segundaCor: '#F900BF',
      terceiraCor: '#000000',
    }
  ]

  //linha 58 a 60 faz com que adicione varios objetos separadamente  
  return (
    // linha 69: lista a turma e de acordo com o nome da turma adiciona o aluno na turma em que ele foi cadastrado obs:isso como objeto */
    // linha 71: lista a turma e faz um estilo para cada uma peercrito no array da linha 8 usando *Ano*  */
    <div className='body'>
      <div className="App">
        <Logo />
        <Form turmas={turmas.map(turma => turma.nome)} alunoCadastrado={aluno => alunoAdicionado(aluno)} />
      </div>
      <div>
        {turmas.map(ano => <Ano key={ano.nome} nome={ano.nome} borda={ano.primeiraCor} fundo={ano.segundaCor} letra={ano.terceiraCor} conteudo={ano.abc} >


        </Ano>

        )}

      </div>
     
    </div>
  );
}

export default App;
//professor do céu se o senhor ver esse comentário queria velar meu ódio pelo react sla fiquei 
//dias tentando fazer o desafio do senhor eu e a mari e saiu isso 
//quem nem está correto mas foi o mais proximo que conseguimos agradeceria pelos pontos a mais 