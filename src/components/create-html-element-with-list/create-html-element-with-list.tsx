import { countryList } from "../main/main";


export function createList() {
    const li = document.createElement('li');
    li.className = "country-box"
    li.innerHTML = 
    `
        <div class='flag'>
            <img src="" alt="flag" />
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