import { React } from "react"
import Country from "./Country";

const CountriesList = ({ countries }) => {
    console.log(countries.length);
    if (countries.length >= 10) {
        return (
            <p>To many matches, specify another filter</p>
        )       
    }

    if (countries.length === 1) {
        return (
            <Country country={countries[0]}/>
        )
    }

    return (
        <>
            <h3>Coincidences</h3>
            {
                countries.map((country, i) => (
                    <p key={i}>{country.name.common}</p>
                ))
            }
        </>
    )

}

export default CountriesList