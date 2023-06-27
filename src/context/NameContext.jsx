import { useState, createContext } from 'react'

export const NameContext = createContext


const NameContextProvider = () => {

    const [namePlayer1, setNamePlayer1] = useState("");
    const [namePlayer2, setNamePlayer2] = useState("");

    return(
        <NameContext.Provider
            value={{
                namePlayer1, 
                setNamePlayer1, 
                namePlayer2, 
                setNamePlayer2,
            }}
        >
        </NameContext.Provider>
    );
};
export default NameContextProvider;