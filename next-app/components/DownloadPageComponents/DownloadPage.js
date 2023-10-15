import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Stars from './Stars.js';
import Image from 'next/image';
import Header from '../HeaderComponents/Header.js';
import AppInfo from './AppInfo';
import Description from './Description';
import img from './img.png';

function DownloadPage({ data }) {
  const router = useRouter(); // Soon to be used with download btn

  return (
    <>
      <Header />
      <div id='Content' className='row'>
        <div className='row'>
          <Image id='Download-Page-Image' src={img} alt='img' />
        </div>
        <div className='row text-center'>
          <h3>{data.appName}</h3>
        </div>
        <div id='Stars' className='text-center'>
          {Stars(data.appRating)}
        </div>
        <AppInfo 
        	appName={data.appName} 
        	appCategory={data.appCategory} 
        	appVersion={data.appVersion} 
        	appRequirement={data.appRequirement}
        	appSize={data.appSize}
        />
        <div id='Download-Page-Button' className='row justify-content-center align-items-center'>
          <button 
          	type='button' 
          	className='col-5 btn btn-dark' 
          	onClick={() => router.push(`${data.appDownloadLink}`)}
          >
            Download
          </button>
        </div>
        <div id='Description-h4' className='row'>
          <h4>Description</h4>
        </div>
        <div id='Description-p' className='row'>
          <p>{data.appDescription}</p>
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
