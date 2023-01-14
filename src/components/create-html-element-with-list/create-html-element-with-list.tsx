import { countryList } from "../main/main";


export function createList() {
    const li = document.createElement('li');
    li.innerHTML = 'teste2'
    countryList.appendChild(li);

    
}