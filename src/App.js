import React , {useEffect, useState} from 'react';
import Countries from './components/Countries';  
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
    console.log(data)
    console.log(data.region)     
  }

  const getCountriesByName = async () => {  //forma alternativa de chamar fetch request
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`)
    const data = await response.json()
    setCountries(data)
    console.log(data)
       
  } //11/04 Está dando um erro que não atrapalha na visualização, mas é um erro. Quando a pesquisa está vazia ao abrir a aplicação

  const getCountriesByRegion = async () => {  //forma alternativa de chamar fetch request
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    const data = await response.json()
    setCountries(data)
    console.log(data)
    console.log(data.region)    
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const updateRegion = e => {
    setRegion(e.target.value)
  }

  const getRegion = e => {
    setRegion(region)
  }



  return (
    <div className="App">
      <form onSubmit={getSearch , getRegion}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Pesquisar</button>
        <label>Filter by Region:</label>
        <select type="submit" onChange={updateRegion} name="Filter by Region">
          <option selected></option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Polar</option> 
        </select>        
      </form>

      {countries.map(countries => (
        <Countries 
        key={countries.name}      
        flag={countries.flag} 
        name={countries.name} 
        population={countries.population} 
        region={countries.region} 
        capital={countries.capital} />
      ))}

    </div>
  );
}

export default App;
