import { Link, useParams } from "react-router-dom"; 


export const CountryInfo = (e: any) => {
    const { country } = useParams(); //hook para importar a id do link, que no caso será o nome do país
    //o nome dentro das chaves tem que ser igual ao indicado na rota, que no caso é :country
    console.log(e);
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
                    
                </section>

            </main>
        </>
    );

};