import React from 'react';
import { chapterColor } from '../../helpers/color';

function SubChapter({ subchapter, parent, changeStatus }) {
  return (
    <div 
    onClick={() => {changeStatus({name: subchapter.name, parent})}} className="px-10 text-xl">
      <p style={chapterColor(subchapter.ready)}>- {subchapter.name}</p>
    </div>
  );
}

export default SubChapter;
