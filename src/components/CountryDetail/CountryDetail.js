import React , { useState , useEffect , useContext } from 'react';

const CountryDetail = (props)=> {

    const MyContext = React.createContext("col")
    
    const [countryCode, setCountryCode] = useState({
        code: '',
    })
    const code = useContext(MyContext)
    const currentCountry = props.match.params.code

    useEffect(()=>{
        getCountryDetail()
     
      }, [code])


    const getCountryDetail = async () => {  //forma alternativa de chamar fetch request
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${currentCountry}`)
        const data = await response.json()
        console.log(currentCountry)
        setCountryCode(data)
        console.log(data)
            
      }

 

    const languages = countryCode.languages

    console.log(languages[0].name)
    console.log(languages[1].name)


    return (                        
               
        <div key={countryCode.name}>            
            <img src={countryCode.flag} alt=""></img>
            <h1>{countryCode.name}</h1>
            <p>População: {countryCode.population}</p>
            <p>Continente: {countryCode.region}</p>
            <p>Continente: {countryCode.capital}</p>
            <p>Continente: {languages[0].name}</p>
            <p>Continente: {languages[1].name}</p>
            

            
            
        </div>               
       
    )
}

export default CountryDetail