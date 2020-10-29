import React from 'react';

function Filter({ setFilter }) {
  return (
    <div className="justify-around flex">
      <button onClick={() => setFilter('SHOW_ALL')} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Show All
      </button>
      <button onClick={() => setFilter('SHOW_READY')} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Show Ready
      </button>
      <button onClick={() => setFilter('SHOW_UNREADY')} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Show Unready
      </button>
    </div>
  );
}

export default Filter;
