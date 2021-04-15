import React from 'react';
import style from './country.module.css'

const Countries = ({flag, name,population,region,capital,code}) => {

    const getDetail = ()=>
    {
        window.location = `/countryDetail/${code}`
    }

    return (
        <li className={style.country} onClick={getDetail} title="Get Country Details">
            
            <a>
                <div className="img-container">
                    <img src={flag} alt=""/>
                </div>
                <div>
                    <h1>{name}</h1>
                    <ul>
                        <li><strong className="bold">Population:</strong> {population}</li>
                        <li><strong className="bold">Region:</strong> {region}</li>
                        <li><strong className="bold">Capital:</strong> {capital}</li>
                    </ul>
                </div>
            </a>
        </li>

    )
}

export default Countries