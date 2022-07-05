
import './App.css';
import { useEffect, useState} from 'react';


function App(){
  const [initialRepo, setinitialRepo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [order, setOrder] = useState(1);
  const [columOrder, setColumOrder] = useState('name');

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
    const targetlow = target.value.toLowerCase()
    const filterepo = repos.filter(({ name }) => name.toLowerCase().includes(target.value.toLowerCase()));
    

    setRepos(filterepo);

  }
  const handleOrder = fieldName => {
    setOrder(-order)
    setColumOrder(fieldName)

  };

  var reposo = repos.sort(( a, b ) => { 
    return a[columOrder] < b[columOrder] ? -order : order;
  })

  return (
    <div className="App">
      <div className='intro-container'>
        <div >
          <img className='profile-image' src="https://avatars.githubusercontent.com/u/88653294?v=4" width={200} height={200} alt="Profile"></img>
        </div>
        <h1>
          Bem-vindo(a) ao repositório de <a className="linkedinlink" href='https://www.linkedin.com/in/matheus-geambastiane-/' target="_blank">Matheus Geambastiane.</a> 
          
        </h1>
      </div>
      <div className="input-cotainer">
        <input type="text" placeholder='Pesquise por nome do repositório' className="input-query" onChange={ handleChange }></input>
      </div>
      <div>

          <button className="order-button" onClick={ e => handleOrder('name')}> Ordem alfabética</button>

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