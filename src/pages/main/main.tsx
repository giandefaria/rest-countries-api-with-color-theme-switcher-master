import './main.css'
import { EventListenerSearchCountryByTheName, listenerSelectRegionsFilter, ReturnApiCountry } from '../../components/input-country-list/input-country-list'
import { useEffect } from 'react';

export let countryList: HTMLElement;
export let searchCountry: HTMLInputElement;

export default function Main() {

    useEffect(() =>  {
        countryList = document.querySelector('.country-list') as HTMLElement;
        searchCountry = document.querySelector('#search-country') as HTMLInputElement;
        ReturnApiCountry();
        listenerSelectRegionsFilter(); //adiciono um listener nos filtros dentro da tag select, e altero a lista de países a depender da região selecionada
        EventListenerSearchCountryByTheName(); //adiciono um listener no input de pesquisa por nome

    }, [])


    return(
        <>
            <header>
                <section className='width-container'>
                    <h1>Where in the world?</h1>
                    <button className="mode">Dark Mode</button>
                </section>
            </header>
            <main>
                <section className='width-container'>
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
                </section>

            </main>
        </>
    )

}