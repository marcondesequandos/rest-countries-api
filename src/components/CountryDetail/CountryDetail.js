import React , { useState , useEffect , useContext } from 'react';

const CountryDetail = (props)=> {

    const MyContext = React.createContext("col")
    
    const [countryCode, setCountryCode] = useState({
        code: '',
    })
    const [languages, setLanguages] = useState([])
    const [borders, setBorders] = useState([])


    const code = useContext(MyContext)
    const currentCountry = props.match.params.code

    useEffect(()=>{
        getCountryDetail()
     
      }, [code])


    const getCountryDetail = async () => {  
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${currentCountry}`)
        const data = await response.json()
        
        setCountryCode(data)
        console.log(data)
    
        
        const langs = data.languages
     

        let l = []

        for(var i = 0; i < langs.length; i++) {
            l.push(langs[i].name)
        }

        setLanguages(l)

        const bords = data.borders
     

        let b = []

        for(var i = 0; i < bords.length; i++) {
            b.push(bords[i])
        }

        setBorders(b)

        console.log(borders)

        
      
            
      }


      const listLanguages = languages.map((languages) =>
        <li>{languages}</li>
    
      )

      const listBorders = borders.map((borders) =>
      <li>{borders}</li>
  
    )
      
      

 

   

   


    return (                        
               
        <div key={countryCode.name}>            
            <img src={countryCode.flag} alt=""></img>
            <h1>{countryCode.name}</h1>
            <p>População: {countryCode.population}</p>
            <p>Continente: {countryCode.region}</p>
            <p>Continente: {countryCode.capital}</p>
            <ul key={listLanguages}>{listLanguages}</ul>
            <ul key={listBorders}>{listBorders}</ul>  
            
            
        
          
            

            
            
        </div>               
       
    )
}

//agora precisa fazer uma func getdetail com um window.location /countrydetail pra ser chamada ali no listborders

export default CountryDetail