import { React } from 'react'

const Country = ({country}) => {
    console.log(country);
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Population: {country.population}</p>

            <h3>Languajes</h3>
            <ul>
                {
                    country.languages.map(language => {
                        <li>{language}</li>
                    })
                }
            </ul>

        </>
    )
}

export default Country