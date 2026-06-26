import { useEffect,useState } from "react";

import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import TypingArea from "./components/TypingArea/TypingArea";
import RestartButton from "./components/RestartButton/RestartButton";

import { getRandomParagraph } from "./services/paragraphService";

function App() {
  const [paragraph] = useState(() => getRandomParagraph());
  const [typedText, setTypedText] = useState("");

  const currentIndex = typedText.length;

  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function handleTyping(value) {

  if (!isTimerRunning && value.length === 1) {
    setIsTimerRunning(true);
  }

  setTypedText(value);
}
useEffect(() => {
  if (!isTimerRunning) {
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((previousTime) => {
      if (previousTime <= 1) {
        clearInterval(timer);
        setIsTimerRunning(false);
        return 0;
      }

      return previousTime - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [isTimerRunning]);
  return (
    <main className="app">
      <div className="container">
        <Header 
          timeLeft={timeLeft}
        />

        <Paragraph
          paragraph={paragraph}
          typedText={typedText}
          currentIndex={currentIndex}
        />

        <TypingArea
          typedText={typedText}
          onTyping={handleTyping}
        />

        <RestartButton />
      </div>
    </main>
  );
}

export default App;