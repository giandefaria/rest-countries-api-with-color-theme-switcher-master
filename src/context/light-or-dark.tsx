import { createContext, useState } from "react";

export const LightOrDark = createContext() as unknown as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [index, setIndex] = useState('0');

    return (
        <LightOrDark.Provider>

            { children }

        </LightOrDark.Provider>
    )
}