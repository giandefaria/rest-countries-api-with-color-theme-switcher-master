import { mapObj } from "../create-html-element-with-list/create-html-element-with-list";

//returnApiCountry será uma função assíncrona que captará os valores retornados da api restcountries
//informará esse objeto retornado ao mapObj() para adicionar no html da página
export const ReturnApiCountry = async () => {
    
    //atribuo o retorno da api na constante  resp
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(resp)
    const respJson = await resp.json();  //transformo a resp em um json e atribuo a constante resultJson
    console.log(respJson);
    /*console.log(respJson.sort((a: any,b: any) => {
       return a.name.common.localeCompare(b.name.common) //> b.name.common ? 1 : -1;
    }));*/
    alfabeticOrderObject(respJson);
    mapObj(respJson); //executo a função que fará um map no array e essa mesma função chamará outra que adicionará a lista no html

}

//ReturnCountryPerRegion montará um novo objeto de acordo com a região selecionada
export const ReturnCountryPerRegion = async (region: string) => {
    const respRegion = await fetch(`https://restcountries.com/v3.1/region/${region}`) //a resposta da busca por região será atribuida a constante respRegion
    console.log(respRegion);
    const respRegionJson = await respRegion.json(); //transformo em um arquivo json
    console.log(respRegionJson);
    mapObj(respRegionJson); //enviará esse objeto por região para ser executado pela função mapObj
}

//função que 'ouvirá' os filtros select dentro da tag 'select'. Ao ser alterado, o valor daquele filtro será indicado no console.
export function listenerSelectRegionsFilter() {
    let select = document.querySelector('select') as any
    select.addEventListener('change', () => {
        if (select.value == 'default') {
            //se nada for selecionado no filtro, retorno todos os países no html
            ReturnApiCountry();
            
        } else {
            ReturnCountryPerRegion(select.value); //o valor do select selecionado será informado no parâmetro da função assíncrona ReturnCountryPerRegion
          }  
    })
}


function alfabeticOrderObject(obj: Array<HTMLCollection>) {
    obj.sort((a: any,b: any) => {
        const orderedArray = a.name.common.localeCompare(b.name.common);
        return orderedArray;
     })
    console.log(obj); 
}