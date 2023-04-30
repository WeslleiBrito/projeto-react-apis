
import { GlobalStyle } from "./globalStyled";
import { Router } from "./Routes/Router";
import { GlobalState } from "./contexts/GlobalState";





function App() {


  return (
    <>
      <GlobalStyle />

      <GlobalState>
        <Router />
      </GlobalState>

    </>
  );
}

export default App;
