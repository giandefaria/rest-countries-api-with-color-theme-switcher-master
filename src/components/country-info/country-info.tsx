import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 

//let flag: string ;
//let ativador = false;
//vou ter que usar o useState e o {xx && ()} para renderizar só após o retorno da api

//const CountryInfo será uma função assíncrona que buscará na api o nome do país que está sendo buscado
//esse nome será informado como parâmetro da função 
/*const CountryInfos = async (name: string) => {
    const respNameCountry = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const respNameCountryJson = await respNameCountry.json(); //a resposta retornada organizo em json
    console.log(respNameCountryJson);
    flag = respNameCountryJson[0].flags.png;
    console.log(flag)
    ativador = true;
} 
*/

export const CountryInfo = (e: any) => {
    const { country } = useParams(); //hook para importar a id do link, que no caso será o nome do país
    const [ flag, setFlag ] = useState();
    const [ nativeName, setNativeName ] = useState();
    //o nome dentro das chaves tem que ser igual ao indicado na rota, que no caso é :country
    //CountryInfos(country as string); //executo a busca na api pelo nome do país constante na url
    useEffect(() => {
        //const CountryInfo será uma função assíncrona que buscará na api o nome do país que foi clicado
        //o nome do país é que foi importado pelo useParams;
        const CountryInfos = async () => {
            const respNameCountry = await fetch(`https://restcountries.com/v2/name/${country}`);
            const respNameCountryJson = await respNameCountry.json(); //a resposta retornada organizo em json
            console.log(respNameCountryJson);
            setFlag(respNameCountryJson[0].flags.png);
            setNativeName(respNameCountryJson[0].nativeName);
            console.log(flag);
        }
        CountryInfos();


    }, [])

       
    return (
        <>
            <p>teste - { country }</p>
            <header>
                <h1>Where in the world?</h1>
                <button className="mode">Dark Mode</button>
            </header>
            <main>
                <button><Link to="/">Back</Link></button>
                <section>
                    <div className="flag-info">
                        { flag && (<img src={flag} alt="flag"/>)}
                    </div>
                    <div className="information-county">
                        <h1></h1>
                        <ul className="list-information">
                            <li><h4>Native Name: </h4> <p>{nativeName}</p></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <h2>Border Countries:</h2>

                        </ul>

                    </div>

                </section>

            </main>
        </>
    );

};