import React, { useState } from 'react'
import Total from './Total'
import Number from './Number'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../Styled/Button'
import Rules from './Rules'

const Play = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber , setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [ error , seterror] = useState("");
    const [showRules , setShowRules] = useState(false)
    

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min)); // ✅ Fix: Removed extra parenthesis
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const rollDice = () => {
        if (!selectedNumber) {
            seterror("You have not selected any number");
            return;
        }
    
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);
    
        // ✅ Use the correct way to update state:
        setScore((prev) => selectedNumber === randomNumber ? prev + randomNumber : prev - 2);
    
        setSelectedNumber(undefined);
    };
    

const resetScore = () =>{
    setScore(0);
}


  return (
    <MainContainer>
     <div className='top-section'>
     <Total score={score}/>
     <Number error={error}
     seterror={seterror}
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}/>
     </div>
     <RoleDice currentDice={currentDice}
     rollDice={rollDice}/>
     <div className='btn'>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ?"Hide" : "show"}Show Rules</Button>
     </div> 

     {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Play

const MainContainer = styled.main`

.top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 5px;
}

.btn{
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
    padding-bottom: 5px;
}

`;
