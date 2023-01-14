import './main.css'
import { apiCountryReturn, ReturnApiCountry } from '../input-country-list/input-country-list'

export default function Main() {

    console.log(ReturnApiCountry)
    console.log(fetch('https://restcountries.com/v3.1/all'))
    apiCountryReturn();

    return(
        <>
            <header>
                <h1>Where in the world?</h1>
                <button className="mode">Dark Mode</button>
            </header>
            <main>
                <div className='filters'>
                    <input type="search" name="country" id="country" placeholder='Search for a country...' />
                    <select name="filter-region" id="filter-region" placeholder='Filter by Region'>
                        <option value="default">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <ul className='country-list'>

                </ul>

            </main>
        </>
    )

}