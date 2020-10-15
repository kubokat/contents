import React from 'react';

import ChaptersList from './chaptersList'
import { ConnectedAddChapter, ConnectedAddSubChapter } from './forms'
import Counter from './counter'
import Filter from './filter'

function Main() {
  return (
    <div className="flex flex-col h-full justify-center bg-gray-200 text-gray-700 px-20">

      <Filter />
      <ChaptersList />
      <Counter />

      <div className="flex w-screen flex-row">
        <ConnectedAddChapter />
        <ConnectedAddSubChapter />
      </div>
    </div>
  );
}

export default Main;
