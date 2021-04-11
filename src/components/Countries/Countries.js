import React from 'react';

const Countries = ({flag, name,population,region,capital}) => {
    return (
        <div title="get details">
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <p>População: {population}</p>
            <p>Continente: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    )
}

export default Countries