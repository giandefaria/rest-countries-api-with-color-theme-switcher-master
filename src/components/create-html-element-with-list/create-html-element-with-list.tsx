import { countryList } from "../main/main";
import { Link } from 'react-router-dom'

//função que adicionará cada país no html da página
export function createCountryBox(flag: any, countryName: string, population: number, region: string, capital: string) {
    const li = document.createElement('li'); //const li criará uma lista
    li.className = "country-box" //essa lista terá essa className
    //dentro dessa lista conterá o seguinte elemento html
    li.innerHTML = 
    `
        <a href="/countryinfo${countryName}">
        <div class='flag'>
            <img src="${flag}" alt="flag" />
        </div>
        <div class='country-information'>
            <h1 class='country-name'>${countryName}</h1>
            <h2>Population:</h2> <p class='population'>${population}</p> <br>
            <h2>Region:</h2> <p class='region'>${region}</p> <br>
            <h2>Capital:</h2> <p class='capital'>${capital}</p> <br>
            
        </div>
        </a>
    
    `
    

    countryList.appendChild(li);
    
}

function dentroHtml(flag: any, countryName: string, population: number, region: string, capital: string) {
    return(
        <>
         <div className='flag'>
            <img src={flag} alt="flag" />
        </div>
        <div className='country-information'>
            <h1 className='country-name'>{countryName}</h1>
            <h2>Population:</h2> <p className='population'>{population}</p>
            <h2>Region:</h2> <p className='region'>{region}</p>
            <h2>Capital:</h2> <p className='capital'>{capital}</p>
        </div>
        </>
    )
}

//função que fará um map no objeto indicado como parâmetro, capturando as informações necessárias da resposta
//enviará as informações capturadas para a função createCountryBox que adicionará no html da página.
export function mapObj(obj: any) {
    countryList.innerHTML = ''; // limpo a lista antes de fazer o map com o novo objeto;
    obj.map( (obj: any) => {
        
        //console.log(obj) //aparece no console cada objeto
        const flags = obj.flags.png; //caputuro o link da bandeira
        const countryName = obj.name.common;  //capturo o nome do pais
        const population = obj.population; //adicionando tamanho população
        const region = obj.region; //adicionando a região do país
        const capital = obj.capital; //adicionando a capital
        createCountryBox(flags, countryName, population, region, capital); //executo a função que adicionará o box no html, indicando o atributo do objeto iterado no momento

    })
}