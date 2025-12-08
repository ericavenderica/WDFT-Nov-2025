import "./App.css";
import Confetti from "react-confetti";
function App() {
  return (
    <>
      <Confetti
        width={1200}
        height={500}
        numberOfPieces={5000}
        colors={["#111ce6", "#ffffff"]}
      />
      <h1>Victors page</h1>
    </>
  );
}

export default App;
