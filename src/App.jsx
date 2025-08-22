import React, { useState } from 'react';
import WordPuzzle from './component/WordPuzzle';
import SaveDate from './component/SaveDate';



function App() {
  const [gameComplete, setGameComplete] = useState(false);

  return (
    <div>
      {!gameComplete ? (
        <WordPuzzle onComplete={() => setGameComplete(true)} />
      ) : (
        <SaveDate />
        
        
      )}
    </div>
  );
}

export default App;
