
import './App.css';
import { useEffect, useState} from 'react';

// export function App() {

//   const [ repositories, setRepositories ] = useState([])
//   // const [repos, setRepos] = useState([])

//   console.log(repositories)
  

//   useEffect( () => {
//     fetch('https://api.github.com/users/MatheusGeambastiane/repos').then( response => response.json())
//     .then( data => setRepositories(data))
    
//   }, [])

//   // const handleChange = ({ target}) => {

//   //   const filterrepo = repos.filter((repos) => repos.name.includes(target.value))
//   // }

  // return (
  //   <div className="App">
  //     <div className="input-cotainer">
  //       {/* <input type="text" className="input-query" onChange={ handleChange }> Insira aqui sua busca</input> */}
  //     </div>
  //     <div className="list-container">

  //       <ul>
  //         { repositories.map(repository => { 
  //           return (
              
              
  //             <ul>
  //               <h3> {repository.name}</h3>
  //               <h5> {repository.language}</h5>
  //               <a href={repository.html_url} target="_blank">Saiba Mais </a>

  //             </ul>
  //           )
  //         }) }
        
  //       </ul>
  //     </div>
  //   </div>
//   );
// }

function App(){
  const [initialRepo, setinitialRepo] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {

    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MatheusGeambastiane/repos');
        const data = await response.json();
        setinitialRepo(data);
        setRepos(data);
        console.log(setinitialRepo)
      
        
      } catch (error) {
        console.log(error);    
      }

    
      };
    fetchRepos();
  }, []);

  const handleChange = ({ target }) => {
    if(!target.value){
      setRepos(initialRepo);
      return
    }
    const filterepo = repos.filter((repository) => repository.name.includes(target.value))

    setRepos(filterepo);

  }
  return (
    <div className="App">
      <div className='intro-container'>
        <div>
          <img className='profile-image' src="https://avatars.githubusercontent.com/u/88653294?v=4" width={200} height={200} alt="Profile"></img>
        </div>
        <h1>
          Bem-vindo(a) ao repositório de Matheus Geambastiane. 
          
        </h1>
        <h2> Atualmente temos {repos.public} projetos no modo Público</h2>
      </div>
      <div className="input-cotainer">
        <input type="text" className="input-query" onChange={ handleChange }></input>
      </div>
      <div className="list-container">

        <ul>
          { repos.map((repository,index) => { 
            return (
              
              
              <ul key={repository.id}>
                <div className='card'>
                  <div className='card-title'> {repository.name}</div>
                  <div className='card-description'>Maior linguagem do projeto: {repository.language}</div>
                  <p>Descrição: {repository.description}</p>
                  
                  <a className='card-link'href={repository.html_url} target="_blank">Saiba Mais </a>
                </div>

              </ul>
            )
          }) }
        
        </ul>
      </div>
    </div>
  )}

export default App;