import React from 'react';

const Countries = ({flag, name,population,region,capital,code}) => {

    const getDetail = ()=>
    {
        window.location = `/countryDetail/${code}`
    }

    return (
        <div onClick={getDetail} style={{cursor: "pointer"}}title="Get Country Details">
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <p>População: {population}</p>
            <p>Continente: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    )
}

export default Countries