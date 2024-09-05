import React from 'react';

function AppFilterSection({ id, mostDownloads, newest, hot }) {
  return (
    <div id={`${id}-filter`} className="row App-Game-Section">
      <div className="col-2 d-flex align-items-center">
        <h4 className="text-center mx-auto">{id}</h4>
      </div>
      <div className="col-3 d-flex align-items-center">
        <h4 className="text-center mx-auto">Sort by:</h4>
      </div>
      <div className="col-3 d-flex align-items-center">
        <h4 id="Downloads" className="text-center mx-auto"
        onClick={() => mostDownloads(id)}>
          Downloads
        </h4>
      </div>
      <div className="col-2 d-flex align-items-center">
        <h4 id="Newest" className="text-center mx-auto"
        onClick={() => newest(id)}>
          Newest
        </h4>
      </div>
      <div className="col-2 d-flex align-items-center">
        <h4 id="Hot" className="text-center mx-auto"
        onClick={() => hot(id)}>
          Hot
        </h4>
      </div>
    </div>
  );
};

export default AppFilterSection;
