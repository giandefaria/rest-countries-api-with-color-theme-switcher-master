
//returnApiCountry será uma função assíncrona
export const ReturnApiCountry = async () => {

    //atribua a resposta do link na constante resp
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(resp)
    console.log(fetch('https://restcountries.com/v3.1/all'))


}

//função assincrona que captará os valores retornados da api restcountries
export async function apiCountryReturn() {

    const result = await fetch('https://restcountries.com/v3.1/all'); //atribuo o retorno da api na constante result
    console.log(result);
    const resultJson = result.json(); //transformo a result em um json e atribuo a constante resultJson
    console.log(resultJson)

}