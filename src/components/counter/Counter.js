import React from 'react';

function Counter({ chaptersCounter, subchaptersCounter, readyCounter, ready }) {
  return (
    <div>
      <div>Chapters: {chaptersCounter}</div>
      <div>SubChapters: {subchaptersCounter}</div>
      <div>readyCounter: {ready}%</div>
    </div>
  );
}

export default Counter;
