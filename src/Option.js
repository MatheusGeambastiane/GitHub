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