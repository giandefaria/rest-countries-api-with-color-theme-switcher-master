import { createCountryBox } from "../create-html-element-with-list/create-html-element-with-list";
import { countryList } from "../main/main";


//returnApiCountry será uma função assíncrona que captará os valores retornados da api restcountries
export const ReturnApiCountry = async () => {

    //atribuo o retorno da api na constante  resp
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(resp)
    const respJson = await resp.json();  //transformo a resp em um json e atribuo a constante resultJson
    console.log(respJson);
    //countryList.innerHTML = 'teste'

    respJson.map( (obj: any) => {
        
        console.log(obj.flags.png)
        const flags = obj.flags.png
        createCountryBox(flags);

    })



}



