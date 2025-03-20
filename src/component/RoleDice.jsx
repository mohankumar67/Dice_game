import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = (
    {currentDice , rollDice}
) => {

    

    

  return (
   <DiceContainer>
     <div className='dice' onClick={rollDice}>
        <img src={`/dice_${currentDice}.png `} alt="" />
     </div>
     <p>Click on Dice to roll</p>

   </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;

.dice{
    cursor: pointer;
}
p{
    font-size: 20px;
}
`;
