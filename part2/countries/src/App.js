import './App.css';
import axios  from "axios";
import { React, useEffect, useState  } from "react";
import CountriesList from './components/CountriesList';

const App = () => {

  const [wantedCountry, setWantedCountry] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])
  
  useEffect(() => {
    console.log(`https://restcountries.com/v3.1/name/${wantedCountry}`);
    axios
      .get(`https://restcountries.com/v3.1/name/${wantedCountry}`)
      .then(response => {
        setCountriesToShow(response.data)
      })
  }, [wantedCountry])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleWantedCountryChange = (e) => {
    /* console.log(e.target.value); */
    setWantedCountry(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Find countries</label>
        <input type="text" onChange={handleWantedCountryChange}/>
      </form>

      <CountriesList countries={countriesToShow} />

    </>  
  )
}

export default App;
