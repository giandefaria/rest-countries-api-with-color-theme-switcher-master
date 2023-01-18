import { useParams } from "react-router-dom"; 


export const CountryInfo = (e: any) => {
    const { country } = useParams(); //hook para importar a id do link, que no caso será o nome do país
    //o nome dentro das chaves tem que ser igual ao indicado na rota, que no caso é :country
    console.log(e);
    return (
        <>
            <p>teste - { country }</p>
        </>
    );

};