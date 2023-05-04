
import {GlobalStyle} from "./globalStyled"
import { Router } from "./Routes/Router";
import { GlobalState } from "./contexts/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";


function App() {


  return (
      <ChakraProvider resetCSS={true}>

          <GlobalStyle/>
          <GlobalState>
            <Router />
          </GlobalState>

        
     </ChakraProvider>

    
  );
}

export default App;
