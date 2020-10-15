import React from 'react';
import SubChapter from './subChapter';
import { chapterColor } from '../helpers/color';

function Chapter({ chapter }) {
  return (
    <div>
      <p style={chapterColor(chapter.ready)} className="text-2xl">{chapter.name}</p>
      { chapter.subchapters ? chapter.subchapters.map(item => <SubChapter key={item.name} parent={chapter.name} subchapter={item} />) : ''}
    </div>
  );
}

export default Chapter;