import './main.css'
import { ReturnApiCountry, ReturnCountryPerRegion } from '../input-country-list/input-country-list'
import { useEffect } from 'react';

export let countryList: HTMLElement;

export default function Main() {

    useEffect(() =>  {
        countryList = document.querySelector('.country-list') as HTMLElement;
        ReturnApiCountry();
        ReturnCountryPerRegion('europe');

    }, [])

    return(
        <>
            <header>
                <h1>Where in the world?</h1>
                <button className="mode">Dark Mode</button>
            </header>
            <main>
                <div className='filters'>
                    <input type="search" name="country" id="search-country" placeholder='Search for a country...' />
                    <select name="filter-region" id="filter-region" placeholder='Filter by Region'>
                        <option value="default">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
                <ul className='country-list'>

                </ul>

            </main>
        </>
    )

}