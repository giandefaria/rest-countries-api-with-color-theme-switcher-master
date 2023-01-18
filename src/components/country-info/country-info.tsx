import { useParams } from "react-router-dom"; 


export const CountryInfo = (e: any) => {
    const { id } = useParams(); //hook para importar a id do link, que no caso será o nome do país
    console.log(e);
    return (
        <>
            <p>teste - {id}</p>
        </>
    );

};