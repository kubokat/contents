import React from 'react';
import Chapter from '../Chapter'

function ChaptersList({ chapters, undo }) {
  return (
    <div className="items-end">
      {chapters.map(item => <Chapter key={item.name} chapter={item} />)}
      <div className="py-10 justify-center">
        <button onClick={() => undo()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Undo
        </button>
      </div>
    </div>
  );
}

export default ChaptersList;