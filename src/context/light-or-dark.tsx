import { createContext, useContext, useState } from "react";

const LightOrDark = createContext() as unknown as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [index, setIndex] = useState('0');

    return (
        // dentro de value={}, indico o que os componentes filhos poderão enxergar
        <LightOrDark.Provider value={ {index, setIndex} }>

            { children }

        </LightOrDark.Provider>
    )
}

export function useIndex() {
    const i = useContext(LightOrDark);
    const { index, setIndex } = i;
    return { index, setIndex};
}