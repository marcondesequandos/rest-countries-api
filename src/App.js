import React , {useEffect, useState} from 'react';
import Countries from './components/Countries/Countries';  
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

//implementar retorno de erro

  useEffect(()=>{
    getCountries()
    getCountriesByName()
    getCountriesByRegion() 

  }, [query, region]) // com os brackets vazios [] como segundo argumento o useEffect roda apenas uma vez na montagem da aplicação, colocando as consts ele roda quando forem chamadas

  const getCountries = async () => {  //forma alternativa de chamar fetch request
    const response = await fetch('https://restcountries.eu/rest/v2/all/')
    const data = await response.json()
    setCountries(data)
   
    

   
   
  }


//https://www.youtube.com/watch?v=DTBta08fXGU ainda preciso tratar o erro e vai ser com conditional rendering deixa pra outro dia... vamos tratar do visual do site

  const getCountriesByName = async () => {  //forma alternativa de chamar fetch request

    if (query === '')
    {
      return null
    } else {
    
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`)

    console.log(response.ok)
    console.log(response.status)

    if (response.status >= 400) {
      const message = `An error has occured: ${response.status}`;
      
    }

    const data = await response.json()
    setCountries(data)
    
    console.log(data)


    } 


  
       
  } 



  






  const getCountriesByRegion = async () => {  //forma alternativa de chamar fetch request

    if (region === '')
    {
      return null
    } else {

      const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      const data = await response.json()
      setCountries(data)

    }   
        
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {    
    e.preventDefault()
    setQuery(search)
    console.log(search)   
    setSearch('')
    
  }

  const updateRegion = e => {
    setRegion(e.target.value)

   
    
  }



  const getRegion = e => {
    e.preventDefault()    
    setRegion(region)
    console.log(region)
    
    
    
  }




  return (
    <main className="App">
      <div className="header">
        <h1>Where in the world?</h1>       
      </div>
      <div class="content">
        <div className="forms">
          <form className="search-form" onSubmit={getSearch}>
            <input className="search-bar" type="text" placeholder="Search for a country..." value={search} onChange={updateSearch}/>
          </form>

        
        
          <form className="get-region"id={"Form"} onSubmit={getRegion}>                  
            <select className="filter-region" value={region}  name="Filter by Region" placeholder="Filter By Region" onChange={updateRegion}>
              <option></option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
              <option>Polar</option> 
            </select>      
          </form>                   
        </div>
        <div>
          <ul className="countries">
          {countries.map(countries =>  (
            
            <Countries 
            key={countries.name}      
            flag={countries.flag} 
            name={countries.name} 
            population={countries.population} 
            region={countries.region} 
            capital={countries.capital} 
            code={countries.alpha2Code}/>
            
            
          ))
          }
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
