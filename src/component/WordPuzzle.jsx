import React, { useState } from 'react';
import '../wordpuzzle.css';

const WORDS = ['LAUNCHING', 'THE', 'WORLD', 'FIRST', 'DUAL', 'CHAMBER', 'LEADLESS','PACEMAKER', 'AVEIRDR', 'IN', 'INDIA', ];
const GRID = [
  ['I','L','E','T','O','P','A','S','F','H','J','P','M','N'],
  ['N','A','O','G','J','L','F','D','R','C','G','A','Q','K'],
  ['D','U','A','L','X','A','I','H','W','H','D','C','L','R'],
  ['O','N','W','T','W','O','R','L','D','A','U','E','S','V'],
  ['L','C','U','I','H','P','S','N','O','M','O','M','P','Z'],
  ['U','H','L','N','C','N','T','H','E','B','D','A','G','Y'],
  ['S','I','I','N','D','I','A','M','B','E','R','K','F','X'],
  ['A','N','K','A','V','E','I','R','D','R','V','E','C','T'],
  ['H','G','I','H','F','U','T','U','V','A','B','R','D','W'],
  ['L','O','A','D','G','T','U','Q','R','U','N','I','O','B'],
  ['C','T','W','E','N','T','Y','E','I','G','H','T','K','U'],
  ['B','E','L','E','A','D','L','E','S','S','L','M','X','N']
];

export default function WordPuzzle({ onComplete }) {
  const [selected, setSelected] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [message, setMessage] = useState('');

  const handleClick = (row, col) => {
    setSelected((prev) => {
      if (!prev.some((cell) => cell.row === row && cell.col === col)) {
        return [...prev, { row, col }];
      }
      return prev;
    });
  };

  const handleEnd = () => {
  const selectedWord = selected.map(({ row, col }) => GRID[row][col]).join('');
  const reversedWord = selectedWord.split('').reverse().join('');

  if (
    (WORDS.includes(selectedWord) || WORDS.includes(reversedWord)) &&
    !foundWords.includes(selectedWord) &&
    !foundWords.includes(reversedWord)
  ) {
    const finalWord = WORDS.includes(selectedWord) ? selectedWord : reversedWord;
    setFoundWords([...foundWords, finalWord]);
    playSound();
    animate();
  }
  setSelected([]);
};

  const playSound = () => {
    const audio = new Audio('/success.mp3');
    audio.play();
  };

  const animate = () => {
    setMessage('🎉 Word Found!');
    setTimeout(() => setMessage(''), 1500);
  };

  if (foundWords.length === WORDS.length) {
    setTimeout(onComplete, 1000);
  }

  // touch ke liye
  const handleTouchMove = (e) => {
    e.preventDefault(); // 👈 scrolling band
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.dataset.row && element.dataset.col) {
      handleClick(parseInt(element.dataset.row), parseInt(element.dataset.col));
    }
  };

  return (
    <div
      className="word-search-container background w-full"
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onTouchMove={handleTouchMove}
    >
      <h1 className='text-2xl'>Finally, The wait is over…</h1>
      <p></p>
      <p className='  '  style={{marginTop:"20px", fontSize: "15px"}}>Disclaimer: Decode the puzzle to know the exciting news. <br />After decoding the puzzle, don’t share the answer with anyone.</p>
      <ul>
        {WORDS.map((word) => (
          <li key={word}>
            {word.split('').map((letter, idx) => (
              <span key={idx} className="blank">
                {foundWords.includes(word) ? letter : '_'}
              </span>
            ))}
          </li>
        ))}
      </ul>

      <div className="maingrid">
        <div className="grid">
          {GRID.map((row, rIdx) =>
            row.map((letter, cIdx) => {
              const isSelected = selected.some((cell) => cell.row === rIdx && cell.col === cIdx);
              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={`cell ${isSelected ? 'selected' : ''}`}
                  data-row={rIdx}
                  data-col={cIdx}
                  onMouseDown={() => setSelected([{ row: rIdx, col: cIdx }])}
                  onMouseEnter={() => selected.length && handleClick(rIdx, cIdx)}
                  onTouchStart={(e) => {
                    e.preventDefault(); // 👈 finger lagate hi scroll band
                    setSelected([{ row: rIdx, col: cIdx }]);
                  }}
                >
                  {letter}
                </div>
              );
            })
          )}
        </div>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}
