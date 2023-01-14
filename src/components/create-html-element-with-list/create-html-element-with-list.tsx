import { countryList } from "../main/main";

//função que adicionará cada país no html da página
export function createCountryBox(flag: any) {
    const li = document.createElement('li'); //const li criará uma lista
    li.className = "country-box" //essa lista terá essa className
    //dentro dessa lista conterá o seguinte elemento html
    li.innerHTML = 
    `
        <div class='flag'>
            <img src="${flag}" alt="flag" />
        </div>
        <div class='country-information'>
            <h1 class='country-name'></h1>
            <h2>Population:</h2> <p class='population'></p>
            <h2>Region:</h2> <p class='region'></p>
            <h2>Capital:</h2> <p class='capital'></p>
            
        </div>
    
    `
    countryList.appendChild(li);
    
}

export function mapObj(obj: any) {
    obj.map( (obj: any) => {
        
        console.log(obj.flags.png)
        const flags = obj.flags.png
        createCountryBox(flags);

    })
}