import React from 'react';

function addChapter({ addChapter }) {
  return (
    <div className="w-3/6 text-center">
      <form
        className="w-full max-w-sm"
        onSubmit={
          (e) => {
            e.preventDefault();
            addChapter(e.target.chapter.value);
            e.target.chapter.value = '';
          }
        }>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input name="chapter" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Chapter name" />
          <input value="Add chapter" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default addChapter;
