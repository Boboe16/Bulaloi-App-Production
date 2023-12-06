import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Stars from './Stars';
import Pagination from './Pagination.js';
import imageIcon from './image-icon.png';
import ImageComponent from './ImageComponent.js';

function AppGameSection({ data }) {
  const router = useRouter();

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [appDataArray, setAppDataArray] = useState(arrayConverter(data));
  const [appNames, setAppNames] = useState(appDataArray);

  // Function to convert data objects into arrays
  function arrayConverter(data) {
    return Array.from(data.map(object => Object.values(object)));
  }

  // Update the list of apps when filtered
  function updateAppsList(filteredApps) {
    setAppDataArray(filteredApps);
  }

  // Rendered component
  return (
    <div className="row justify-content-center App-Game-Section">
      <div id='Search-Page-h4' className={`row App-Game-Section-h4`}>
        <h4>Search Result:</h4>
      </div>
      <div className='Apps-Container row justify-content-between'>
        {appDataArray.map((app) => (
          <div
            className='Apps col-5'
            key={app}
            onClick={() => router.push(`/download/${app[2]}`)}
          >
            <div id='Image-Container' className='row justify-content-center'>
              <ImageComponent id='Image' appPicture={app[1]} imageIcon={imageIcon} />
            </div>
            <h6 className='text-center'>{app[2]}</h6>
            <div className='text-center'>
              {Stars(app[3])}
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} appNames={appNames} updateAppList={setAppDataArray} />
    </div>
  );
}

export default AppGameSection;
