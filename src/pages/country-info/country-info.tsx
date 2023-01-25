import './country-info.css';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 


export const CountryInfo = (e: any) => {
    const { country } = useParams(); //hook para importar a id do link, que no caso será o nome do país
    const [ flag, setFlag ] = useState();
    const [ name, setName ] = useState();
    const [ nativeName, setNativeName ] = useState();
    const [ population, setPopulation ] = useState();
    const [ region, setRegion ] = useState();
    const [ subregion, setSubRegion ] = useState();
    const [ capital, setCapital ] = useState();
    const [ topLevelDomain, setTopLevelDomain ] = useState();
    const [ currencies, setCurrencies ] = useState();
    const [ languages, setLanguages ] = useState<any>();
    const [ borderCountries, setBorderCountries ] = useState<any>();
    const [ borderCountries2, setBorderCountries2 ] = useState<any>();
    //o nome dentro das chaves tem que ser igual ao indicado na rota, que no caso é :country
    //CountryInfos(country as string); //executo a busca na api pelo nome do país constante na url
    useEffect(() => {
        //const CountryInfo será uma função assíncrona que buscará na api o nome do país que foi clicado
        //o nome do país é que foi importado pelo useParams;
        const CountryInfos = async () => {
            let respNameCountry;
            let respNameCountryJson;
            let status;
            let arrayTest: Array<any>;

            //tente primeiro buscar informações no link padrão da API.
            //Se retornar erro 404, será executado o código dentro do catch
            try {
                respNameCountry = await fetch(`https://restcountries.com/v2/name/${country}`);
                const resp = await respNameCountry.json(); //a resposta retornada organizo em json
                respNameCountryJson = resp[0];//ele retorna um índice, por isso indico o 0 para padronizar
                console.log(respNameCountryJson);
                status = respNameCountryJson.status;

                //se o status retornado for 404, sinal que não foi encontrado na api, então será executado o catch
                if (status == 404) {
                    throw "Not found"
             
                }
                } catch //caso retorne erro o código acima, será realizado a busca no link abaixo
                    {
                    respNameCountry = await fetch(`https://restcountries.com/v2/alpha/${country}`);
                    const resp = await respNameCountry.json(); //a resposta retornada organizo em json
                    respNameCountryJson = resp;
                    console.log(respNameCountryJson);
                    } finally //após execução do try ou do catch, os valores abaixo serão adicionados no useState
                        {
                        setFlag(respNameCountryJson.flags.svg);
                        setName(respNameCountryJson.name);
                        setNativeName(respNameCountryJson.nativeName);
                        setPopulation(respNameCountryJson.population);
                        setRegion(respNameCountryJson.region);
                        setSubRegion(respNameCountryJson.subregion);
                        setCapital(respNameCountryJson.capital);
                        setTopLevelDomain(respNameCountryJson.topLevelDomain);
                        setCurrencies(respNameCountryJson.currencies[0].name);
                        setLanguages(respNameCountryJson.languages);
                        //setBorderCountries(respNameCountryJson.borders)
                        setBorderCountries(respNameCountryJson.borders);
                        console.log(respNameCountryJson.borders)
                        console.log(borderCountries)
                        console.log(flag);
                        //console.log(languages.map( (array: any) => { array.name } ))
                        respNameCountryJson.borders.map( async (e:any) => { 
                           const nameBorder = await fetch(`https://restcountries.com/v2/alpha/${e}`)
                           const resp = await nameBorder.json(); //a resposta retornada organizo em json
                           console.log(resp.name);
                           arrayTest.push(resp.name);
                           console.log(arrayTest);
                           
                    
                        });


                        }
        }
        CountryInfos();
        //console.log( borderCountries.map())

    }, []);

    async function countryBorderName(e: string) {
        const nameBorder = await fetch(`https://restcountries.com/v2/alpha/${e}`);
        const resp = await nameBorder.json(); //a resposta retornada organizo em json
        console.log(resp.name);
        return resp.name;

    }

       
    return (
        <>
            <header>
                <h1>Where in the world?</h1>
                <button className="mode">Dark Mode</button>
            </header>
            <main>
                <button><Link to="/">Back</Link></button>
                <section className='container-country'>
                    <div className="flag-info">
                        { flag && (<img src={flag} alt="flag"/>)}
                    </div>
                    <div className="information-county">
                        <h1>{name}</h1>
                        <ul className="list-information">
                            <li><h4>Native Name: </h4> <p>{nativeName}</p></li>
                            <li><h4>Population: </h4> <p>{population}</p></li>
                            <li><h4>Region: </h4> <p>{region}</p></li>
                            <li><h4>Sub Region: </h4> <p>{subregion}</p></li>
                            <li><h4>Capital: </h4> <p>{capital}</p></li>
                            <li><h4>Top Level Domain: </h4> <p>{topLevelDomain}</p></li>
                            <li><h4>Currencies: </h4> <p>{currencies}</p></li>
                            {languages && 
                                (<li><h4>Languages: </h4> <p>{(languages.map( (e:any) => e.name )).join(', ')}</p></li>)
                                //se linguagem for true, adiciono essa linha. Método join(', ') serve para concatenar todos os elementos do array em uma string, separados por , e espaço
                            }
                        </ul>
                        {borderCountries &&
                            (//sendo borderCountries verdadeiro, executa a linha abaixo no html
                            <ul className='borders-list'>
                                <h2>Border Countries:</h2> {borderCountries.map( (e:any) => <a href={`/countryinfo/${e}`}><p>{e + ' '}</p></a>)}
                                
                            </ul>
                            //faço um map do borderCountries e vou adicionando elementos no html, atribuindo a uma ancora
                            //a ancora serve para abrir a página de informação do país de fronteira ao clique.
                            //Tarefa, adicionar countryalfa utilizando outro link para comunicação api
                            )
                        }

                    </div>

                </section>

            </main>
        </>
    );

};