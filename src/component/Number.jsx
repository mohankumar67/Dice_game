import React, { useState } from 'react'
import styled from 'styled-components'
const Number = (
  {error, seterror, selectedNumber ,setSelectedNumber }
) => {

    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=>{
      setSelectedNumber(value)
      seterror("")
    }


  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
        <div className='flex'>
        {
            arrNumber.map((value, i) => (
              <Box
                $isSelected={value === selectedNumber} // ✅ Use $isSelected
                key={i}
                onClick={()=>numberSelectorHandler(value)}
              >
                {value}
              </Box>
            ))
            
        }
    </div>
    <p>Select Number</p>

    </NumberSelectorContainer>
  )
}

export default Number

const NumberSelectorContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end; 

.flex{
    display: flex;
    gap: 24px;

}

p{
    font-size: 24px;
    font-weight: 700px;
}

.error{
  color: red;
  padding-bottom: 20px;
}

`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
`;

