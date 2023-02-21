import './country-info.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { changeLightMode } from '../../components/change-light-mode/change-light-mode';
import  moon  from '../../assets/design/icon-moon.png';
import backArrow from '../../assets/design/back.png';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import wikipediaIcon from '../../assets/design/wikipedia.png'
import { CountryInformation } from '../../interfaces/country-information';

export const CountryInfo = (e: any) => {
    const { country } = useParams(); //hook para importar a id do link, que no caso será o nome do país. O nome dentro das chaves tem que ser igual ao indicado na rota, que no caso é :country
    const [ flag, setFlag ] = useState<any>();
    const [ name, setName ] = useState<string>();
    const [ nativeName, setNativeName ] = useState<string>();
    const [ population, setPopulation ] = useState<number>();
    const [ region, setRegion ] = useState<string>();
    const [ subregion, setSubRegion ] = useState<string>();
    const [ capital, setCapital ] = useState<string>();
    const [ topLevelDomain, setTopLevelDomain ] = useState<Array<string> | string>();
    const [ currencies, setCurrencies ] = useState<any>();
    const [ languages, setLanguages ] = useState<any>();
    const [ borderCountries, setBorderCountries ] = useState<any>();
    const [ mapLocalization, setMapLocalization ] = useState<any>();


    
    //função que irá realizar um map do array com os nomes abreviados dos países de fronteira, pois a API retorna os nomes dos países de fronteira de forma abreviada
    //fará uma pesquisa na api da abreviação e adicionará o nome completo no borderCountries
    //receberá como parâmetro o objeto de informações do país
    function countryBorderName(objInfoCountry: CountryInformation | undefined) {
        
        let arrBorderCountries: Array<string> = [];
        objInfoCountry?.borders.map( async (e:any) => { 
            
            const nameBorder = await fetch(`https://restcountries.com/v3.1/alpha/${e}`)
            const resp = await nameBorder.json(); //a resposta retornada organizo em json                      
            arrBorderCountries.push(resp[0].name.common);//empurro o valor para dentro do array
     
        });
            //adicionei um setTimeout para dar um delay na renderização do componente
            //fiz isso para evitar o bug de renderizar o border countries antes do termino do map.
            setTimeout(() => {
                setBorderCountries(arrBorderCountries);
            }, 500);

    }
    
    useEffect(() => {

        //const CountryInfo será uma função assíncrona que buscará na api o nome do país que foi clicado
        //o nome do país é que foi importado pelo useParams;
        const CountryInfos = async () => {
            let respNameCountry;
            let respNameCountryJson;
            let status;        

            //tente primeiro buscar informações no link padrão da API.
            //Se retornar erro 404, será executado o código dentro do catch
            try {
                respNameCountry = await fetch(`https://restcountries.com/v2/name/${country}`); //busca na api o nome country captado pelo useParams
                const resp = await respNameCountry.json(); //a resposta retornada organizo em json
                respNameCountryJson = resp[0] as CountryInformation;
                //console.log(respNameCountryJson);
                status = respNameCountryJson.status;
            

                //se o status retornado for 404, sinal que não foi encontrado na api, então será executado o catch
                if (status == 404) {
                    throw "Not found"
             
                }
                } catch //caso retorne erro o código acima, será realizado a busca no link abaixo
                    {
                    respNameCountry = await fetch(`https://restcountries.com/v2/alpha/${country}`);
                    const resp: CountryInformation = await respNameCountry.json(); //a resposta retornada organizo em json
                    respNameCountryJson = resp;
                    console.log(respNameCountryJson);
                    } finally //após execução do try ou do catch, os valores abaixo serão adicionados no useState
                        {
                        setFlag(respNameCountryJson?.flags.svg);
                        setName(respNameCountryJson?.name);
                        setNativeName(respNameCountryJson?.nativeName);
                        setPopulation(respNameCountryJson?.population);
                        setRegion(respNameCountryJson?.region);
                        setSubRegion(respNameCountryJson?.subregion);
                        setCapital(respNameCountryJson?.capital);
                        setTopLevelDomain(respNameCountryJson?.topLevelDomain);
                        setCurrencies(respNameCountryJson?.currencies[0].name);
                        setLanguages(respNameCountryJson?.languages);
                        setMapLocalization(respNameCountryJson?.latlng);

                        //função que irá realizar um map dos nomes abreviados dos países de fronteira
                        //fará uma pesquisa na api da abreviação e adicionará o nome completo no borderCountries
                        countryBorderName(respNameCountryJson);

                        //diminui o height do mapa
                        if(window.innerWidth < 401) {
                            let mapa: HTMLElement | any = document.querySelector('.leaflet-container');
                            mapa.style.height = '400px';
                        }

                        }
        }
        CountryInfos(); //chamo a function expression

    }, []);

       
    return (
        <>
            <header>
                <section className='width-container header-container'>
                    <h1>Where in the world?</h1>
                    <button className="mode" onClick={() => changeLightMode()}><img src={moon} alt="moon"/><p>Dark Mode</p></button> 
                </section>
            </header>
            <main>
                <div className='width-container'>
                    <button className='back-home'><Link to="/"><img src={backArrow} alt="back-arrow"/><p>Back</p></Link></button>
                    <section className='container-country'>
                        <div className="flag-info">
                            { flag && (<img src={flag} alt="flag"/>)}
                        </div>
                        <div className="information-country">
                            <div className='title-and-icon'>
                                <h1>{name}</h1> <img src={wikipediaIcon} alt="wikipediaIcon" width={'30px'} onClick={() => {window.open(`https://en.wikipedia.org/wiki/${country}`)}}/>
                            </div>
                            <ul className="list-information">
                                <li><h4>Native Name: </h4> <p>{nativeName}</p></li>
                                <li><h4>Population: </h4> <p>{population}</p></li>
                                <li><h4>Region: </h4> <p>{region}</p></li>
                                <li><h4>Sub Region: </h4> <p>{subregion}</p></li>
                                <li><h4>Capital: </h4> <p>{capital}</p></li>
                                <li className='top-level-domain'><h4>Top Level Domain: </h4> <p>{topLevelDomain}</p></li>
                                <li><h4>Currencies: </h4> <p>{currencies}</p></li>
                                {languages && 
                                    (<li><h4>Languages: </h4> <p>{(languages.map( (e:any) => e.name )).join(', ')}</p></li>)
                                    //se linguagem for true, adiciono essa linha. Método join(', ') serve para concatenar todos os elementos do array em uma string, separados por , e espaço
                                }
                            </ul>
                            {borderCountries && 
                                (//sendo borderCountries verdadeiro, executa a linha abaixo no html
                                <ul className='borders-list'>
                                    <h4>Border Countries:</h4>
                                    <div className='borders'>
                                    {borderCountries.map( (e:any) => <a href={`/countryinfo/${e}`}><p>{e + ' '}</p></a>)}
                                    </div> 
                                    
                                </ul>
                                //faço um map do borderCountries e vou adicionando elementos no html, atribuindo a uma ancora
                                //a ancora serve para abrir a página de informação do país de fronteira ao clique.
                                //Tarefa, adicionar countryalfa utilizando outro link para comunicação api
                                )
                            }
                        </div>
                    </section>
                    <section className='map'>
                            {mapLocalization &&
                            (
                                <MapContainer center={mapLocalization} zoom={4} scrollWheelZoom={false} style={{height: "500px"}}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
                                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={mapLocalization}>
                                    </Marker>
                              </MapContainer>

                            )
                            }
                    </section>
                </div>
            </main>
        </>
    );

};