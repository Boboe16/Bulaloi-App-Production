import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Stars from './Stars';
import Pagination from './Pagination.js';
import AppFilterSection from './AppFilterSection';
import imageIcon from './image-icon.png';
import ImageComponent from './ImageComponent.js';

function AppGameSection({ category, id, data }) {
  const router = useRouter();

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [appDataArray, setAppDataArray] = useState(arrayConverter(data));
  const [appNames, setAppNames] = useState(appDataArray);

  // Function to convert data objects into arrays
  function arrayConverter(data) {
    return Array.from(data.map(object => Object.values(object)));
  }

  // Function to handle filtering apps by most downloads
  async function mostDownloads(id) {
    try {
      const gamesOrApps = id.toLowerCase();
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sort-apps-apis/most-download/${gamesOrApps}/${category}`);
      const data = await res.json();

      // Update app data and reset current page
      setAppDataArray(arrayConverter(data));
      setAppNames(arrayConverter(data));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to handle filtering apps by newest
  async function newest(id) {
    try {
      const gamesOrApps = id.toLowerCase();
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sort-apps-apis/newest/${gamesOrApps}/${category}`);
      const data = await response.json();
      //console.log(`${gamesOrApps} and ${category}`)

      // Update app data and reset current page
      setAppDataArray(arrayConverter(data));
      setAppNames(arrayConverter(data));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to handle filtering apps by hot
  async function hot(id) {
    try {
      const gamesOrApps = id.toLowerCase();
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sort-apps-apis/hot/${gamesOrApps}/${category}`);
      const data = await response.json();

      // Update app data and reset current page
      setAppDataArray(arrayConverter(data));
      setAppNames(arrayConverter(data));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Update the list of apps when filtered
  function updateAppsList(filteredApps) {
    setAppDataArray(filteredApps);
  }

  // Rendered component
  return (
    <div id={id} className="row justify-content-center App-Game-Section">
      <AppFilterSection
        category={category} 
        id={id} 
        mostDownloads={mostDownloads} 
        newest={newest} 
        hot={hot} 
      />

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
