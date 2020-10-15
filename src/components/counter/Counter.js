import React from 'react';

function Counter({ chapters }) {

  let subchaptersCounter = 0;
  let readyCounter = 0;
  let ready = 0;
  let chaptersCounter = chapters.length;

  for (let chapter of chapters) {
    for (let subChapterItem of chapter.subchapters) {
      subchaptersCounter++;

      if (subChapterItem.ready) {
        readyCounter++;
      }
    }
  }

  if (readyCounter > 0) {
    ready = (readyCounter / subchaptersCounter) * 100;
  }

  return (
    <div>
      <div>Chapters: {chaptersCounter}</div>
      <div>SubChapters: {subchaptersCounter}</div>
      <div>readyCounter: {ready}%</div>
    </div>
  );
}

export default Counter;
