import { createContext, useContext, useState } from "react";

const LightOrDark = createContext( undefined ) as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [teste, setTeste] = useState('10');

    return (
        // dentro de value={}, indico o que os componentes filhos poderão enxergar
        <LightOrDark.Provider value={ {teste, setTeste} }>

            { children }

        </LightOrDark.Provider>
    )
}

export function useIndex() {
    const i = useContext(LightOrDark);
    const { indexe, setIndexe} = i as any;
    return { indexe, setIndexe};
}