import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import { DifficultyProvider, GameStatusProvider } from "./contexts";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <GameStatusProvider>
      <DifficultyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/error" element={<NotFound />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/match" element={<></>} />
            {/* Match Board placed above*/}
          </Routes>
        </BrowserRouter>
      </DifficultyProvider>
    </GameStatusProvider>
  );
}

export default App;
