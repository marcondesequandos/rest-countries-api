import React , {useEffect, useState} from 'react';
import Countries from './components/Countries';  
import './App.css';

function App() {

  const [countries, setCountries] = useState([])



  useEffect(()=>{
    getCountries()
  }, []) // com os brackets vazios [] como segundo argumento o useEffect roda apenas uma vez na montagem da aplicação, colocando as consts ele roda quando forem chamadas

  const getCountries = async () => {  //forma alternativa de chamar fetch request
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    setCountries(data)
    console.log(data)    
  }

  return (
    <div className="App">
      <form>
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Pesquisar</button>        
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
