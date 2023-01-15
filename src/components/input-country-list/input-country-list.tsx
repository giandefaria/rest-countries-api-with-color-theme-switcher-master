import { mapObj } from "../create-html-element-with-list/create-html-element-with-list";

//returnApiCountry será uma função assíncrona que captará os valores retornados da api restcountries
export const ReturnApiCountry = async () => {

    //atribuo o retorno da api na constante  resp
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(resp)
    const respJson = await resp.json();  //transformo a resp em um json e atribuo a constante resultJson
    console.log(respJson);
    mapObj(respJson); //executo a função que fará um map no array e essa mesma função chamará outra que adicionará a lista no html

}

//ReturnCountryPerRegion montará um novo objeto de acordo com a região selecionada
export const ReturnCountryPerRegion = async (region: string) => {
    const respRegion = await fetch(`https://restcountries.com/v3.1/region/${region}`) //a resposta da busca por região será atribuida a constante respRegion
    console.log(respRegion);
    const respRegionJson = await respRegion.json(); //transformo em um arquivo json
    console.log(respRegionJson);
}


function indRegions() {
    const option = document.querySelectorAll('#filter-region')[0].children
    for (let index = 0; index < option.length; index++) {
        option[index].addEventListener('click', () => {
            console.log(option[index].attributes[0].value);
        })
        
    }
}