
//returnApiCountry será uma função assíncrona
export const ReturnApiCountry = async () => {

    //atribua a resposta do link na constante resp
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(resp)
    console.log(fetch('https://restcountries.com/v3.1/all'))


}

export async function teste() {

    let resultado = await fetch('https://restcountries.com/v3.1/all')
    console.log(resultado);
    const resultJson = resultado.json();
    console.log(resultJson)

}