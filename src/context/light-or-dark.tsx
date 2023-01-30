import { createContext, useContext, useState } from "react";

export const LightOrDark = createContext( undefined ) as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [testes, setTestes] = useState('10');

    return (
        // dentro de value={}, indico o que os componentes filhos poderão enxergar
        <LightOrDark.Provider value={ {testes, setTestes} }>

            { children }

        </LightOrDark.Provider>
    )
}

export function useIndex() {
    const i = useContext(LightOrDark);
    const { indexe, setIndexe} = i as any;
    return { indexe, setIndexe};
}