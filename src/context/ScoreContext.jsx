import React, { useState } from 'react';

const ScoreContext = React.createContext();

const ScoreProvider = ({ children }) => {
    const scoreTranslate = [0, 15, 30, 40, "Ad", "W"];
    const [ player1Set1, setPlayer1Set1 ] = useState(0);
    const [ player2Set1, setPlayer2Set1 ] = useState(0);
    const [ player1Set2, setPlayer1Set2 ] = useState(0);
    const [ player2Set2, setPlayer2Set2 ] = useState(0);
    const [ player1Set3, setPlayer1Set3 ] = useState(0);
    const [ player2Set3, setPlayer2Set3 ] = useState(0);
    // const [selectedSet, setSelectedSet] = useState('');
    
    // useEffect(() => {
    //   }, [selectedSet]);

    return (
        <ScoreContext.Provider 
        value={{ 
            scoreTranslate,
            player1Set1, 
            setPlayer1Set1,
            player2Set1, 
            setPlayer2Set1, 
            player1Set2, 
            setPlayer1Set2, 
            player2Set2, 
            setPlayer2Set2, 
            player1Set3, 
            setPlayer1Set3, 
            player2Set3, 
            setPlayer2Set3, 
            // selectedSet, 
            // setSelectedSet

            }}>
            {children}
        </ScoreContext.Provider>
    );
};

export { ScoreProvider, ScoreContext };