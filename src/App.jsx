import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import TypingArea from "./components/TypingArea/TypingArea";
import Statistics from "./components/Statistics/Statistics";
import RestartButton from "./components/RestartButton/RestartButton";

function App() {
  return (
    <div className="app">
      <div className="container">

        <Header />

        <Paragraph />

        <TypingArea />

        <Statistics />

        <RestartButton />

      </div>
    </div>
  );
}

export default App;