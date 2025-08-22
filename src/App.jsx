import React, { useState } from 'react';
import WordPuzzle from './component/WordPuzzle';
import SaveDate from './component/SaveDate';


function App() {
  const [gameComplete, setGameComplete] = useState(false);

  if (!gameComplete) {
    return <WordPuzzle onComplete={() => setGameComplete(true)} />;
  }

  // When game is complete → open ppt
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://docs.google.com/viewer?url=https://abbotinvitation.vercel.app/SaveTheDate-AVEIRDR.pptx&embedded=true"
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
        title="PPT Viewer"
      ></iframe>
    </div>
  );
}
export default App;
