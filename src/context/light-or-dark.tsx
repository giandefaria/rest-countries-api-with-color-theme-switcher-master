import { createContext, useState } from "react";

export const LightOrDark = createContext() as unknown as any;


export default function IndexLightOrDarkProvider( { children  }: any ) {
    const [index, setIndex] = useState();

    return (
        <LightOrDark.Provider>

            { children }

        </LightOrDark.Provider>
    )
}