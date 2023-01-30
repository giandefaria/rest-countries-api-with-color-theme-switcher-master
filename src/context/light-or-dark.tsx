import { createContext, useState } from "react";

export const LightOrDark = createContext() as unknown as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [index, setIndex] = useState('0');

    return (
        // dentro de value={}, indico o que os componentes filhos poderão enxergar
        <LightOrDark.Provider value={index}>

            { children }

        </LightOrDark.Provider>
    )
}