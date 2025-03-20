import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
min-width: 220px;
border: none;
background: #000000;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.4s background ease-in;


&:hover{
  background-color: white ;
  border: 1px solid #000000;
  color: black;
  transition: 0.3s background ease-in;
}
`;



export const OutlineButton = styled(Button)`

background-color: white;
border: 1px solid #000000;
color: #000000;
&:hover{
  background-color: #000000 ;
  border: 1px solid transparent;
  color: white;
}
`;