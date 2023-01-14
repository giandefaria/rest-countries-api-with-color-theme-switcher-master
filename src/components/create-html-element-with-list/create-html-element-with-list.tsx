import { countryList } from "../main/main";

//função que adicionará cada país no html da página
export function createCountryBox(flag: any, countryName: string) {
    const li = document.createElement('li'); //const li criará uma lista
    li.className = "country-box" //essa lista terá essa className
    //dentro dessa lista conterá o seguinte elemento html
    li.innerHTML = 
    `
        <div class='flag'>
            <img src="${flag}" alt="flag" />
        </div>
        <div class='country-information'>
            <h1 class='country-name'>${countryName}</h1>
            <h2>Population:</h2> <p class='population'></p>
            <h2>Region:</h2> <p class='region'></p>
            <h2>Capital:</h2> <p class='capital'></p>
            
        </div>
    
    `
    countryList.appendChild(li);
    
}

export function mapObj(obj: any) {
    obj.map( (obj: any) => {
        
        console.log(obj) //aparece no console cada objeto
        const flags = obj.flags.png; //caputuro o link da bandeira
        const countryName = obj.name.common;  //capturo o nome do pais
        createCountryBox(flags, countryName); //executo a função que adicionará o box no html, indicando o atributo do objeto iterado no momento

    })
}