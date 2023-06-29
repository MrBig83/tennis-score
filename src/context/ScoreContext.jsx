/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { NameContext } from "./NameContext";
const ScoreContext = React.createContext();

//Skapa states, dependencies m.m.
const ScoreProvider = ({ children }) => {
    const scoreTranslate = [0, 15, 30, 40, "Ad", "W"];
    const { name1, name2 } = useContext(NameContext);

    const [ player1Game, setPlayer1Game ] = useState(0);
    const [ player2Game, setPlayer2Game ] = useState(0);
    const [ player1Set1, setPlayer1Set1 ] = useState(0);
    const [ player2Set1, setPlayer2Set1 ] = useState(0);
    const [ player1Set2, setPlayer1Set2 ] = useState(0);
    const [ player2Set2, setPlayer2Set2 ] = useState(0);
    const [ player1Set3, setPlayer1Set3 ] = useState(0);
    const [ player2Set3, setPlayer2Set3 ] = useState(0);
    const [ player1Match, setPlayer1Match ] = useState(0);
    const [ player2Match, setPlayer2Match ] = useState(0);
    const [ winner, setWinner ] = useState("");
    
    //Testar alla villkor för poäng. (TennisRegler)
    if(player1Set1 >5 && player1Set1 - player2Set1 >1){
        setPlayer1Match(player1Match +1)
        setPlayer1Set1(0)
        setPlayer2Set1(0)
    }
    if(player1Set2 >5 && player1Set2 - player2Set2 >1){
        setPlayer1Match(player1Match +1)
        setPlayer1Set2(0)
        setPlayer2Set2(0)
    }
    if(player1Set3 >5 && player1Set3 - player2Set3 >1){
        setPlayer1Match(player1Match +1)
        setPlayer1Set3(0)
        setPlayer2Set3(0)
    }
    if(player2Set1 >5 && player2Set1 - player1Set1 >1){
        setPlayer2Match(player2Match +1)
        setPlayer1Set1(0)
        setPlayer2Set1(0)
    }
    if(player2Set2 >5 && player2Set2 - player1Set2 >1){
        setPlayer2Match(player2Match +1)
        setPlayer1Set2(0)
        setPlayer2Set2(0)
    }
    if(player2Set3 >5 && player2Set3 - player1Set3 >1){
        setPlayer2Match(player2Match +1)
        setPlayer1Set3(0)
        setPlayer2Set3(0)
    }

    //Rendera vem som är vinnaren
    if(player1Match == 2 && winner == ""){
        setWinner(name1)
    }
    if(player2Match == 2 && winner == ""){
        setWinner(name2)
    }

    //Skicka vidare
    return (
        <ScoreContext.Provider 
        value={{ 
            player1Game, 
            setPlayer1Game,
            player2Game, 
            setPlayer2Game,
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
            player1Match, 
            setPlayer1Match,
            player2Match, 
            setPlayer2Match, 
            winner
            }}>
            {children}
        </ScoreContext.Provider>
    );
};

export { ScoreProvider, ScoreContext };