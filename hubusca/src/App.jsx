import React from 'react';
import Rotas from './Rotas';
import {ContextProvider} from './components/context/context';


const App = () =>{
  return (
    <ContextProvider>
      <Rotas />
    </ContextProvider>
  );
}

export default App;
