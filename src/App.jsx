import React, { useState } from 'react';
import styled from 'styled-components';
import Start from './component/Start';
import Play from './component/Play';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); // ✅ Set default value

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <Play /> : <Start toggle={toggleGamePlay} />}  
    </>
  );
}

export default App;


