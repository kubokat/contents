import React from 'react';
import Chapter from '../Chapter'

function ChaptersList({ chapters }) {
  return (
    <div className="items-end">
      {chapters.map(item => <Chapter key={item.name} chapter={item} />)}
    </div>
  );
}

export default ChaptersList;