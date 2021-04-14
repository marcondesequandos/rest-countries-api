import React , {useEffect, useState} from 'react';
import Countries from './components/Countries/Countries';  
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')



  useEffect(()=>{
    getCountries()
    getCountriesByName()
    getCountriesByRegion() 

  }, [query, region]) // com os brackets vazios [] como segundo argumento o useEffect roda apenas uma vez na montagem da aplicação, colocando as consts ele roda quando forem chamadas

  const getCountries = async () => {  //forma alternativa de chamar fetch request
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    setCountries(data)
   
    

   
   
  }

  const getCountriesByName = async () => {  //forma alternativa de chamar fetch request

    if (query === '')
    {
      return null
    } else {
    
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`)
    const data = await response.json()
    setCountries(data)


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
    preventDefault(e)    
    setRegion(region)
    console.log(region)
    
    
    
  }




  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Pesquisar</button>
      </form>
      <form id={"Form"} onSubmit={getRegion}>
        <label>Filter by Region:</label>
        <input  className="search-bar" type="text" value={region} onChange={updateSearch}/>
        <select value={region}  name="Filter by Region" onChange={updateRegion}>
          <option></option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Polar</option> 
        </select>      
      </form>



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

    </div>
  );
}

export default App;
